import TopNavBar from '@/components/TopNavBar/TopNavBar'
import DynamicZone from '@/components/DynamicZone/DynamicZone'
import { servicePageComponentMap, globalComponentMap } from '@/utilities/components-map'
import { GetData } from '@/utilities/get-components-data'

export default async function ServicePage() {

  const query = {
    populate: {
      components: {
        populate: {
          heroBackground: "*",
          mobileViewImage: "*",
          mobileViewBackground: "*",
          card: {
            populate: ["icon", "image", "mobileViewImage"]
          },
          image: "*",
          modules: {
            populate: "*"
          }
        },
      }
    }
  }
  const contentType = "service"
  const renderConfig = {
    next: { revalidate: 60 }
  }
  const serviceData = await GetData(query, contentType, renderConfig);
  return (
    <div className='w-screen'>
      <TopNavBar />
      {serviceData && (
        <DynamicZone
          content={serviceData}
          pageComponentMap={servicePageComponentMap}
          globalComponentMap={globalComponentMap}
        />
      )}
    </div>
  )
}
