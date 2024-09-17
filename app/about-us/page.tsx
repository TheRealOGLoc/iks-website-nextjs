import TopNavBar from '@/components/TopNavBar/TopNavBar'
import DynamicZone from '@/components/DynamicZone/DynamicZone'
import { AboutUsPageComponentMap, globalComponentMap } from '@/utilities/components-map'
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

const contentType = "about-us"

export default async function AboutUs() {
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
    next: { revalidate: 10 }
  }

  const aboutUsData = await GetData(query, contentType, renderConfig)

  return (
    <div className=''>
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