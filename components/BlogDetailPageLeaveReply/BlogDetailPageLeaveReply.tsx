"use client"
import { useState } from "react"

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

interface ReplyValue {
  name: string,
  email: string,
  website: string,
  comment: string
}

export default function BlogDetailPageLeaveReply({ componentData }: BlogDetailPageLeaveReplyProps) {

  const [inputValue, setInputValue] = useState<ReplyValue>({
    name: "",
    email: "",
    website: "",
    comment: ""
  });

  const _handleInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setInputValue(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="p-7 my-10 md:my-0 md:p-[100px]">
      <div className="text-center">
        <div className="text-3xl font-semibold cyan-blue my-5">{componentData.title}</div>
        <div className="inter-font text-zinc-800 max-w-[800px] mx-auto text-sm cyan-blue">{componentData.subtitle}</div>
      </div>
      <form action="" className="flex flex-col items-start inter-font mt-10">
        <div className="flex space-x-4 w-full">
          <div className="w-full block">
            <label className="font-semibold" htmlFor="">{componentData.nameLabel}</label> <br />
            <input
              className="h-10 w-full md:rounded-lg drop-shadow-md p-2"
              type="text"
              name="name"
              value={inputValue.name}
              onChange={_handleInput}
            />
          </div>
          <div className="w-full block">
            <label className="font-semibold" htmlFor="">{componentData.emailLabel}</label> <br />
            <input
              className="h-10 w-full md:rounded-md drop-shadow-md p-2"
              type="text"
              name="email"
              value={inputValue.email}
              onChange={_handleInput}
            />
          </div>
        </div>
        <div className="w-full mt-2">
          <label htmlFor="" className="font-semibold w-full block">{componentData.websiteLabel}</label> <br />
          <input
            className="h-10 w-full md:rounded-lg drop-shadow-md p-2"
            type="text"
            name="website"
            value={inputValue.website}
            onChange={_handleInput}
          />
        </div>
        <div className="w-full mt-2">
          <label htmlFor="" className="font-semibold w-full block">{componentData.commentLabel}</label> <br />
          <textarea
            className="h-20 w-full md:rounded-lg drop-shadow-md p-2"
            name="comment"
            value={inputValue.comment}
            onChange={_handleInput}
            placeholder="Type your message here..."
          />
        </div>
        <input type="submit" value={`${componentData.buttonText} →`} className="mt-4 rounded-md bg-blue-400 text-white p-2 px-5" />
      </form>
    </div>
  );
}