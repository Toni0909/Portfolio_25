import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { withSentryConfig } from '@sentry/nextjs';
import nextConfig from 'next/config';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname); // Add this line
    return config;
  },
};

export default withSentryConfig(nextConfig, {
  silent: true,
  org: "the-cube-enterprise",
  project: "javascript-nextjs",
}, {
  widenClientFileUpload: true,
  transpileClientSDK: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
