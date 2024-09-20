"use client"
import { PostComment } from "@/utilities/post-comment"
import { useState } from "react"
import { usePathname } from 'next/navigation'

interface BlogDetailPageLeaveReplyProps {
  componentData: {
    __component: string,
    title: string,
    subtitle: string,
    buttonText: string,
    commentLabel: string,
    emailLabel: string,
    nameLabel: string,
    websiteLabel: string,
    [key: string]: any
  }
}

interface Comment {
  name: string,
  email: string,
  website: string,
  comment: string,
  slug: string,
  type: string
}

export default function BlogDetailPageLeaveReply({ componentData }: BlogDetailPageLeaveReplyProps) {

  const typeAndSlug = usePathname().split("/")
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<Comment>({
    name: "",
    email: "",
    website: "",
    comment: "",
    type: typeAndSlug[1],
    slug: typeAndSlug[2]
  });

  const _handleInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setInputValue(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const _handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitted) {
      return
    }
    if (inputValue.comment == "") {
      setError("Message can not be empty.")
      return
    }
    try {
      const response = await PostComment({comment:inputValue})
      if (response.status === 200 || response.statusText === "OK") {
        setSubmitted(true)
      } else {
        setError("Failed to post comment, please try later")
        setSubmitted(true)
      }
    } catch (error) {
      setError("Failed to post comment, please try later")
      setSubmitted(true)
    }
    setError(null)
  }

  return (
    <div className="p-7 md:max-w-[1200px] md:mx-auto my-10 md:my-0 md:px-[100px]">
      <div className="text-center">
        <div className="text-5xl font-extrabold my-5">{componentData.title}</div>
        <div className="inter-font text-zinc-800 max-w-[800px] mx-auto text-md cyan-blue">{componentData.subtitle}</div>
      </div>
      <form onSubmit={_handleSubmit} className="flex flex-col items-start inter-font mt-10">
        <div className="flex space-x-4 w-full">
          <div className="w-full block">
            <label className="font-semibold">{componentData.nameLabel}</label> <br />
            <input
              className="h-10 w-full  drop-shadow-md p-2"
              type="text"
              name="name"
              placeholder="Name"
              value={inputValue.name}
              onChange={_handleInput}
            />
          </div>
          <div className="w-full block">
            <label className="font-semibold">{componentData.emailLabel}</label> <br />
            <input
              className="h-10 w-full drop-shadow-md p-2"
              type="text"
              name="email"
              placeholder="Email"
              value={inputValue.email}
              onChange={_handleInput}
            />
          </div>
        </div>
        <div className="w-full mt-2">
          <label className="font-semibold w-full block">{componentData.websiteLabel}</label> <br />
          <input
            className="h-10 w-full drop-shadow-md p-2"
            type="text"
            name="website"
            placeholder="www.example.com"
            value={inputValue.website}
            onChange={_handleInput}
          />
        </div>
        <div className="w-full mt-2">
          <label className="font-semibold w-full block">{componentData.commentLabel}</label> <br />
          <textarea
            className="h-20 w-full drop-shadow-md p-2"
            name="comment"
            value={inputValue.comment}
            onChange={_handleInput}
            placeholder="Type your message here..."
          />
        </div>
        <input type="submit" value={`${componentData.buttonText} →`} className="mt-4 rounded-md bg-blue text-white p-2 px-5" />
      </form>
      { error && <div className="text-red-400">{error}</div> }
    </div>
  );
}