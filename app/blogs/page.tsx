import TopNavBar from '@/components/TopNavBar/TopNavBar'
import DynamicZone from '@/components/DynamicZone/DynamicZone'
import { BlogsPageComponentMap, globalComponentMap } from '@/utilities/components-map'
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

const contentType = "all-blog"

export default async function BlogsPage() {
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
  const blogsData = await GetData(query, contentType, renderConfig);

  return (
    <div className='w-screen'>
      <TopNavBar />
      {blogsData && (
        <DynamicZone
          content={blogsData}
          pageComponentMap={BlogsPageComponentMap}
          globalComponentMap={globalComponentMap}
        />
      )}
    </div>
  )
}
