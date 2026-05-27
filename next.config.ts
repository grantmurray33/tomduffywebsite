import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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
