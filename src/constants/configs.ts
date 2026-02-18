export const STATUS_CONFIG: Record<string, { color: string; bg: string }> = {
  Completed: { color: "#34d399", bg: "rgba(52,211,153,0.1)" },
  Pending: { color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
  Cancelled: { color: "#ef4444", bg: "rgba(239,68,68,0.1)" },
  Refunded: { color: "#8b8fa8", bg: "rgba(139,143,168,0.1)" },
};

export const STATUS_CONFIG_ACTIVE: Record<string, { color: string }> = {
  Active: { color: "#34d399" },
  Inactive: { color: "#f59e0b" },
  Churned: { color: "#ef4444" },
};

export const PLAN_CONFIG: Record<string, { color: string; bg: string }> = {
  Enterprise: { color: "#a599f9", bg: "rgba(124,106,247,0.12)" },
  Pro: { color: "#34d399", bg: "rgba(52,211,153,0.1)" },
  Starter: { color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
};

export const CHANNEL_COLORS = ["#7c6af7", "#c855f7", "#34d399", "#f59e0b"];

export const RANGE_LABELS: Record<string, string> = {
  "7D": "Last 7 days",
  "30D": "Last 30 days",
  "90D": "Last 90 days",
  "1Y": "Last 12 months",
};
