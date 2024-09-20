interface Comment {
  comment: {
    name: string,
    email: string,
    website: string,
    comment: string,
    slug: string,
    type: string,
  }
}

const axios = require("axios")

export async function PostComment({comment}: Comment) {
  const response = await axios.post(process.env.POST_COMMENT_API, comment)
  return response
}