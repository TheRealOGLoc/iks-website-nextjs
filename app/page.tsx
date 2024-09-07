import TopNavBar from '@/components/TopNavBar/TopNavBar'
import DynamicZone from '@/components/DynamicZone/DynamicZone'
import { homePageComponentMap, globalComponentMap } from '@/utilities/components-map'
import { GetData } from '@/utilities/get-components-data'

export default async function HomePage() {
  const contentType = "home";
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
        },
      },
    },
  };

  const renderConfig = {
    next: { revalidate: 60 }
  }

  const homeData = await GetData(query, contentType, renderConfig);

  return (
    <div className='w-screen'>
      <TopNavBar />
      {homeData && (
        <DynamicZone
          content={homeData}
          pageComponentMap={homePageComponentMap}
          globalComponentMap={globalComponentMap}
        />
      )}
    </div>
  );
}
