export const calculatePageButtons = (currentPage: number, totalPages: number): (number | "…")[] => {
  const btns: (number | "…")[] = [];
  
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) btns.push(i);
  } else {
    btns.push(1);
    if (currentPage > 3) btns.push("…");
    
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      btns.push(i);
    }
    
    if (currentPage < totalPages - 2) btns.push("…");
    btns.push(totalPages);
  }
  
  return btns;
};

export const getNavButtonStyles = (disabled: boolean) => ({
  width: 30,
  height: 30,
  borderRadius: 1.5,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 14,
  cursor: disabled ? "not-allowed" : "pointer",
  color: disabled ? "#2a2d42" : "#4a4d6a",
  border: "1px solid transparent",
  transition: "all 0.15s",
  ...(!disabled && {
    "&:hover": { background: "rgba(124,106,247,0.1)", color: "#a599f9" },
  }),
});
