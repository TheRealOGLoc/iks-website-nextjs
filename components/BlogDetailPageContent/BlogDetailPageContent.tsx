import Link from "next/link"
import { formatDate } from "../../utilities/format-data"
import RichTextRenderer from "./RichTextRenderer"
import SubscribeCard from "./SubscribeCard"
import DetailPageShareButton from "../DetailPageShareButton/DetailPageShareButton"

interface BlogDetailPageContentProps {
  componentData: {
    blogImage?: any,
    content: [],
    postTime: string,
    readTime: number,
    slug: string,
    title: string,
    showSubscribeCard: boolean
  }
}

export default function BlogDetailPageContent({ componentData }: BlogDetailPageContentProps) {
  return (
    <div className="p-7 md:px-[100px] md:pt-[100px] inter-font ">
      <div className="max-w-[1000px] m-[auto]">
        <div className="flex my-3 font-semibold ">
          <Link className="hidden md:block" href="/blogs">All Blogs</Link>
          <div className="flex md:hidden items-center">
            <Link className="" href="/blogs">Blogs</Link>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <div className="ml-5 hidden md:block">{formatDate(componentData.postTime)}</div>
        </div>
        <div className="poppins-font text-4xl md:text-5xl font-bold leading-tight">{componentData.title}</div>
        <div className="my-3 block font-semibold md:hidden">{formatDate(componentData.postTime)}</div>
        <img className="my-10" src={componentData.blogImage.data.attributes.url} alt={componentData.blogImage.data.attributes.alternativeText} title={componentData.blogImage.data.attributes.caption} />
      </div>
      
      <div className="max-w-[1250px] mx-auto">
        <div className="flex justify-between items-center flex-wrap">
          <div className="max-w-[800px]" >
            <RichTextRenderer nodes={componentData.content} />
            <DetailPageShareButton/>
          </div>
          {
            componentData.showSubscribeCard ? <SubscribeCard /> : ""
          }
        </div>
      </div>
    </div>
  )
}
