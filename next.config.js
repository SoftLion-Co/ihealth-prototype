const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.freepik.com", "content1.rozetka.com.ua", "cdn.shopify.com"],
  },
};

module.exports = withNextIntl(nextConfig);
