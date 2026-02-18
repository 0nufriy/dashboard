"use client";
import { Box, Typography } from "@mui/material";

interface PayloadItem {
  name: string;
  value: number;
  color: string;
}

interface DarkTooltipProps {
  active?: boolean;
  payload?: PayloadItem[];
  label?: string;
}

export const DarkTooltip = ({ active, payload, label }: DarkTooltipProps) => {
  if (!active || !payload?.length) return null;
  return (
    <Box
      sx={{
        background: "#1a1d2e",
        border: "1px solid rgba(124,106,247,0.3)",
        borderRadius: 2,
        px: { xs: 1.5, sm: 2 },
        py: { xs: 1, sm: 1.5 },
        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
      }}
    >
      <Typography sx={{ fontSize: { xs: 10, sm: 11 }, color: "#6b6e88", mb: 0.5 }}>
        {label}
      </Typography>
      {payload.map((p: PayloadItem) => (
        <Box
          key={p.name}
          sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.3 }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: p.color,
              flexShrink: 0,
            }}
          />
          <Typography sx={{ fontSize: { xs: 12, sm: 13 }, fontWeight: 600, color: "#e2e4f0" }}>
            {typeof p.value === "number" && p.value > 100
              ? `$${p.value.toLocaleString()}`
              : p.value}
            {typeof p.value === "number" && p.value <= 100 ? "%" : ""}
          </Typography>
          <Typography sx={{ fontSize: { xs: 10, sm: 11 }, color: "#4a4d6a" }}>
            {p.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
