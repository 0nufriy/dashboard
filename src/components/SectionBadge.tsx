"use client";
import { Box } from "@mui/material";

interface SectionBadgeProps {
  children: string;
}

export const SectionBadge = ({ children }: SectionBadgeProps) => (
  <Box
    sx={{
      display: "inline-block",
      fontSize: { xs: 8, sm: 9 },
      letterSpacing: 2.5,
      textTransform: "uppercase",
      fontWeight: 700,
      color: "#a599f9",
      background: "rgba(124,106,247,0.12)",
      border: "1px solid rgba(124,106,247,0.25)",
      borderRadius: 100,
      px: 1.5,
      py: 0.4,
      mb: 1.5,
    }}
  >
    {children}
  </Box>
);
