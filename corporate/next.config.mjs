/** @type {import('next').NextConfig} */
const nextConfig = {
  // public/docs/<slug>/index.html を /docs/<slug> で配信する（共有用HTML資料）
  async rewrites() {
    return [{ source: '/docs/:slug', destination: '/docs/:slug/index.html' }];
  },
  async headers() {
    return [{ source: '/docs/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] }];
  },
};

export default nextConfig;
