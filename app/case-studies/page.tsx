import TopNavBar from '@/components/TopNavBar/TopNavBar'
import DynamicZone from '@/components/DynamicZone/DynamicZone'
import { CaseStudiesPageComponentMap, globalComponentMap } from '@/utilities/components-map'
import { GetData, GetSeoData } from '@/utilities/get-components-data'
import { Metadata } from 'next';
import { GenerateMetaData } from '@/utilities/generate-meta-data';
import { Suspense } from 'react'

export async function generateMetadata(): Promise<Metadata | null> {
  const SEOquery = {
    populate: {
      components: {
        populate: {
          chartset: "*",
          title: "*",
          metaTag: "*",
          canonical: "*",
          openGraph: {
            populate: "*"
          }
        },
      },
    },
  };
  const renderConfig = {
    next: { revalidate: 10 }
  }
  const SEOData = await GetSeoData(SEOquery, contentType, renderConfig);
  if (SEOData) {
    const metaData = GenerateMetaData(SEOData)
    return metaData
  }
  return null
}

const contentType = "all-case-study"

export default async function CaseStudiesPage() {

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
  const casesData = await GetData(query, contentType, renderConfig);

  return (
    <Suspense>
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
    </Suspense>
  )
}
