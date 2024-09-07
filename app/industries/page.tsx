import TopNavBar from '@/components/TopNavBar/TopNavBar'
import DynamicZone from '@/components/DynamicZone/DynamicZone'
import { industryPageComponentMap, globalComponentMap } from '@/utilities/components-map'
import { GetData } from '@/utilities/get-components-data'

export default async function IndustryPage() {
  const query = {
    populate: {
      components: {
        populate: {
          heroBackground: "*",
          mobileViewBackground: "*",
          card: {
            populate: ["image"]
          },
          image: "*",
        },
      }
    }
  }
  const contentType = "industry"
  const renderConfig = {
    next: { revalidate: 60 }
  }
  const industryData = await GetData(query, contentType, renderConfig);
  return (
    <div className='w-screen'>
      <TopNavBar />
      {industryData && (
        <DynamicZone
          content={industryData}
          pageComponentMap={industryPageComponentMap}
          globalComponentMap={globalComponentMap}
        />
      )}
    </div>
  )
}
