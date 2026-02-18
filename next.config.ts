import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Performance optimizations */
  
  /* Enable SWR for image optimization */
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
  },
  
  /* Compress and optimize */
  compress: true,
  
  /* Enable React strict mode for development */
  reactStrictMode: true,
  
  /* Enable PoweredByHeader to false for security */
  poweredByHeader: false,
  
  /* Security headers */
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
