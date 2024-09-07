import TopNavBar from '@/components/TopNavBar/TopNavBar'
import DynamicZone from '@/components/DynamicZone/DynamicZone'
import { OurTeamPageComponentMap, globalComponentMap } from '@/utilities/components-map'
import { GetData } from '@/utilities/get-components-data'

export default async function OurTeamPage() {
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
  const contentType = "our-team"
  const renderConfig = {
    next: { revalidate: 60 }
  }
  const ourTeamData = await GetData(query, contentType, renderConfig)

  return (
    <div className='w-screen'>
      <TopNavBar />
      {ourTeamData && (
        <DynamicZone
          content={ourTeamData}
          pageComponentMap={OurTeamPageComponentMap}
          globalComponentMap={globalComponentMap}
        />
      )}
    </div>
  )
}
