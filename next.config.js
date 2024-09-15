/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SEND_EMAIL_API: process.env.SEND_EMAIL_API,
    ADD_SUBSCRIBE_API: process.env.ADD_SUBSCRIBE_API,
    GOOGLE_MAP_ADDRESS_URL: process.env.GOOGLE_MAP_ADDRESS_URL,
    WEBSITE_URL: process.env.WEBSITE_URL
  }
}

module.exports = nextConfig
