export function getAPI(): string | undefined {
  if (process.env.NODE_ENV === 'production') {
    return process.env.STRAPI_API
  } else {
    return process.env.LOCALHOST_API
  }
}