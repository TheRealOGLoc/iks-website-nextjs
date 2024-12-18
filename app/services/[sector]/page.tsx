import TopNavBar from '@/components/TopNavBar/TopNavBar'
import DynamicZone from '@/components/DynamicZone/DynamicZone'
import { serviceSectorPageComponentMap, globalComponentMap } from '@/utilities/components-map'
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
