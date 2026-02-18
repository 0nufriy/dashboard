import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, SxProps, Theme, Box } from "@mui/material";

interface TablePanelProps {
  headers: string[];
  children: React.ReactNode;
  headSx?: SxProps<Theme>;
  containerSx?: SxProps<Theme>;
}

export const TablePanel = ({
  headers,
  children,
  headSx,
  containerSx,
}: TablePanelProps) => {
  const defaultHeadSx = {
    color: "#8b8fa8",
    fontSize: { xs: 10, sm: 11 },
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    background: "transparent",
    borderBottom: "1px solid rgba(255,255,255,0.07)",
    whiteSpace: "nowrap",
  };

  const defaultContainerSx = {
    background: "#0f1117",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 3,
    overflow: "auto",
  };

  return (
    <Box
      role="region"
      aria-label="Таблиця даних"
      sx={{
        width: "100%",
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
        "-ms-overflow-style": "auto",
        "&::-webkit-scrollbar": {
          height: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: "rgba(255,255,255,0.02)",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(124,106,247,0.2)",
          borderRadius: "4px",
          "&:hover": {
            background: "rgba(124,106,247,0.35)",
          },
        },
      }}
    >
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          ...defaultContainerSx,
          ...containerSx,
        }}
      >
        <Table sx={{ minWidth: { xs: 500, sm: 700 } }}>
          <TableHead>
            <TableRow>
              {headers.map((h) => (
                <TableCell key={h} sx={{ ...defaultHeadSx, ...headSx }}>
                  {h}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{children}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
