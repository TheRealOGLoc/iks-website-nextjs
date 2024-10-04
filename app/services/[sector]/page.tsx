import TopNavBar from '@/components/TopNavBar/TopNavBar'
import DynamicZone from '@/components/DynamicZone/DynamicZone'
import { serviceSectorPageComponentMap, globalComponentMap } from '@/utilities/components-map'
import { GetData } from '@/utilities/get-components-data'

interface Params {
  params: {
    sector: string
  }
}

export default async function ServiceSectorPage({ params }: Params) {
  
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
    next: { revalidate: 10 }
  }
  const serviceSectorData = await GetData(query, contentType, renderConfig);
  return (
    <div className=''>
      <TopNavBar />
      {serviceSectorData && (
        <DynamicZone
          content={serviceSectorData}
          pageComponentMap={serviceSectorPageComponentMap}
          globalComponentMap={globalComponentMap}
        />
      )}
    </div>
  )
}
