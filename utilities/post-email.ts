interface Message {
  info: {
    name: string,
    companyName: string,
    phoneNumber: string,
    industries: string,
    email: string,
    message: string,
  }
}

interface Subscribe {
  email: string
}

const axios = require("axios")

export async function SendMessage({info}: Message) {
  const response = await axios.post(process.env.SEND_EMAIL_API, info);
  return response
}

export async function AddSubscribe(email: Subscribe) {
  const response = await axios.post(process.env.ADD_SUBSCRIBE_API, email);
  return response
}