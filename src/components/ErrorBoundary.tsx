'use client';

import React, { ReactNode } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}


export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
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
            <ErrorOutline
              sx={{
                fontSize: 80,
                color: '#c855f7',
                opacity: 0.8,
              }}
            />
            <Typography variant="h3" sx={{ color: '#fff', fontWeight: 700 }}>
              Щось пішло не так
            </Typography>
            <Typography
              sx={{
                color: '#4a4d6a',
                fontSize: 16,
                maxWidth: 400,
              }}
            >
              На жаль, сталася помилка при завантаженні сторінки. Будь ласка, спробуйте оновити сторінку або повернутися на головну.
            </Typography>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <Box
                sx={{
                  background: '#0f1117',
                  border: '1px solid rgba(255,0,0,0.2)',
                  borderRadius: 2,
                  p: 2,
                  width: '100%',
                  maxHeight: 200,
                  overflow: 'auto',
                  textAlign: 'left',
                }}
              >
                <Typography
                  sx={{
                    color: '#ff6b6b',
                    fontSize: 12,
                    fontFamily: 'monospace',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  }}
                >
                  {this.state.error.message}
                </Typography>
              </Box>
            )}
            <Button
              variant="contained"
              onClick={this.resetError}
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
              Спробувати знову
            </Button>
          </Box>
        </Container>
      );
    }

    return this.props.children;
  }
}
