import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import { INPUT_ROOT_SX } from "@/constants/styles";
import { useState, useEffect } from "react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  debounceMs?: number;
}

export const SearchInput = ({
  value,
  onChange,
  placeholder = "Search…",
  debounceMs = 400,
}: SearchInputProps) => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (localValue !== value) {
        onChange(localValue);
      }
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [localValue, debounceMs]);

  return (
    <TextField
      placeholder={placeholder}
      size="small"
      value={localValue}
      onChange={(e) => setLocalValue(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search sx={{ fontSize: { xs: 14, sm: 16 }, color: "#4a4d6a" }} />
          </InputAdornment>
        ),
      }}
      sx={{
        flex: { xs: "1 1 100%", sm: "1 1 240px" },
        width: { xs: "100%", sm: "auto" },
        "& .MuiOutlinedInput-root": INPUT_ROOT_SX,
      }}
    />
  );
};