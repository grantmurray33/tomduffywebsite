import type { NextConfig } from 'next';
import path from 'path';
import { fileURLToPath } from 'url';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Pin the app root — a lockfile in the parent folder otherwise confuses Next.js
  outputFileTracingRoot: projectRoot,
  async redirects() {
    return [
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/about-us/', destination: '/about', permanent: true },
      { source: '/our-services', destination: '/services', permanent: true },
      { source: '/our-services/', destination: '/services', permanent: true },
      {
        source: '/our-services/:slug',
        destination: '/services/:slug',
        permanent: true,
      },
      { source: '/contact/', destination: '/contact', permanent: true },
      { source: '/articles/', destination: '/articles', permanent: true },
    ];
  },
};

export default nextConfig;
