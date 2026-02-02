const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        RESEND_API_KEY: process.env.RESEND_API_KEY,
    },
};

module.exports = withNextIntl(nextConfig);