"use client"
import React, { useState } from 'react';
import { AddSubscribe } from '@/utilities/post-email';
import Link from "next/link";

export default function SubscribeCard() {

  // State to hold the email input value
  const [email, setEmail] = useState<string>('');
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Function to validate the email format
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload on submit
    if (success) {
      return
    }
    if (!isValidEmail(email)) {
      return;
    }

    setError(null);

    try {
      const response = await AddSubscribe({email});

      if (response.status === 200 || response.statusText === "OK") {
        setSuccess("You have subscribed!");
        setError(null);
      } else {
        setSuccess(null);
        setError("Failed to subscribe.");
      }
    } catch (error) {
      setSuccess(null);
      setError("Failed to subscribe.");
    }

  };

  return (
    <div className="my-10 md:my-0 text-center md:text-left inter-font max-w-[400px]">
      <div className="text-4xl font-extrabold md:text-xl md:font-bold">Subscribe to our newsletter</div>
      <div className="my-2 font-medium text-sm md:my-0 md:font-normal md:text-base">Subscribe to receive the latest posts to your inbox every week.</div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setEmail(e.target.value)} className="w-full my-1 p-2 border-solid border-2 border-slate-500" type="text" placeholder="Enter your email" /> <br />
        <input className="hover:underline cursor-pointer w-full my-1 h-10 border-solid font-light text-white bg-black " type="submit" value="Subscribe" />
      </form>
      {error && <span className="text-red-500 mt-2">{error}</span>} {/* Display error message */}
      {success && <span className="text-green-400 mt-2">{success}</span>}
      <div className="text-sm mt-1">By subscribing you agree with our <Link href="/privacy-policy"><span className="underline decoration-black" >Privacy Policy</span></Link></div>
    </div>
  )
}
