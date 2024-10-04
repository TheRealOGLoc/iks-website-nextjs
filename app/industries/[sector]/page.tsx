import TopNavBar from '@/components/TopNavBar/TopNavBar'
import DynamicZone from '@/components/DynamicZone/DynamicZone'
import { industrySectorPageComponentMap, globalComponentMap } from '@/utilities/components-map'
import { GetData, GetSeoData } from '@/utilities/get-components-data'
import { Metadata } from 'next';
import { GenerateMetaData } from '@/utilities/generate-meta-data';

interface Params {
  params: {
    sector: string
  }
}

export async function generateMetadata({ params }: Params):Promise<Metadata | null> {
  const { sector } = params
  const contentType = `${sector}`
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

  const SEOData = await GetSeoData(SEOquery, contentType);
  if (SEOData) {
    const metaData = GenerateMetaData(SEOData)
    return metaData
  }
  return null
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
    next: { revalidate: 10 }
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
