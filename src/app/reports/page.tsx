"use client";
import { useState, useMemo } from "react";
import { Box, Paper, Chip, Container, Typography } from "@mui/material";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { CardsList } from "@/components/CardsList";
import { PageHeader } from "@/components/PageHeader";
import { SectionBadge } from "@/components/SectionBadge";
import { DarkTooltip } from "@/components/DarkTooltip";
import {
  ALL_REVENUE_DATA,
  ALL_CHANNEL_DATA,
  ALL_CONVERSION_DATA,
  ALL_KPIS,
  RANGE_LABELS,
  CHANNEL_COLORS,
  panelSx,
} from "@/data/reports";

export default function ReportsPage() {
  const [activeRange, setActiveRange] = useState<"7D" | "30D" | "90D" | "1Y">(
    "90D",
  );

  const revenueData = useMemo(
    () => ALL_REVENUE_DATA[activeRange],
    [activeRange],
  );
  const channelData = useMemo(
    () => ALL_CHANNEL_DATA[activeRange],
    [activeRange],
  );
  const conversionData = useMemo(
    () => ALL_CONVERSION_DATA[activeRange],
    [activeRange],
  );
  const kpis = useMemo(() => ALL_KPIS[activeRange], [activeRange]);
  const rangeLabel = RANGE_LABELS[activeRange];

  return (
    <Container maxWidth="xl">
      <Box component="main" sx={{ flex: 1, p: { xs: 2, sm: 3, md: 5 }, overflowY: "auto" }}>
        <PageHeader pretitle="Analytics" title="Reports" />

        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, sm: 1.5 }, mb: { xs: 3, sm: 5 }, flexWrap: "wrap" }}>
          {(["7D", "30D", "90D", "1Y"] as const).map((t) => {
            const isActive = t === activeRange;
            return (
              <Chip
                key={t}
                label={t}
                size="small"
                onClick={() => setActiveRange(t)}
                sx={{
                  background: isActive
                    ? "rgba(124,106,247,0.18)"
                    : "transparent",
                  color: isActive ? "#a599f9" : "#4a4d6a",
                  border: `1px solid ${isActive ? "rgba(124,106,247,0.3)" : "rgba(255,255,255,0.07)"}`,
                  fontWeight: isActive ? 600 : 400,
                  fontSize: { xs: 10, sm: 11 },
                  cursor: "pointer",
                  transition: "all 0.18s ease",
                  "&:hover": {
                    background: "rgba(124,106,247,0.1)",
                    color: "#a599f9",
                  },
                  "& .MuiChip-label": { px: { xs: 1, sm: 1.5 } },
                }}
              />
            );
          })}
        </Box>

        <CardsList cards={kpis} variant="kpi" wrapperSx={{ mb: { xs: 2.5, sm: 3.5 } }} />

          <Paper elevation={0} sx={{ ...panelSx, mb: { xs: 2.5, sm: 3 } }}>
            <SectionBadge>Revenue vs Expenses</SectionBadge>
            <Typography
              variant="h6"
              sx={{ color: "#fff", fontWeight: 700, mb: 0.3, fontSize: { xs: 16, sm: 18, md: 20 } }}
            >
              Financial Overview
            </Typography>
            <Typography sx={{ fontSize: { xs: 11, sm: 12 }, color: "#4a4d6a", mb: { xs: 2, sm: 3 } }}>
              {rangeLabel}
            </Typography>
            <Box sx={{ height: { xs: 200, sm: 240, md: 260 } }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7c6af7" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#7c6af7" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="expGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#c855f7" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#c855f7" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="rgba(255,255,255,0.04)"
                  />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#4a4d6a", fontSize: 10 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#4a4d6a", fontSize: 10 }}
                    tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                  />
                  <Tooltip
                    content={<DarkTooltip />}
                    cursor={{
                      stroke: "rgba(124,106,247,0.15)",
                      strokeWidth: 1,
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    name="Revenue"
                    stroke="#7c6af7"
                    strokeWidth={2.5}
                    fill="url(#revGrad)"
                    dot={false}
                    activeDot={{
                      r: 5,
                      fill: "#7c6af7",
                      stroke: "#0f1117",
                      strokeWidth: 2,
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="expenses"
                    name="Expenses"
                    stroke="#c855f7"
                    strokeWidth={2.5}
                    fill="url(#expGrad)"
                    dot={false}
                    activeDot={{
                      r: 5,
                      fill: "#c855f7",
                      stroke: "#0f1117",
                      strokeWidth: 2,
                    }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </Paper>

          <Box
            sx={{
              display: "flex",
              gap: { xs: 2, sm: 3 },
              flexWrap: "wrap",
              alignItems: "stretch",
            }}
          >
            <Paper elevation={0} sx={{ ...panelSx, flex: { xs: "1 1 100%", sm: "1 1 280px" } }}>
              <SectionBadge>Traffic</SectionBadge>
              <Typography
                variant="h6"
                sx={{ color: "#fff", fontWeight: 700, mb: 0.3, fontSize: { xs: 16, sm: 18, md: 20 } }}
              >
                Acquisition Channels
              </Typography>
              <Typography sx={{ fontSize: { xs: 11, sm: 12 }, color: "#4a4d6a", mb: 2 }}>
                {rangeLabel}
              </Typography>
              <Box sx={{ height: { xs: 200, sm: 220 } }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={channelData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={65}
                      paddingAngle={4}
                      dataKey="value"
                      isAnimationActive
                    >
                      {channelData.map((_, i) => (
                        <Cell
                          key={i}
                          fill={CHANNEL_COLORS[i]}
                          stroke="transparent"
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      content={({ active, payload }) =>
                        active && payload?.length ? (
                          <Box
                            sx={{
                              background: "#1a1d2e",
                              border: "1px solid rgba(124,106,247,0.3)",
                              borderRadius: 2,
                              px: 2,
                              py: 1.2,
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: { xs: 11, sm: 13 },
                                fontWeight: 700,
                                color: "#e2e4f0",
                              }}
                            >
                              {payload[0].name}: {payload[0].value}%
                            </Typography>
                          </Box>
                        ) : null
                      }
                    />
                    <Legend
                      formatter={(value) => (
                        <span style={{ color: "#8b8fa8", fontSize: 10 }}>
                          {value}
                        </span>
                      )}
                      iconType="circle"
                      iconSize={8}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </Paper>

            <Paper elevation={0} sx={{ ...panelSx, flex: { xs: "1 1 100%", sm: "2 1 320px" } }}>
              <SectionBadge>Conversion</SectionBadge>
              <Typography
                variant="h6"
                sx={{ color: "#fff", fontWeight: 700, mb: 0.3, fontSize: { xs: 16, sm: 18, md: 20 } }}
              >
                Conversion Rate
              </Typography>
              <Typography sx={{ fontSize: { xs: 11, sm: 12 }, color: "#4a4d6a", mb: 2 }}>
                {rangeLabel}, %
              </Typography>
              <Box sx={{ height: { xs: 200, sm: 220 } }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={conversionData} barSize={16}>
                    <defs>
                      <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#7c6af7" />
                        <stop offset="100%" stopColor="#c855f7" />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="rgba(255,255,255,0.04)"
                    />
                    <XAxis
                      dataKey="week"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#4a4d6a", fontSize: 10 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#4a4d6a", fontSize: 10 }}
                      tickFormatter={(v) => `${v}%`}
                      domain={[0, 5]}
                    />
                    <Tooltip
                      content={<DarkTooltip />}
                      cursor={{ fill: "rgba(124,106,247,0.06)" }}
                    />
                    <Bar
                      dataKey="rate"
                      name="Conv. Rate"
                      fill="url(#barGrad)"
                      radius={[4, 4, 0, 0]}
                      isAnimationActive
                    />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
          </Box>
        </Box>
    </Container>
  );
}
