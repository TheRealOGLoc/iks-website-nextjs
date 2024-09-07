import TopNavBar from '@/components/TopNavBar/TopNavBar'
import DynamicZone from '@/components/DynamicZone/DynamicZone'
import { caseStudyDetailPageComponentMap, globalComponentMap } from '@/utilities/components-map'
import { GetData } from '@/utilities/get-components-data'

interface Params {
  params: {
    id: string
  }
}

export default async function CaseStudyDetailPage({ params }: Params) {
  const { id } = params
  const contentType = `case-studies/${id}`
  const query = {
    populate: {
      components: {
        populate: "*"
      }
    }
  }
  const renderConfig = {
    next: { revalidate: 60 }
  }
  const caseStudyDetailData = await GetData(query, contentType, renderConfig);
  return (
    <div className='w-screen'>
      <TopNavBar />
      {caseStudyDetailData && (
        <DynamicZone
          content={caseStudyDetailData}
          pageComponentMap={caseStudyDetailPageComponentMap}
          globalComponentMap={globalComponentMap}
        />
      )}
    </div>
  )
}
