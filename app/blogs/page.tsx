import TopNavBar from '@/components/TopNavBar/TopNavBar'
import DynamicZone from '@/components/DynamicZone/DynamicZone'
import { BlogsPageComponentMap, globalComponentMap } from '@/utilities/components-map'
import { GetData } from '@/utilities/get-components-data'

export default async function BlogsPage() {
  const query = {
    populate: {
      components: {
        populate: "*"
      }
    }
  }
  const contentType = "all-blog"
  const renderConfig = {
    next: { revalidate: 60 }
  }
  const blogsData = await GetData(query, contentType, renderConfig);

  return (
    <div className='w-screen'>
      <TopNavBar />
      {blogsData && (
        <DynamicZone
          content={blogsData}
          pageComponentMap={BlogsPageComponentMap}
          globalComponentMap={globalComponentMap}
        />
      )}
    </div>
  )
}
