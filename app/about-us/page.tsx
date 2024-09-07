import TopNavBar from '@/components/TopNavBar/TopNavBar'
import DynamicZone from '@/components/DynamicZone/DynamicZone'
import { AboutUsPageComponentMap, globalComponentMap } from '@/utilities/components-map'
import { GetData } from '@/utilities/get-components-data'

export default async function AboutUs() {

  const contentType = "about-us"
  const query = {
    populate: {
      components: {
        populate: {
          heroBackground: "*",
          mobileViewBackground: "*",
          card: {
            populate: ["icon", "image"]
          },
          image: "*",
          images: "*",
  
        },
      }
    }
  }

  const renderConfig = {
    next: { revalidate: 60 }
  }

  const aboutUsData = await GetData(query, contentType, renderConfig)

  return (
    <div className='w-screen'>
      <TopNavBar />
      {aboutUsData && (
        <DynamicZone
          content={aboutUsData}
          pageComponentMap={AboutUsPageComponentMap}
          globalComponentMap={globalComponentMap}
        />
      )}
    </div>
  )
}