import { Box, Typography } from "@mui/material";


interface KPICardProps {
  label: string;
  value: string;
  trend?: string;
  up?: boolean;
}


export const KPICard = ({ label, value, trend = '0%', up = true }: KPICardProps) => {
  return (
    <Box
      sx={{
        flex: { xs: "1 1 calc(50% - 6px)", sm: "1 1 160px" },
        minWidth: { xs: "120px", sm: "160px" },
        background: "#0f1117",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 3,
        p: { xs: 2, sm: 2.5, md: 3 },
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.2s, transform 0.2s",
        "&:hover": {
          borderColor: "rgba(124,106,247,0.35)",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -24,
          right: -24,
          width: 72,
          height: 72,
          background:
            "radial-gradient(circle, rgba(124,106,247,0.1), transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <Typography
        sx={{
          fontSize: { xs: 9, sm: 10 },
          color: "#4a4d6a",
          textTransform: "uppercase",
          letterSpacing: 1.5,
          mb: 1.5,
        }}
      >
        {label}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "#fff",
          fontWeight: 700,
          letterSpacing: -0.5,
          mb: 1,
          fontSize: { xs: 18, sm: 20, md: 24 },
        }}
      >
        {value}
      </Typography>
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 0.5,
          background: up ? "rgba(52,211,153,0.1)" : "rgba(239,68,68,0.1)",
          color: up ? "#34d399" : "#ef4444",
          fontSize: { xs: 10, sm: 11 },
          fontWeight: 600,
          px: 1.2,
          py: 0.4,
          borderRadius: 100,
        }}
      >
        {up ? "↑" : "↓"} {trend} vs last period
      </Box>
    </Box>
  );
};
