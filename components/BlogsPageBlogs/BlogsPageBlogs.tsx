"use client"
import BlogCard from "./BlogCard"
import { useEffect, useState } from "react"
import { GetAllBlogsData } from "../../utilities/get-components-data"

interface BlogsPageBlogsProps {
  componentData: {
    showAllBlogs: boolean
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

export default function BlogsPageBlogs({componentData}: BlogsPageBlogsProps) {
  
  const [showBlogs] = useState<boolean>(componentData.showAllBlogs)
  const [blogsData, setBlogsData] = useState<[] | null>(null)

  useEffect(() => {
    async function getBlogs() {
      const response = await GetAllBlogsData(query, contentType)
      setBlogsData(response as [])
    }
    if (componentData.showAllBlogs) {
      getBlogs()
    }
  }, [])

  return (
    <div className="my-10">
      {
        showBlogs &&
          <div className="max-w-[1300px] m-[auto] ">
            <div className="flex flex-col md:flex-row m-[auto] flex-wrap max-w-[1400px] justify-between">
              {
                blogsData?.map((blog, index) => <BlogCard componentData={blog} key={index} />)
              }
            </div>
          </div>
      }
    </div>
  )
}
