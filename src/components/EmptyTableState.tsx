import { TableRow, TableCell, SxProps, Theme } from "@mui/material";
import { CELL_SX } from "@/constants/styles";

interface EmptyTableStateProps {
  colSpan: number;
  message: string;
  cellSx?: SxProps<Theme>;
}

export const EmptyTableState = ({
  colSpan,
  message,
  cellSx = {},
}: EmptyTableStateProps) => (
  <TableRow>
    <TableCell
      colSpan={colSpan}
      sx={{
        ...CELL_SX,
        textAlign: "center",
        py: { xs: 4, sm: 6 },
        color: "#4a4d6a",
        fontSize: { xs: 12, sm: 13 },
        ...cellSx,
      }}
    >
      {message}
    </TableCell>
  </TableRow>
);
