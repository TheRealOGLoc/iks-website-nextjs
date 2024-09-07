"use client"
import { useState } from "react"
import Link from "next/link";


export default function SubscribeCard() {

  const [emailInput, SetEmailInput] = useState<string>("")

  const _handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    SetEmailInput(event.target.value)
  };

  return (
    <div className="my-20 md:my-0 text-center md:text-left inter-font max-w-[400px]">
      <div className="text-4xl font-extrabold md:text-xl md:font-bold">Subscribe to our newsletter</div>
      <div className="my-2 font-medium text-sm md:my-0 md:font-normal md:text-base">Subscribe to receive the latest posts to your inbox every week.</div>
      <form action="">
        <input onChange={_handleInput} className="w-full my-1 p-2 border-solid border-2 border-slate-500" type="text" placeholder="Enter your email" /> <br />
        <input className="w-full my-1 h-10 border-solid md:border-2 md:border-slate-500 font-light text-white bg-black md:bg-gray-400" type="submit" value="Subscribe" />
      </form>
      <div className="text-sm mt-1">By subscribing you agree with our <Link href=""><span className="underline decoration-black" >Privacy Policy</span></Link></div>
    </div>
  )
}
