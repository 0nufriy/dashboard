"use client";
import {
  Box,
  Chip,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Container,
  LinearProgress,
} from "@mui/material";
import { CardsList } from "@/components/CardsList";
import { FilterChipsList } from "@/components/FilterChipsList";
import { PageHeader } from "@/components/PageHeader";
import { Pagination } from "@/components/Pagination";
import { SearchInput } from "@/components/SearchInput";
import { TablePanel } from "@/components/TablePanel";
import { EmptyTableState } from "@/components/EmptyTableState";
import { CELL_SX, HEAD_SX } from "@/constants/styles";
import {
  PLAN_CONFIG as PLAN_COLORS,
  STATUS_CONFIG_ACTIVE,
} from "@/constants/configs";
import { useTableFilters } from "@/hooks/useTableFilters";
import {
  ALL_CUSTOMERS,
  PLAN_OPTIONS,
  STATUS_OPTIONS,
  PAGE_SIZE,
  summaryCards,
} from "@/data/customers";

export default function CustomersPage() {
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
    data: ALL_CUSTOMERS,
    pageSize: PAGE_SIZE,
    searchFields: ["name", "email", "plan"],
    filterConfigs: { plan: "All", status: "All" },
  });

  return (
    <Container component="main" maxWidth="xl">
      <Box sx={{ flex: 1, p: { xs: 2, sm: 3, md: 5 }, overflowY: "auto" }}>
        <PageHeader title="Customers" />

        <CardsList cards={summaryCards} variant="summary" wrapperSx={{ mb: { xs: 3, sm: 4 } }} />

        <Box
          sx={{
            display: "flex",
            gap: { xs: 1, sm: 2 },
            alignItems: "center",
            flexWrap: "wrap",
            mb: { xs: 2, sm: 2.5 },
          }}
        >
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search customers…"
          />

          <FilterChipsList
            options={PLAN_OPTIONS as unknown as string[]}
            activeValue={filters.plan}
            onSelect={(value) => setFilter("plan", value)}
          />

          <Box
            sx={{
              width: 1,
              height: 2,
              background: "rgba(255,255,255,0.08)",
              display: { xs: "none", sm: "block" },
            }}
          />

          <FilterChipsList
            options={STATUS_OPTIONS as unknown as string[]}
            activeValue={filters.status}
            onSelect={(value) => setFilter("status", value)}
          />
        </Box>

        <TablePanel
          headers={[
            "Customer",
            "Plan",
            "Total Spent",
            "Orders",
            "Joined",
            "LTV Score",
            "Status",
          ]}
          headSx={HEAD_SX}
        >
          {paginated.length === 0 ? (
            <EmptyTableState
              colSpan={7}
              message="No customers match your filters."
            />
          ) : (
            paginated.map((row) => {
              const plan = PLAN_COLORS[row.plan];
              const status = STATUS_CONFIG_ACTIVE[row.status];
              return (
                <TableRow
                  key={row.email}
                  sx={{
                    "&:hover": { background: "rgba(124,106,247,0.04)" },
                    cursor: "pointer",
                  }}
                >
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
                          width: { xs: 28, sm: 32 },
                          height: { xs: 28, sm: 32 },
                          fontSize: { xs: 10, sm: 12 },
                          fontWeight: 700,
                          background:
                            "linear-gradient(135deg, #7c6af7, #c855f7)",
                          flexShrink: 0,
                        }}
                      >
                        {row.avatar}
                      </Avatar>
                      <Box>
                        <Box
                          sx={{
                            fontSize: { xs: 12, sm: 13 },
                            fontWeight: 600,
                            color: "#e2e4f0",
                          }}
                        >
                          {row.name}
                        </Box>
                        <Box sx={{ fontSize: { xs: 10, sm: 11 }, color: "#4a4d6a", display: { xs: "none", sm: "block" } }}>
                          {row.email}
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={CELL_SX}>
                    <Chip
                      label={row.plan}
                      size="small"
                      sx={{
                        background: plan.bg,
                        color: plan.color,
                        fontWeight: 600,
                        fontSize: { xs: 10, sm: 11 },
                        height: { xs: 20, sm: 22 },
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{ ...CELL_SX, fontWeight: 600, color: "#fff" }}
                  >
                    {row.spent}
                  </TableCell>
                  <TableCell sx={{ ...CELL_SX, color: "#8b8fa8" }}>
                    {row.orders}
                  </TableCell>
                  <TableCell sx={{ ...CELL_SX, color: "#6b6e88" }}>
                    {row.joined}
                  </TableCell>
                  <TableCell sx={{ ...CELL_SX, minWidth: { xs: 100, sm: 120 } }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: { xs: 1, sm: 1.5 },
                      }}
                    >
                      <LinearProgress
                        variant="determinate"
                        value={row.ltv}
                        sx={{
                          flex: 1,
                          height: 5,
                          borderRadius: 3,
                          background: "rgba(255,255,255,0.06)",
                          "& .MuiLinearProgress-bar": {
                            background:
                              row.ltv >= 70
                                ? "linear-gradient(90deg, #7c6af7, #c855f7)"
                                : row.ltv >= 40
                                  ? "linear-gradient(90deg, #34d399, #059669)"
                                  : "linear-gradient(90deg, #f59e0b, #d97706)",
                            borderRadius: 3,
                          },
                        }}
                      />
                      <Box
                        sx={{
                          fontSize: { xs: 10, sm: 11 },
                          color: "#6b6e88",
                          minWidth: 24,
                        }}
                      >
                        {row.ltv}
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={CELL_SX}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: status.color,
                          flexShrink: 0,
                        }}
                      />
                      <Box
                        sx={{
                          fontSize: { xs: 11, sm: 12 },
                          color: status.color,
                          fontWeight: 500,
                        }}
                      >
                        {row.status}
                      </Box>
                    </Box>
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
