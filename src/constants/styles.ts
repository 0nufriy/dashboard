export const PANEL_SX = {
  background: "#0f1117",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: 3,
  p: { xs: 2, sm: 2.5, md: 3.5 },
};

export const CELL_SX = {
  borderBottom: "1px solid rgba(255,255,255,0.04)",
  color: "#c4c6dc",
  fontSize: { xs: 12, sm: 13 },
  py: { xs: 1.5, sm: 1.8 },
};

export const HEAD_SX = {
  borderBottom: "1px solid rgba(255,255,255,0.07)",
  color: "#4a4d6a",
  fontSize: { xs: 9, sm: 10 },
  letterSpacing: 1.5,
  textTransform: "uppercase" as const,
  fontWeight: 600,
  py: { xs: 1.5, sm: 1.8 },
  background: "#0f1117",
  whiteSpace: "nowrap" as const,
};

export const SUMMARY_CARD_SX = {
  flex: { xs: "1 1 calc(50% - 6px)", sm: "1 1 160px" },
  minWidth: { xs: "140px", sm: "160px" },
  background: "#0f1117",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: 3,
  p: { xs: 2, sm: 2.5, md: 3 },
  position: "relative" as const,
  overflow: "hidden" as const,
  transition: "border-color 0.2s, transform 0.2s",
  "&:hover": {
    borderColor: "rgba(124,106,247,0.35)",
    transform: "translateY(-2px)",
  },
};

export const GRADIENT_OVERLAY = {
  position: "absolute" as const,
  top: -24,
  right: -24,
  width: 72,
  height: 72,
  background:
    "radial-gradient(circle, rgba(124,106,247,0.1), transparent 70%)",
  borderRadius: "50%",
  pointerEvents: "none" as const,
};

export const INPUT_ROOT_SX = {
  background: "#0f1117",
  borderRadius: 2,
  fontSize: { xs: 12, sm: 13 },
  color: "#c4c6dc",
  "& fieldset": { borderColor: "rgba(255,255,255,0.07)" },
  "&:hover fieldset": { borderColor: "rgba(124,106,247,0.3)" },
  "&.Mui-focused fieldset": { borderColor: "#7c6af7" },
};

export const SELECT_SX = {
  background: "#0f1117",
  borderRadius: 2,
  fontSize: { xs: 12, sm: 13 },
  color: "#c4c6dc",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255,255,255,0.07)",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(124,106,247,0.3)",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#7c6af7",
  },
  "& .MuiSelect-icon": { color: "#4a4d6a" },
};

export const SELECT_MENU_PROPS = {
  PaperProps: {
    sx: {
      background: "#13152a",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: 2,
      color: "#c4c6dc",
      "& .MuiMenuItem-root": {
        fontSize: { xs: 12, sm: 13 },
        "&:hover": { background: "rgba(124,106,247,0.1)" },
        "&.Mui-selected": {
          background: "rgba(124,106,247,0.18)",
          color: "#a599f9",
        },
        "&.Mui-selected:hover": {
          background: "rgba(124,106,247,0.25)",
        },
      },
    },
  },
};
