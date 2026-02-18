"use client";
import {
  Box,
  Chip,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Select,
  MenuItem,
  FormControl,
  Container,
} from "@mui/material";
import { FilterList } from "@mui/icons-material";
import { CardsList } from "@/components/CardsList";
import { PageHeader } from "@/components/PageHeader";
import { Pagination } from "@/components/Pagination";
import { SearchInput } from "@/components/SearchInput";
import { TablePanel } from "@/components/TablePanel";
import { EmptyTableState } from "@/components/EmptyTableState";
import { useTableFilters } from "@/hooks/useTableFilters";
import {
  ALL_ORDERS,
  PAGE_SIZE,
  statusConfig,
  summaryCards,
} from "@/data/orders";
import { CELL_SX, HEAD_SX } from "@/constants/styles";

export default function OrdersPage() {
  const { 
    search, 
    filters,
    page, 
    paginated, 
    totalPages, 
    pageButtons, 
    filtered,
    setSearch, 
    setFilter,
    setPage
  } = useTableFilters({
    data: ALL_ORDERS,
    pageSize: PAGE_SIZE,
    searchFields: ["id", "customer", "product"],
    filterConfigs: { status: "all" },
  });

  return (
    <Container component="main" maxWidth="xl">
      <Box sx={{ flex: 1, p: { xs: 2, sm: 3, md: 5 }, overflowY: "auto" }}>
        <PageHeader title="Orders" />

        <CardsList cards={summaryCards} variant="kpi" wrapperSx={{ mb: { xs: 3, sm: 4 } }} />

        <Box
          sx={{
            display: "flex",
            gap: { xs: 1, sm: 2 },
            alignItems: "center",
            mb: { xs: 2, sm: 2.5 },
            flexWrap: "wrap",
          }}
        >
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search orders…"
          />

          <FormControl size="small">
            <Select
              value={filters.status}
              onChange={(e) => setFilter("status", e.target.value)}
              startAdornment={
                <FilterList
                  sx={{ fontSize: { xs: 13, sm: 15 }, color: "#4a4d6a", mr: 0.5 }}
                />
              }
              sx={{
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
              }}
              MenuProps={{
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
              }}
            >
              <MenuItem value="all">All Statuses</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Cancelled">Cancelled</MenuItem>
              <MenuItem value="Refunded">Refunded</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <TablePanel
          headers={[
            "Order ID",
            "Customer",
            "Product",
            "Date",
            "Amount",
            "Status",
          ]}
          headSx={HEAD_SX}
        >
          {paginated.length === 0 ? (
            <EmptyTableState
              colSpan={6}
              message="No orders match your search."
            />
          ) : (
            paginated.map((row) => {
              const s = statusConfig[row.status];
              return (
                <TableRow
                  key={row.id}
                  sx={{
                    "&:hover": { background: "rgba(124,106,247,0.04)" },
                    cursor: "pointer",
                  }}
                >
                  <TableCell
                    sx={{
                      ...CELL_SX,
                      color: "#a599f9",
                      fontWeight: 600,
                      fontFamily: "monospace",
                      fontSize: { xs: 11, sm: 13 },
                    }}
                  >
                    {row.id}
                  </TableCell>
                  <TableCell sx={CELL_SX}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: { xs: 1, sm: 1.5 },
                      }}
                    >
                      <Avatar
                        sx={{
                          width: { xs: 24, sm: 28 },
                          height: { xs: 24, sm: 28 },
                          fontSize: { xs: 9, sm: 11 },
                          fontWeight: 700,
                          background:
                            "linear-gradient(135deg, #7c6af7, #c855f7)",
                          flexShrink: 0,
                        }}
                      >
                        {row.avatar}
                      </Avatar>
                      <Box sx={{ fontSize: { xs: 12, sm: 13 } }}>{row.customer}</Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ ...CELL_SX }}>{row.product}</TableCell>
                  <TableCell sx={{ ...CELL_SX, color: "#6b6e88" }}>
                    {row.date}
                  </TableCell>
                  <TableCell
                    sx={{ ...CELL_SX, fontWeight: 600, color: "#fff" }}
                  >
                    {row.amount}
                  </TableCell>
                  <TableCell sx={CELL_SX}>
                    <Chip
                      label={row.status}
                      size="small"
                      sx={{
                        background: s.bg,
                        color: s.color,
                        fontWeight: 600,
                        fontSize: { xs: 10, sm: 11 },
                        height: { xs: 20, sm: 22 },
                        border: `1px solid ${s.color}22`,
                      }}
                    />
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TablePanel>

        <Pagination
          page={page}
          totalPages={totalPages}
          filtered={filtered.length}
          PAGE_SIZE={PAGE_SIZE}
          onPageChange={setPage}
          pageButtons={pageButtons}
        />
      </Box>
    </Container>
  );
}
