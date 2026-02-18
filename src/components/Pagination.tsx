import { Box, Typography } from "@mui/material";

interface PaginationProps {
  page: number;
  totalPages: number;
  filtered: number;
  PAGE_SIZE: number;
  onPageChange: (page: number) => void;
  pageButtons: (number | "…")[];
}

export const Pagination = ({
  page,
  totalPages,
  filtered,
  PAGE_SIZE,
  onPageChange,
  pageButtons,
}: PaginationProps) => {
  const safePage = Math.min(page, totalPages);

  const navBtnSx = (disabled: boolean) => ({
    width: { xs: 28, sm: 30 },
    height: { xs: 28, sm: 30 },
    borderRadius: 1.5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: { xs: 12, sm: 14 },
    cursor: disabled ? "not-allowed" : "pointer",
    color: disabled ? "#2a2d42" : "#4a4d6a",
    border: "1px solid transparent",
    transition: "all 0.15s",
    ...(!disabled && {
      "&:hover": { background: "rgba(124,106,247,0.1)", color: "#a599f9" },
    }),
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: { xs: 2, sm: 2.5 },
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 2, sm: 0 },
      }}
    >
      <Typography sx={{ fontSize: { xs: 11, sm: 12 }, color: "#4a4d6a" }}>
        {filtered === 0
          ? "No results"
          : `Showing ${(safePage - 1) * PAGE_SIZE + 1}–${Math.min(safePage * PAGE_SIZE, filtered)} of ${filtered}`}
      </Typography>

      <Box sx={{ display: "flex", gap: { xs: 0.5, sm: 1 } }}>
        <Box
          onClick={() => onPageChange(Math.max(1, safePage - 1))}
          sx={navBtnSx(safePage === 1)}
        >
          ←
        </Box>

        {pageButtons.map((p, i) =>
          p === "…" ? (
            <Box
              key={`ellipsis-${i}`}
              sx={{
                width: { xs: 28, sm: 30 },
                height: { xs: 28, sm: 30 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#4a4d6a",
                fontSize: { xs: 11, sm: 12 },
              }}
            >
              …
            </Box>
          ) : (
            <Box
              key={p}
              onClick={() => onPageChange(p as number)}
              sx={{
                width: { xs: 28, sm: 30 },
                height: { xs: 28, sm: 30 },
                borderRadius: 1.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: { xs: 11, sm: 12 },
                cursor: "pointer",
                background:
                  p === safePage ? "rgba(124,106,247,0.2)" : "transparent",
                color: p === safePage ? "#a599f9" : "#4a4d6a",
                border:
                  p === safePage
                    ? "1px solid rgba(124,106,247,0.3)"
                    : "1px solid transparent",
                "&:hover": {
                  background: "rgba(124,106,247,0.1)",
                  color: "#a599f9",
                },
                transition: "all 0.15s",
              }}
            >
              {p}
            </Box>
          ),
        )}

        <Box
          onClick={() => onPageChange(Math.min(totalPages, safePage + 1))}
          sx={navBtnSx(safePage === totalPages)}
        >
          →
        </Box>
      </Box>
    </Box>
  );
};
