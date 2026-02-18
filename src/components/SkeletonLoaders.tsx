'use client';

import { Box, Skeleton, Card, CardContent } from '@mui/material';

export function StatsCardsSkeleton() {
  return (
    <Box sx={{ display: 'flex', gap: { xs: 1.5, sm: 2, md: 2.5 }, flexWrap: 'wrap' }}>
      {[1, 2, 3, 4].map((i) => (
        <Card
          key={i}
          elevation={0}
          sx={{
            flex: { xs: '1 1 calc(50% - 8px)', sm: '1 1 calc(50% - 10px)', md: '1 1 180px' },
            minWidth: { xs: '140px', sm: '160px' },
            background: '#0f1117',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 3,
          }}
        >
          <CardContent sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}>
            <Skeleton variant="text" width="60%" height={20} sx={{ mb: 1.5 }} />
            <Skeleton variant="text" width="80%" height={32} sx={{ mb: 2 }} />
            <Skeleton variant="text" width="40%" height={16} />
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}


export function TableSkeleton({ rows = 5, columns = 4 }: { rows?: number; columns?: number }) {
  return (
    <Box
      sx={{
        background: '#0f1117',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 3,
        overflow: 'auto',
      }}
    >
      {[...Array(rows)].map((_, rowIndex) => (
        <Box
          key={rowIndex}
          sx={{
            display: 'flex',
            borderBottom: rowIndex < rows - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
            p: { xs: 1.5, sm: 2 },
            gap: { xs: 1, sm: 2 },
            minWidth: { xs: 500, sm: 700 },
          }}
        >
          {[...Array(columns)].map((_, colIndex) => (
            <Skeleton
              key={colIndex}
              variant="text"
              width="100%"
              height={24}
              sx={{ flex: 1 }}
            />
          ))}
        </Box>
      ))}
    </Box>
  );
}


export function ChartSkeleton() {
  return (
    <Box
      sx={{
        background: '#0f1117',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 3,
        p: { xs: 2, sm: 2.5, md: 3.5 },
      }}
    >
      <Skeleton variant="text" width="40%" height={28} sx={{ mb: 3 }} />
      <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2 }} />
    </Box>
  );
}
