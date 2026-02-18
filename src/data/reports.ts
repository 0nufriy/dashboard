export const ALL_REVENUE_DATA = {
  "7D": [
    { month: "Mon", revenue: 9800, expenses: 4500 },
    { month: "Tue", revenue: 11200, expenses: 5100 },
    { month: "Wed", revenue: 10400, expenses: 4800 },
    { month: "Thu", revenue: 12600, expenses: 5700 },
    { month: "Fri", revenue: 14100, expenses: 6200 },
    { month: "Sat", revenue: 8900, expenses: 3900 },
    { month: "Sun", revenue: 7200, expenses: 3400 },
  ],
  "30D": [
    { month: "W1", revenue: 38000, expenses: 17000 },
    { month: "W2", revenue: 43000, expenses: 19500 },
    { month: "W3", revenue: 41000, expenses: 18800 },
    { month: "W4", revenue: 51000, expenses: 22000 },
  ],
  "90D": [
    { month: "Aug", revenue: 32000, expenses: 18000 },
    { month: "Sep", revenue: 41000, expenses: 22000 },
    { month: "Oct", revenue: 38000, expenses: 20000 },
    { month: "Nov", revenue: 52000, expenses: 25000 },
    { month: "Dec", revenue: 67000, expenses: 30000 },
    { month: "Jan", revenue: 58000, expenses: 27000 },
    { month: "Feb", revenue: 74000, expenses: 32000 },
  ],
  "1Y": [
    { month: "Mar", revenue: 28000, expenses: 15000 },
    { month: "Apr", revenue: 33000, expenses: 16500 },
    { month: "May", revenue: 36000, expenses: 17000 },
    { month: "Jun", revenue: 39000, expenses: 18500 },
    { month: "Jul", revenue: 43000, expenses: 20000 },
    { month: "Aug", revenue: 32000, expenses: 18000 },
    { month: "Sep", revenue: 41000, expenses: 22000 },
    { month: "Oct", revenue: 38000, expenses: 20000 },
    { month: "Nov", revenue: 52000, expenses: 25000 },
    { month: "Dec", revenue: 67000, expenses: 30000 },
    { month: "Jan", revenue: 58000, expenses: 27000 },
    { month: "Feb", revenue: 74000, expenses: 32000 },
  ],
};

export const ALL_CHANNEL_DATA = {
  "7D": [
    { name: "Organic", value: 42 },
    { name: "Paid Ads", value: 24 },
    { name: "Referral", value: 18 },
    { name: "Direct", value: 16 },
  ],
  "30D": [
    { name: "Organic", value: 35 },
    { name: "Paid Ads", value: 30 },
    { name: "Referral", value: 21 },
    { name: "Direct", value: 14 },
  ],
  "90D": [
    { name: "Organic", value: 38 },
    { name: "Paid Ads", value: 27 },
    { name: "Referral", value: 19 },
    { name: "Direct", value: 16 },
  ],
  "1Y": [
    { name: "Organic", value: 40 },
    { name: "Paid Ads", value: 25 },
    { name: "Referral", value: 20 },
    { name: "Direct", value: 15 },
  ],
};

export const ALL_CONVERSION_DATA = {
  "7D": [
    { week: "Mon", rate: 3.1 },
    { week: "Tue", rate: 3.6 },
    { week: "Wed", rate: 2.9 },
    { week: "Thu", rate: 4.0 },
    { week: "Fri", rate: 3.8 },
    { week: "Sat", rate: 2.4 },
    { week: "Sun", rate: 2.1 },
  ],
  "30D": [
    { week: "W1", rate: 3.0 },
    { week: "W2", rate: 3.4 },
    { week: "W3", rate: 3.1 },
    { week: "W4", rate: 3.7 },
  ],
  "90D": [
    { week: "W1", rate: 2.8 },
    { week: "W2", rate: 3.1 },
    { week: "W3", rate: 2.5 },
    { week: "W4", rate: 3.8 },
    { week: "W5", rate: 3.2 },
    { week: "W6", rate: 4.1 },
    { week: "W7", rate: 3.9 },
  ],
  "1Y": [
    { week: "Mar", rate: 2.1 },
    { week: "Apr", rate: 2.4 },
    { week: "May", rate: 2.6 },
    { week: "Jun", rate: 2.8 },
    { week: "Jul", rate: 3.0 },
    { week: "Aug", rate: 2.9 },
    { week: "Sep", rate: 3.2 },
    { week: "Oct", rate: 3.0 },
    { week: "Nov", rate: 3.5 },
    { week: "Dec", rate: 3.7 },
    { week: "Jan", rate: 3.4 },
    { week: "Feb", rate: 4.1 },
  ],
};

export const ALL_KPIS = {
  "7D": [
    { label: "Revenue", value: "$74,200", trend: "+8%", up: true },
    { label: "Expenses", value: "$33,600", trend: "+3%", up: false },
    { label: "Net Profit", value: "$40,600", trend: "+11%", up: true },
    { label: "Avg Conv. Rate", value: "3.1%", trend: "+0.3%", up: true },
  ],
  "30D": [
    { label: "Revenue", value: "$173,000", trend: "+18%", up: true },
    { label: "Expenses", value: "$77,300", trend: "+9%", up: false },
    { label: "Net Profit", value: "$95,700", trend: "+24%", up: true },
    { label: "Avg Conv. Rate", value: "3.3%", trend: "+0.4%", up: true },
  ],
  "90D": [
    { label: "Revenue", value: "$74,320", trend: "+28%", up: true },
    { label: "Expenses", value: "$32,100", trend: "+12%", up: false },
    { label: "Net Profit", value: "$42,220", trend: "+41%", up: true },
    { label: "Avg Conv. Rate", value: "3.3%", trend: "+0.5%", up: true },
  ],
  "1Y": [
    { label: "Revenue", value: "$541,000", trend: "+63%", up: true },
    { label: "Expenses", value: "$237,000", trend: "+28%", up: false },
    { label: "Net Profit", value: "$304,000", trend: "+89%", up: true },
    { label: "Avg Conv. Rate", value: "3.1%", trend: "+1.0%", up: true },
  ],
};

export const RANGE_LABELS: Record<string, string> = {
  "7D": "Last 7 days",
  "30D": "Last 30 days",
  "90D": "Last 90 days",
  "1Y": "Last 12 months",
};

export const CHANNEL_COLORS = ["#7c6af7", "#c855f7", "#34d399", "#f59e0b"];

export const panelSx = {
  background: "#0f1117",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: 3,
  p: 3.5,
};
