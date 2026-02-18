'use client';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { TrendingUp, AttachMoney, ShoppingBag, Group } from '@mui/icons-material';

interface StatCard {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
  up: boolean;
}

const stats: StatCard[] = [
  { title: 'Total Earnings', value: '$24,500', icon: <AttachMoney />, trend: '+12%', up: true },
  { title: 'New Orders', value: '450', icon: <ShoppingBag />, trend: '+5%', up: true },
  { title: 'Active Users', value: '1,205', icon: <Group />, trend: '+18%', up: true },
  { title: 'Conversion', value: '3.2%', icon: <TrendingUp />, trend: '-2%', up: false },
];

export default function StatsCards() {
  return (
    <Box sx={{ 
      display: 'flex', 
      gap: { xs: 1.5, sm: 2, md: 2.5 }, 
      flexWrap: 'wrap' 
    }}>
      {stats.map((stat) => (
        <Card
          key={stat.title}
          elevation={0}
          sx={{
            flex: { xs: '1 1 calc(50% - 8px)', sm: '1 1 calc(50% - 10px)', md: '1 1 180px' },
            minWidth: { xs: '140px', sm: '160px' },
            background: '#0f1117',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 3,
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.2s, border-color 0.2s',
            '&:hover': {
              transform: 'translateY(-2px)',
              borderColor: 'rgba(124,106,247,0.35)',
            },
          }}
        >
          <Box sx={{
            position: 'absolute',
            top: -30,
            right: -30,
            width: 90,
            height: 90,
            background: 'radial-gradient(circle, rgba(124,106,247,0.12), transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }} />

          <CardContent sx={{ 
            p: { xs: 2, sm: 2.5, md: 3 }, 
            '&:last-child': { pb: { xs: 2, sm: 2.5, md: 3 } } 
          }}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start', 
              mb: 2 
            }}>
              <Typography
                variant="overline"
                sx={{ 
                  color: '#4a4d6a', 
                  fontSize: { xs: 9, sm: 10 }, 
                  letterSpacing: 1.5, 
                  lineHeight: 1, 
                  display: 'block',
                  flex: 1,
                  pr: 1,
                }}
              >
                {stat.title}
              </Typography>
              <Box
                sx={{
                  color: '#7c6af7',
                  background: 'rgba(124,106,247,0.1)',
                  borderRadius: 1.5,
                  p: 0.6,
                  display: 'flex',
                  alignItems: 'center',
                  flexShrink: 0,
                  '& svg': { fontSize: { xs: 16, sm: 18 } },
                }}
              >
                {stat.icon}
              </Box>
            </Box>

            <Typography
              variant="h4"
              sx={{ 
                color: '#fff', 
                fontWeight: 700, 
                letterSpacing: -0.5, 
                mb: 1.5,
                fontSize: { xs: 20, sm: 24, md: 28 },
              }}
            >
              {stat.value}
            </Typography>

            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.5,
                background: stat.up ? 'rgba(52,211,153,0.1)' : 'rgba(239,68,68,0.1)',
                color: stat.up ? '#34d399' : '#ef4444',
                fontSize: { xs: 10, sm: 11 },
                fontWeight: 600,
                px: 1.2,
                py: 0.4,
                borderRadius: 100,
                letterSpacing: 0.3,
              }}
            >
              {stat.up ? '▲' : '▼'} {stat.trend} this week
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}