import TopNavBar from '@/components/TopNavBar/TopNavBar'
import DynamicZone from '@/components/DynamicZone/DynamicZone'
import { testimonialsPageComponentMap, globalComponentMap } from '@/utilities/components-map'
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

const contentType = "testimonial"

export default async function Testimonials() {

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
  const testimonialData = await GetData(query, contentType, renderConfig)
  return (
    <div className=''>
      <TopNavBar />
      {testimonialData && (
        <DynamicZone
          content={testimonialData}
          pageComponentMap={testimonialsPageComponentMap}
          globalComponentMap={globalComponentMap}
        />
      )}
    </div>
  )
}
