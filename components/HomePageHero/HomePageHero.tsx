import Link from "next/link";

interface HomePageHeroProps {
  componentData: {
    __component: string;
    title: string;
    subtitle: string;
    description: string;
    mobileViewDescription: string;
    buttonText: string;
    buttonUrl: string;
    [key: string]: any;
  };
}

export default function HomePageHero({ componentData }: HomePageHeroProps) {
  return (
    <div>
      <div
        className="relative bg-cover bg-center h-screen text-white"
        style={{ backgroundImage: `url(${componentData.heroBackground.data.attributes.url})` }}
      >
        <div className="absolute w-[100%] md:w-[50%] inset-0 bg-black bg-opacity-20 md:bg-opacity-30 "></div>
        <div className="w-full px-6 relative top-[10%] md:top-[15%] text-center md:text-left md:w-[50%] md:ml-10 md:px-6">
          <h2 className="poppins-font home-page-title text-5xl font-bold leading-tight light-blue md:text-6xl">
            {componentData.title}
          </h2>
          <h2 className="poppins-font home-page-title text-5xl font-bold leading-tight md:text-6xl">
            {componentData.subtitle}
          </h2>
          <div className="hidden md:block inter-font text-lg my-6 md:max-w-lg md:my-10">
            {componentData.description}
          </div>
          <div className="block md:hidden inter-font text-lg my-10 md:max-w-lg md:my-10">
            {componentData.mobileViewDescription}
          </div>
          <Link
            href={componentData.buttonUrl}
            className="poppins-font bg-blue-400 text-white px-6 py-3 rounded-md text-lg w-[170px]"
          >
            {componentData.buttonText} →
          </Link>
        </div>
      </div>
    </div>
  );
}
