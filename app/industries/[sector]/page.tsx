import TopNavBar from '@/components/TopNavBar/TopNavBar'
import DynamicZone from '@/components/DynamicZone/DynamicZone'
import { industrySectorPageComponentMap, globalComponentMap } from '@/utilities/components-map'
import { GetData } from '@/utilities/get-components-data'

interface Params {
  params: {
    sector: string
  }
}

export default async function IndustrySectorPage({ params }: Params) {
  
  const { sector } = params
  const contentType = `${sector}`
  const query = {
    populate: {
      components: {
        populate: {
          heroBackground: "*",
          mobileViewBackground: "*",
          card: {
            populate: ["image", "icon"]
          },
          image: "*",
        },
      }
    }
  }
  const renderConfig = {
    next: { revalidate: 60 }
  }
  const industrySectorData = await GetData(query, contentType, renderConfig);
  return (
    <div className=''>
      <TopNavBar />
      {industrySectorData && (
        <DynamicZone
          content={industrySectorData}
          pageComponentMap={industrySectorPageComponentMap}
          globalComponentMap={globalComponentMap}
        />
      )}
    </div>
  )
}
