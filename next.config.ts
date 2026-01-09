import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api-fotober.fotober.com',
        port: '',
        pathname: '/assets/**', // Cho phép tất cả ảnh trong thư mục assets
      },
    ],
  },
};

export default nextConfig;
