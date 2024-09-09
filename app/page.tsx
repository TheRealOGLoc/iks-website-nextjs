import TopNavBar from '@/components/TopNavBar/TopNavBar'
import DynamicZone from '@/components/DynamicZone/DynamicZone'
import { homePageComponentMap, globalComponentMap } from '@/utilities/components-map'
import { GetData, GetSeoData } from '@/utilities/get-components-data'
import { Metadata } from 'next';

export async function generateMetadata():Promise<Metadata | undefined> {
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

  const homeSEOData = await GetSeoData(SEOquery, contentType);
  // const util = require("util")
  // console.log(util.inspect(homeSEOData, { depth: null }))
  const metadata: Metadata = {
    title: homeSEOData.title,
  };
  const other: Record<string, string> = {};

  homeSEOData.metaTag.forEach((tag: { attribute: string, content: string }) => {
    if (tag.attribute === 'description') {
      metadata.description = tag.content;
    } else if (tag.attribute === 'keywords') {
      metadata.keywords = tag.content;
    } else {
      other[tag.attribute] = tag.content;
    }
  });

  if (Object.keys(other).length > 0) {
    metadata.other = other;
  }

  if (homeSEOData.canonical) {
    metadata.alternates = {
      canonical: homeSEOData.canonical,
    };
  }

  if (homeSEOData.openGraph) {
    metadata.openGraph = {
      title: homeSEOData.openGraph.title,
      description: homeSEOData.openGraph.description,
      type: homeSEOData.openGraph.type,
      url: homeSEOData.openGraph.url,
      siteName: homeSEOData.openGraph.siteName,
      images: homeSEOData.openGraph.images?.data.map((image: any) => ({
        url: image.attributes.formats.large.url,
        alt: image.attributes.name,
      })),
    };
  }

  return metadata;
}

const contentType = "home"
export default async function HomePage() {
  
  const query = {
    populate: {
      components: {
        populate: {
          heroBackground: "*", // Populate the hero background image
          card: { // Ensure "card" is correctly populated
            populate: ["icon", "image", "mobileViewImage"], // Populate each card's icon in the Solutions component
          },
          image: "*",
          firstRow: {
            populate: "image",
          },
          secondRow: {
            populate: "image",
          },
          chartset: "*",
          title: "*",
          metaTag: "*",
          canonical: "*"
        },
      },
    },
  };

  const renderConfig = {
    next: { revalidate: 1 }
  }

  const homeData = await GetData(query, contentType, renderConfig);
  // const util = require("util")
  // console.log(util.inspect(homeData[0], { depth: null }))
  return (
    <main className='w-screen'>
      <TopNavBar />
      {homeData && (
        <DynamicZone
          content={homeData}
          pageComponentMap={homePageComponentMap}
          globalComponentMap={globalComponentMap}
        />
      )}
    </main>
  );
}
