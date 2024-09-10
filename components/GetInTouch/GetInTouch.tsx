"use client"
import React, { useState } from 'react'
import Link from 'next/link';

interface GetInTouch {
  componentData: {
    buttonText: string;
    [key : string]: any;
  }
}

export default function GetInTouch({ componentData }: GetInTouch) {

  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null) 
  const googleUrl = "https://goo.gl/maps/XfcxXc8ttaiMrEcm7"
  const [info, setInfo] = useState({
    name: "",
    companyName: "",
    phoneNumber: "",
    email: "",
    message: "",
  })

  const _handleOpenClick = () => {
    setOpenMenu(true)
  }

  const _handleCloseClick = () => {
    setError(null)
    setOpenMenu(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    });
  }

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!info.name.trim() && !info.companyName.trim()) {
      setError("Please provide either your Name or Company Name.");
      return;
    }

    if (!info.phoneNumber.trim() && !info.email.trim()) {
      setError("Please provide either your Phone Number or Email.");
      return;
    }

    if (info.email.trim() && !isValidEmail(info.email.trim())) {
      setError("Please provide a valid Email address.");
      return;
    }

    setError(null);
    console.log(info);
  }

  return (
    <div className='inter-font'>
      <button
        onClick={() => _handleOpenClick()}
        className="poppins-font bg-blue-600 bg-opacity-80 md:bg-opacity-60 no-underline hover:underline-offset-4 hover:underline hover:bg-opacity-100 transition duration-200 text-white px-6 py-3 text-lg w-[190px]"
      >{componentData.buttonText} →</button>

      {
        openMenu &&
        <div className="fixed inset-0 z-50 bg-gray-300 bg-opacity-75 md:flex justify-center items-center shadow-lg">
          {/* Full-screen overlay */}
          <div className="relative bg-white shadow-lg max-w-[1000px] w-full">
            <button onClick={() => _handleCloseClick()} className="absolute top-4 right-4 text-gray-200 hover:text-gray-900 w-7 h-7 bg-gray-600">
              &#x2715; {/* Close button */}
            </button>
            <div className='md:flex md:items-center'>
              <div className='hidden md:block max-w-[400px] md:h-[700px]'>
                <img
                  src={componentData.heroBackground.data.attributes.url}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className=' md:h-[700px] p-[30px] md:p-[80px]'>
                <div>
                  <div className="text-4xl font-extralight mt-[0px] mb-[30px] text-left text-black poppins-font">Get In Touch</div>
                  <form className="space-y-4 text-black" onSubmit={handleSubmit}>
                    {/* error message */}
                    {error && <div className="text-red-600">{error}</div>}
                    <input 
                      type="text" 
                      name='name' 
                      placeholder='Name *' 
                      value={info.name} 
                      onChange={handleChange} 
                      className="w-full p-2 border-b-[1px] border-gray-800 poppins-font" 
                    />
                    <input 
                      type="text" 
                      name='companyName' 
                      placeholder='Company Name' 
                      value={info.companyName} 
                      onChange={handleChange} 
                      className="w-full p-2 border-b-[1px] border-gray-800 poppins-font" 
                    />
                    <input 
                      type="text" 
                      name='phoneNumber' 
                      placeholder='Phone Number' 
                      value={info.phoneNumber} 
                      onChange={handleChange} 
                      className="w-full p-2 border-b-[1px] border-gray-800 poppins-font" 
                    />
                    <input 
                      type="email" 
                      name='email' 
                      placeholder='Email *' 
                      value={info.email} 
                      onChange={handleChange} 
                      className="w-full p-2 border-b-[1px] border-gray-800 poppins-font" 
                    />
                    <textarea 
                      name="message" 
                      placeholder='Please share your requirements or Message us' 
                      value={info.message} 
                      onChange={handleChange} 
                      className="w-full p-2 border-[1px] resize-none border-gray-800 poppins-font">
                    </textarea>
                    <input 
                      type="submit" 
                      value={"Submit"} 
                      className="bg-blue-600 text-white py-2 px-4 cursor-pointer w-[200px]" 
                    />
                  </form>
                </div>

                <div className='h-[1px] bg-gray-600 mt-5'></div>

                <div className="mt-8 flex flex-col md:flex-row text-black">
                  <div className="text-center">
                    <div className="text-lg font-bold">Find Us</div>
                    <Link className='hover:text-gray-600 transition' href={googleUrl}>
                      <p>SYDNEY, AUSTRALIA</p>
                      <p>Level 14, 32 Smith Road, Paramatta NSW 2150</p>
                    </Link>
                  </div>
                  <div>
                    <div className="text-center mt-4 md:mt-0">
                      <div className="text-lg font-bold">Call Us</div>
                      <p>02 9139 8874</p>
                    </div>
                    <div className="text-center mt-4">
                      <div className="text-lg font-bold">Email Us</div>
                      <p>info@infinikeysolutions.com.au</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
