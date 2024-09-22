"use client"
import { useEffect, useState } from "react"
import LatestCasesCard from "./LatestCasesCard"
import Link from "next/link"
import { GetCaseStudiesData } from "../../utilities/get-components-data"

interface CaseStudyDetailPageLatestCasesProps {
  componentData: {
    showLatestBlogs: boolean
  }
}

const contentType = "case-studies"
const query = {
  populate: {
    components: {
      populate: {
        blogImage: "*"
      }
    }
  }
}

export default function CaseStudyDetailPageLatestCases({ componentData }: CaseStudyDetailPageLatestCasesProps) {
  
  const [showCases] = useState<boolean>(componentData.showLatestBlogs)
  const [casesData, setCasesData] = useState<[] | null>(null)

  useEffect(() => {
    async function getBlogs() {
      const response = await GetCaseStudiesData(query, contentType)
      setCasesData(response as [])
    }
    if (componentData.showLatestBlogs) {
      getBlogs()
    }
  }, [])

  return (
    <div>
      {
        showCases &&
          <div className="max-w-[1100px] m-[auto]">
            <div className="flex inter-font items-center my-8">
              <div className="mx-auto md:mx-0 text-center text-5xl font-extrabold">Latest posts</div>
              <div className="border-[1px] p-1 px-2 border-gray-500 mx-5 hover:bg-black hover:text-white transition hidden md:block"><Link href={"/case-studies"}>View all</Link></div>
            </div>
            <div className="flex m-[auto] flex-wrap justify-between">
              {
                casesData?.map((blog, index) => <LatestCasesCard componentData={blog} key={index} />)
              }
            </div>
            <div className="mx-auto w-[100px] text-center border-[1px] p-3 px-2 border-gray-500 block md:hidden"><Link href={"/case-studies"}>View all</Link></div>
          </div>
      }
    </div>
  )
}
