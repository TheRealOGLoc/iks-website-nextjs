import TopNavBar from '@/components/TopNavBar/TopNavBar'
import DynamicZone from '@/components/DynamicZone/DynamicZone'
import { industryPageComponentMap, globalComponentMap } from '@/utilities/components-map'
import { GetData, GetSeoData } from '@/utilities/get-components-data'
import { Metadata } from 'next';
import { GenerateMetaData } from '@/utilities/generate-meta-data';

export async function generateMetadata():Promise<Metadata | null> {
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

const contentType = "industry"

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
  const renderConfig = {
    next: { revalidate: 10 }
  }
  const industryData = await GetData(query, contentType, renderConfig);
  return (
    <div className=''>
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
