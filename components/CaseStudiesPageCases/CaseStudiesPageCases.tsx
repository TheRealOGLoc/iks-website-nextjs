"use client"
import { useSearchParams } from "next/navigation"
import { GetAllCaseStudiesData } from "../../utilities/get-components-data"
import CaseCard from "./CaseCard"
import { useEffect, useState } from "react"

interface CaseStudiesPageCases {
  componentData: {
    showAllCaseStudies: boolean
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


export default function CaseStudiesPageCases({componentData}: CaseStudiesPageCases) {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query") ?? ""; 
  const [showCases] = useState<boolean>(componentData.showAllCaseStudies)
  const [casesData, setCaseStudiesData] = useState<[] | null>(null)

  useEffect(() => {
    async function getCaseStudies() {
      const response = await GetAllCaseStudiesData(query, contentType, searchQuery)
      console.log(response)
      setCaseStudiesData(response as [])
    }
    if (componentData.showAllCaseStudies) {
      getCaseStudies()
    }
  }, [searchQuery])

  return (
    <div className="my-10">
      {
        showCases &&
          <div className="max-w-[1400px] m-[auto] ">
            <div className="flex flex-col md:flex-row m-[auto] flex-wrap max-w-[1400px] justify-between">
              {
                casesData?.map((blog, index) => <CaseCard componentData={blog} key={index} />)
              }
            </div>
          </div>
      }
    </div>
  )
}
