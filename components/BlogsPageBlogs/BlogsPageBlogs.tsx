"use client"
import BlogCard from "./BlogCard"
import { useEffect, useState } from "react"
import { GetAllBlogsData } from "../../utilities/get-components-data"
import { useSearchParams } from "next/navigation"

interface BlogsPageBlogsProps {
  componentData: {
    showAllBlogs: boolean
  };
}

const contentType = "blogs"

export default function BlogsPageBlogs({ componentData }: BlogsPageBlogsProps) {

  const query = {
    populate: {
      components: {
        populate: {
          blogImage: "*"
        }
      }
    },
  }

  const [total, setTotal] = useState<number | null>(null)
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query") ?? "";
  const [showBlogs] = useState<boolean>(componentData.showAllBlogs)
  const [blogsData, setBlogsData] = useState<[] | null>(null)
  const renderConfig = {
    next: { revalidate: 10 }
  }
  const [page, setPage] = useState<number>(1)

  const _handleShowMore = async () => {
    setPage(prev => prev + 1)
    const currentPage = {
      pagination: {
        page: page + 1,
        pageSize: 9
      }
    }
    const {blogs} = await GetAllBlogsData({ ...query, ...currentPage }, contentType, searchQuery, renderConfig);
    const newData = blogsData?.concat(blogs as [])
    setBlogsData(newData as [])
  };


  useEffect(() => {
    async function getBlogs() {
      const currentPage = {
        pagination: {
          page: 1,
          pageSize: 9
        }
      }
      const {blogs, paginationData} = await GetAllBlogsData({ ...query, ...currentPage }, contentType, searchQuery, renderConfig)
      if (total === null) {
        setTotal(paginationData.total)
      }
      setBlogsData(blogs as [])
    }
    if (componentData.showAllBlogs) {
      getBlogs()
    }
  }, [searchQuery])

  return (
    <div className="my-10">
      {showBlogs && (
        <div className="max-w-[1200px] m-[auto] ">
          <div className="flex flex-col md:flex-row m-[auto] flex-wrap max-w-[1400px] justify-between">
            {blogsData?.map((blog, index) => (
              <BlogCard componentData={blog} key={index} />
            ))}
          </div>
          {
            searchQuery !== "" && blogsData?.length === 0 &&
            <div className="text-3xl my-16 text-center w-[400px] m-auto font-semibold">
              no blogs found, please try other word
            </div>
          }
          {
            searchQuery === "" && blogsData && blogsData?.length !== total &&
            <button className="mt-6 cursor-pointer block bg-blue m-auto text-white poppins-font text-xl p-4 font-semibold rounded-xl hover:bg-[#70B9DF] transition" onClick={_handleShowMore} >Show more</button>
          }
        </div>
      )}
    </div>
  )
}
