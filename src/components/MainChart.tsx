'use client';
import { Paper, Typography, Box, Chip } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartDataPoint {
  name: string;
  sales: number;
}

const data: ChartDataPoint[] = [
  { name: 'Mon', sales: 4000 },
  { name: 'Tue', sales: 3000 },
  { name: 'Wed', sales: 5000 },
  { name: 'Thu', sales: 2780 },
  { name: 'Fri', sales: 1890 },
  { name: 'Sat', sales: 2390 },
  { name: 'Sun', sales: 3490 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
  }>;
  label?: string;
}


const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <Box sx={{
        background: '#1a1d2e',
        border: '1px solid rgba(124,106,247,0.3)',
        borderRadius: 2,
        px: { xs: 1.5, sm: 2 },
        py: { xs: 1, sm: 1.5 },
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
      }}>
        <Typography sx={{ fontSize: { xs: 10, sm: 11 }, color: '#6b6e88', mb: 0.5 }}>{label}</Typography>
        <Typography sx={{ fontSize: { xs: 14, sm: 18 }, fontWeight: 700, color: '#a599f9' }}>
          ${payload[0].value.toLocaleString()}
        </Typography>
      </Box>
    );
  }
  return null;
};


export default function MainChart() {
  return (
    <Paper
      elevation={0}
      sx={{
        background: '#0f1117',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 3,
        p: { xs: 2, sm: 2.5, md: 3.5 },
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        mb: { xs: 2.5, sm: 3.5 },
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 1.5, sm: 0 },
        alignItems: { xs: 'flex-start', sm: 'center' },
      }}>
        <Box>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#fff', 
              fontWeight: 700, 
              mb: 0.3,
              fontSize: { xs: 16, sm: 18, md: 20 },
            }}
          >
            Revenue Dynamics
          </Typography>
          <Typography sx={{ fontSize: { xs: 11, sm: 12 }, color: '#4a4d6a' }}>
            Weekly performance
          </Typography>
        </Box>
        <Chip
          label="7D"
          size="small"
          sx={{
            background: 'rgba(124,106,247,0.12)',
            color: '#a599f9',
            border: '1px solid rgba(124,106,247,0.25)',
            fontWeight: 600,
            fontSize: { xs: 10, sm: 11 },
            height: { xs: 24, sm: 26 },
          }}
        />
      </Box>

      <Box
        aria-label="Діаграма доходів"
        role="img"
        sx={{ width: '100%', height: { xs: 200, sm: 240, md: 280 } }}
      >
        <ResponsiveContainer>
          <LineChart data={data}>
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7c6af7" />
                <stop offset="100%" stopColor="#c855f7" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.04)" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#4a4d6a', fontSize: 10 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#4a4d6a', fontSize: 10 }}
              tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(124,106,247,0.2)', strokeWidth: 1 }} />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="url(#lineGrad)"
              strokeWidth={2}
              dot={{ r: 4, fill: '#7c6af7', stroke: '#0f1117', strokeWidth: 2 }}
              activeDot={{ r: 6, fill: '#c855f7', stroke: '#0f1117', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}