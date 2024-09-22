"use client"
import Link from "next/link"
import { formatDate } from "../../utilities/format-data"
import RichTextRenderer from "../BlogDetailPageContent/RichTextRenderer"
import SubscribeCard from "../BlogDetailPageContent/SubscribeCard"
import { useState } from "react"
import DetailPageShareButton from "../DetailPageShareButton/DetailPageShareButton"
import DetailPageComments from "../DetailPageComments/DetailPageComments"

interface CaseStudyDetailPageContentProps {
  componentData: {
    blogImage?: any,
    content: [],
    postTime: string,
    readTime: number,
    title: string,
    showSubscribeCard: boolean
  }
}


export default function CaseStudyDetailPageContent({ componentData }: CaseStudyDetailPageContentProps) {
  const [blogDate] = useState<string>(formatDate(componentData.postTime));

  return (
    <div className="p-7 md:px-[100px] inter-font ">
      <div className="max-w-[1000px] m-[auto]">
        <div className="flex my-3 font-semibold ">
          <Link className="hidden md:block" href="/blogs">All Case Studies</Link>
          <div className="flex md:hidden items-center">
            <Link className="" href="/case-studies">Case Studies</Link>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <div className="ml-5 hidden md:block">{blogDate}</div>
        </div>
        <div className="poppins-font text-5xl font-bold leading-tight">{componentData.title}</div>
        <div className="my-3 block font-semibold md:hidden">{blogDate}</div>
        <img className="my-10" src={componentData.blogImage.data.attributes.url} alt={componentData.blogImage.data.attributes.alternativeText} title={componentData.blogImage.data.attributes.caption} />
      </div>

      <div className="max-w-[1000px] mx-auto">
        <div className="">
          <div className="max-w-[1000px]" >
            <RichTextRenderer nodes={componentData.content} />
            {
            componentData.showSubscribeCard ? <SubscribeCard /> : ""
            }
            <DetailPageShareButton/>
            <DetailPageComments/>
          </div>
        </div>
      </div>
    </div>
  )
}
