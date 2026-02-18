'use client';

import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          gap: 3,
        }}
      >
        <Box
          sx={{
            fontSize: 120,
            fontWeight: 700,
            background: 'linear-gradient(135deg, #7c6af7 0%, #c855f7 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          404
        </Box>
        <Typography variant="h3" sx={{ color: '#fff', fontWeight: 700 }}>
          Сторінку не знайдено
        </Typography>
        <Typography
          sx={{
            color: '#4a4d6a',
            fontSize: 16,
            maxWidth: 400,
          }}
        >
          На жаль, сторінка, яку ви шукаєте, не існує. Перевірте URL або скористайтесь навігацією для повернення.
        </Typography>
        <Box
          component={Link}
          href="/"
          sx={{
            textDecoration: 'none',
          }}
        >
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(135deg, #7c6af7 0%, #c855f7 100%)',
              color: '#fff',
              px: 4,
              py: 1.5,
              fontSize: 16,
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                opacity: 0.9,
              },
            }}
          >
            Повернутися на головну
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
