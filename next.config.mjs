import { withSentryConfig } from '@sentry/nextjs';
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Add a custom alias for the "@" symbol
    config.resolve.alias['@'] = path.resolve(__dirname);
    
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
