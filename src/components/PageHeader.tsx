import { Box, Typography } from "@mui/material";


interface PageHeaderProps {
  pretitle?: string;
  title: string;
  date?: string;
}


export const PageHeader = ({
  pretitle = "Management",
  title,
  date = "Feb 18, 2026",
}: PageHeaderProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        mb: { xs: 3, sm: 4, md: 5 },
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 2, sm: 0 },
      }}
    >
      <Box>
        <Typography
          variant="overline"
          sx={{
            color: "#4a4d6a",
            letterSpacing: 2.5,
            fontSize: { xs: 8, sm: 10 },
            display: "block",
            mb: 0.5,
          }}
        >
          {pretitle}
        </Typography>
        <Typography
          variant="h4"
          sx={{ 
            color: "#fff", 
            fontWeight: 700, 
            letterSpacing: -0.5,
            fontSize: { xs: 24, sm: 28, md: 32 },
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          background: "#0f1117",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 2,
          px: { xs: 1.5, sm: 2 },
          py: { xs: 0.75, sm: 1 },
          display: "flex",
          alignItems: "center",
          gap: 1,
          whiteSpace: "nowrap",
        }}
      >
        <Box
          sx={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#7c6af7",
            flexShrink: 0,
          }}
        />
        <Typography sx={{ fontSize: { xs: 11, sm: 12 }, color: "#6b6e88" }}>
          {date}
        </Typography>
      </Box>
    </Box>
  );
};
