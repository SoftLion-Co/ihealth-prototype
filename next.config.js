const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "content.rozetka.com.ua",
      },
      {
        protocol: "https",
        hostname: "content1.rozetka.com.ua",
      },
      {
        protocol: "https",
        hostname: "content2.rozetka.com.ua",
      },
    ],
    domains: ["img.freepik.com"],
  },
};

module.exports = withNextIntl(nextConfig);
