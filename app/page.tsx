import TopNavBar from '@/components/TopNavBar/TopNavBar'
import DynamicZone from '@/components/DynamicZone/DynamicZone'
import { homePageComponentMap, globalComponentMap } from '@/utilities/components-map'
import { queryPopulate } from '@/utilities/query-populate'

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

  const homeData = await GetData(query, contentType);

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

async function GetData(query: {}, contentType: string) {
  const url = queryPopulate(query, contentType);
  const response = await fetch(url, {
    next: { revalidate: 5 }
  });
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  let components = data.data.attributes.components;
  for (let i = 0; i < components.length; i++) {
    const name = components[i].__component;
    const componentName = name.split(".")[1];
    components[i].__component = componentName;
  }
  return components;
}