"use client"
import { AddSubscribe } from '@/utilities/post-email';
import React, { useState } from 'react';

interface SubscribeProps {
  componentData: {
    emailPlaceHolder: string;
    buttonText: string;
  };
}

export default function Subscribe({ componentData }: SubscribeProps) {
  // State to hold the email input value
  const [email, setEmail] = useState<string>('');
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Function to validate the email format
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
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
    <form onSubmit={handleSubmit} className="flex flex-col items-start">
      <input
        type="email"
        placeholder={componentData.emailPlaceHolder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-3 rounded-full text-gray-900 w-[300px] md:max-w-[350px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input 
        type="submit" 
        value={componentData.buttonText} 
        className="mt-4 w-[150px] md:w-[150px] bg-blue-400 text-white py-3 px-4 font-semibold rounded-full hover:bg-blue-500 transition"
      />
      {error && <span className="text-red-500 mt-2">{error}</span>} {/* Display error message */}
      {success && <span className="text-green-400 mt-2">{success}</span>}
    </form>
  );
}
