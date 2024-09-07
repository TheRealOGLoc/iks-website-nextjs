import TopNavBar from '@/components/TopNavBar/TopNavBar'
import DynamicZone from '@/components/DynamicZone/DynamicZone'
import { CaseStudiesPageComponentMap, globalComponentMap } from '@/utilities/components-map'
import { GetData } from '@/utilities/get-components-data'

export default async function CaseStudiesPage() {

  const query = {
    populate: {
      components: {
        populate: "*"
      }
    }
  }
  const contentType = "all-case-study"
  const renderConfig = {
    next: { revalidate: 60 }
  }
  const casesData = await GetData(query, contentType, renderConfig);

  return (
    <div className='w-screen'>
      <TopNavBar />
      {casesData && (
        <DynamicZone
          content={casesData}
          pageComponentMap={CaseStudiesPageComponentMap}
          globalComponentMap={globalComponentMap}
        />
      )}
    </div>
  )
}
