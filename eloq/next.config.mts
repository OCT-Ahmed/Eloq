import type { NextConfig } from 'next';
import { join } from 'path';

const nextConfig: NextConfig = {
  turbopack: {
    // process.cwd() يعطيك مسار المجلد الرئيسي للمشروع مباشرة
    root: join(process.cwd()),
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

