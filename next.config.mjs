import path from 'path'; // Make sure you have this import
import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname); // Add this line for alias
    return config;
  },
};

// Export the Sentry config with nextConfig
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
