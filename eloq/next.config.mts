import type { NextConfig } from 'next';
import { join } from 'path';

const nextConfig: NextConfig = {
  turbopack: {
    // process.cwd() يعطيك مسار المجلد الرئيسي للمشروع مباشرة
    root: join(process.cwd()),
  },
};

export default nextConfig;
