import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();  // Parse request body
  const audienceId = process.env.RESEND_AUDIENCE_ID as string
  const { email } = body;  // Destructure required fields

  try {
    const { data, error } = await resend.contacts.create({
      email: email as string,
      audienceId: audienceId
    })

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ error }), { status: 500 });
    
  }
}
