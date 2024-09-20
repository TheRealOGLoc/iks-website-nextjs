import { getAPI } from '@/utilities/get-api';
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, website, comment, type, slug } = body;

  try {
    const token = process.env.STRAPI_TOKEN;
    const api = getAPI();

    const response = await axios.post(
      `${api}comments`,
      {
        data: {
          name,
          email,
          website,
          comment,
          type,
          slug,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, 
        },
      }
    );

    return NextResponse.json({ message: 'Comment posted successfully', data: response.data }, { status: 200 });
  } catch (error: any) {
    console.error('Error posting comment:', error);

    const errorMessage = error.response?.data?.message || error.message || 'An error occurred';
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
