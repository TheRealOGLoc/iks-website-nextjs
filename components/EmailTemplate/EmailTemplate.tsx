import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  companyName: string
  phoneNumber: string
  email:string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, companyName, phoneNumber, email, message
}) => (
  <div>
    <div>Hi!</div>
    <br />
    <div>You received a customer message.</div>
    <div>Name: {name}</div>
    <div>Company Name: {companyName}</div>
    <div>Phone Number: {phoneNumber}</div>
    <div>Email: {email}</div>
    <div>Message from customer:</div>
    <div>{message}</div>
    <br />
    <div>Please reply to customer as soon as possible.</div>
    <div>Be aware that you can't reply this email to the customer.</div>
    <div>Please login to the company email to reply to the customer.</div>
    <br />
    <div>Cheers!</div>
  </div>
);
