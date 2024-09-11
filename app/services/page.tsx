import TopNavBar from '@/components/TopNavBar/TopNavBar'
import DynamicZone from '@/components/DynamicZone/DynamicZone'
import { servicePageComponentMap, globalComponentMap } from '@/utilities/components-map'
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

  const SEOData = await GetSeoData(SEOquery, contentType);
  if (SEOData) {
    const metaData = GenerateMetaData(SEOData)
    return metaData
  }
  return null
}

const contentType = "service"

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
