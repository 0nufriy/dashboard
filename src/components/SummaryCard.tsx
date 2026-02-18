"use client";
import { Box, Typography } from "@mui/material";
import { SUMMARY_CARD_SX, GRADIENT_OVERLAY } from "@/constants/styles";

interface SummaryCardProps {
  label: string;
  value: string;
  sub?: string;
  trend?: string;
  up?: boolean;
}

export const SummaryCard = ({ label, value, sub, trend, up }: SummaryCardProps) => {
  return (
    <Box sx={{ ...SUMMARY_CARD_SX, flex: { xs: "1 1 calc(50% - 6px)", sm: "1 1 160px" }, minWidth: { xs: "140px", sm: "160px" } }}>
      <Box
        sx={GRADIENT_OVERLAY}
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
      {sub && (
        <Typography
          sx={{
            fontSize: { xs: 10, sm: 11 },
            fontWeight: 600,
            color: up ? "#34d399" : "#f59e0b",
          }}
        >
          {sub}
        </Typography>
      )}
      {trend && (
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
            background: up
              ? "rgba(52,211,153,0.1)"
              : "rgba(239,68,68,0.1)",
            color: up ? "#34d399" : "#ef4444",
            fontSize: { xs: 10, sm: 11 },
            fontWeight: 600,
            px: 1.2,
            py: 0.4,
            borderRadius: 100,
            mt: 1,
          }}
        >
          {up ? "↑" : "↓"} {trend}
        </Box>
      )}
    </Box>
  );
};
