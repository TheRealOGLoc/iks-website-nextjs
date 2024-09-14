"use client"
import LatestPostCard from "./LatestPostCard"
import { useEffect, useState } from "react"
import { GetBlogsData } from "../../utilities/get-components-data"
import Link from "next/link"

interface BlogDetailPageLatestPostsProps {
  componentData: {
    showLatestBlogs: boolean
  }
}

const contentType = "blogs"
const query = {
  populate: {
    components: {
      populate: {
        blogImage: "*"
      }
    }
  }
}

export default function BlogDetailPageLatestPosts({ componentData }: BlogDetailPageLatestPostsProps) {

  const [showBlogs] = useState<boolean>(componentData.showLatestBlogs)
  const [blogsData, setBlogsData] = useState<[] | null>(null)

  useEffect(() => {
    async function getBlogs() {
      const response = await GetBlogsData(query, contentType)
      setBlogsData(response as [])
    }
    if (componentData.showLatestBlogs) {
      getBlogs()
    }
  }, [])

  return (
    <div>
      {
        showBlogs &&
          <div className="max-w-[1400px] m-[auto]">
            <div className="flex inter-font items-center my-8">
              <div className="mx-auto md:mx-0 text-center text-5xl font-extrabold">Latest posts</div>
              <div className="border-[1px] hover:bg-black hover:text-white transition p-1 px-2 border-gray-500 mx-5 cursor-pointer hidden md:block"><Link href={"/blogs"}>View all</Link></div>
            </div>
            <div className="flex m-[auto] md:justify-between flex-wrap max-w-[1400px]">
              {
                blogsData?.map((blog, index) => <LatestPostCard componentData={blog} key={index} />)
              }
            </div>
            <div className="mx-auto w-[100px] text-center border-[1px] p-3 px-2 border-gray-500 block md:hidden"><Link href={"/blogs"}>View all</Link></div>
          </div>
      }
    </div>
  )
}
