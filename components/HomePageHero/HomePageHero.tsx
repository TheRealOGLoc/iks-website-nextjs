import HeroDescription from "./HeroDescription";
import "./HomePageHero.css"
import GetInTouch from "../GetInTouch/GetInTouch";

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
    <div
      className="relative  h-screen text-white background-animate"
      style={{ backgroundImage: `url(${componentData.heroBackground.data.attributes.url})` }}
    >
      <div className="absolute w-[100%] md:w-[50%] inset-0 bg-black bg-opacity-20 md:bg-opacity-30"></div>
      <div className="w-full px-6 relative top-[10%] md:top-[15%] text-center md:text-left md:w-[50%] md:ml-10 md:px-6">
        <div className="relative">
          <div className="absolute uncover-animate"></div>
          <h2 className="poppins-font home-page-title text-5xl font-bold leading-tight light-blue md:max-w-[95%] md:text-6xl">
            {componentData.title}
          </h2>
          <h2 className="poppins-font home-page-title text-5xl font-bold leading-tight md:max-w-[95%] md:text-6xl">
            {componentData.subtitle}
          </h2>
        </div>
        <HeroDescription componentData={componentData} />
        <GetInTouch buttonText={componentData.buttonText} />
      </div>
    </div>

  );
}
