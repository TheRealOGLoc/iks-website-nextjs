import TopNavBar from '@/components/TopNavBar/TopNavBar'
import DynamicZone from '@/components/DynamicZone/DynamicZone'
import { blogDetailPageComponentMap, globalComponentMap } from '@/utilities/components-map'
import { GetData } from '@/utilities/get-components-data'

interface Params {
  params: {
    id: string
  }
}

export default async function BlogDetailPage({ params }: Params) {
  const { id } = params
  const contentType = `blogs/${id}`
  const query = {
    populate: {
      components: {
        populate: "*"
      }
    }
  }

  const renderConfig = {
    next: { revalidate: 10 }
  }
  const blogDetailData = await GetData(query, contentType, renderConfig);
  // const util = require("util")
  // console.log(util.inspect(blogDetailData[0], { depth: null }))
  return (
    <div className=''>
      <TopNavBar />
      {blogDetailData && (
        <DynamicZone
          content={blogDetailData}
          pageComponentMap={blogDetailPageComponentMap}
          globalComponentMap={globalComponentMap}
        />
      )}
    </div>
  )
}
