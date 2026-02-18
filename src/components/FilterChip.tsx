"use client";
import { Chip } from "@mui/material";

interface FilterChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export const FilterChip = ({ label, active, onClick }: FilterChipProps) => {
  return (
    <Chip
      label={label}
      size="small"
      onClick={onClick}
      sx={{
        background: active ? "rgba(124,106,247,0.18)" : "transparent",
        color: active ? "#a599f9" : "#4a4d6a",
        border: `1px solid ${active ? "rgba(124,106,247,0.3)" : "rgba(255,255,255,0.07)"}`,
        fontWeight: active ? 600 : 400,
        fontSize: { xs: 10, sm: 11 },
        cursor: "pointer",
        transition: "all 0.15s",
        "&:hover": { background: "rgba(124,106,247,0.1)", color: "#a599f9" },
        "& .MuiChip-label": { px: { xs: 1, sm: 1.5 } },
        height: { xs: 28, sm: 32 },
      }}
    />
  );
};
