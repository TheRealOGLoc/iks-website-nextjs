/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SEND_EMAIL_API: process.env.SEND_EMAIL_API,
    ADD_SUBSCRIBE_API: process.env.ADD_SUBSCRIBE_API,
    POST_COMMENT_API: process.env.POST_COMMENT_API,
    GOOGLE_MAP_ADDRESS_URL: process.env.GOOGLE_MAP_ADDRESS_URL,
    WEBSITE_URL: process.env.WEBSITE_URL,
    STRAPI_API:process.env.STRAPI_API,
    LOCALHOST_API:process.env.LOCALHOST_API,
    STRAPI_TOKEN:process.env.STRAPI_TOKEN
  }
}

module.exports = nextConfig
