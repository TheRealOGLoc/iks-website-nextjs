import { EmailTemplate } from '@/components/EmailTemplate/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();  // Parse request body
  const { name, companyName, phoneNumber, email, message, industries } = body;  // Destructure required fields

  const fromEmail = process.env.SENDER_EMAIL_ADDRESS;
  const receiveEmail = process.env.RECEIVER_EMAIL_ADDRESS;

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail as string,
      to: [receiveEmail as string],
      subject: 'Customer Request',
      react: EmailTemplate({
        name: name as string,
        companyName: companyName as string,
        phoneNumber: phoneNumber as string,
        email: email as string,
        message: message as string,
        industries: industries as string
      }),  // Pass more details if needed in the template
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ error }), { status: 500 });
    
  }
}
