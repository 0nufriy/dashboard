import { Box } from "@mui/material";
import { FilterChip } from "@/components/FilterChip";

interface FilterChipsListProps {
  options: string[];
  activeValue: string;
  onSelect: (value: string) => void;
  label?: string;
}

export const FilterChipsList = ({
  options,
  activeValue,
  onSelect,
  label,
}: FilterChipsListProps) => (
  <Box sx={{ display: "flex", gap: { xs: 0.5, sm: 0.8 }, flexWrap: "wrap" }}>
    {options.map((option) => (
      <FilterChip
        key={option}
        label={option}
        active={activeValue === option}
        onClick={() => onSelect(option)}
      />
    ))}
  </Box>
);
