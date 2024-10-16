import { withSentryConfig } from '@sentry/nextjs';
import { fileURLToPath } from 'url';
import path from 'path';

// Um den Pfad korrekt zu erhalten:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Beispiel: Hier kannst du weiterhin __dirname verwenden
    config.resolve.alias['@data'] = path.join(__dirname, 'data');
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
