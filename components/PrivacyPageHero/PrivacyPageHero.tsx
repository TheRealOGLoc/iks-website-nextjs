import GetInTouch from "../GetInTouch/GetInTouch";
import HeroDescription from "../HomePageHero/HeroDescription";

interface TestimonialsPageHeroProps {
  componentData: {
    __component: string,
    title: string,
    description: string,
    mobileViewDescription: string,
    buttonText: string,
    [key: string]: any
  }
}

export default function PrivacyPageHero({ componentData }: TestimonialsPageHeroProps) {
  return (
    <div className="relative">
      {/* Mobile Image */}
      <div
        className="bg-cover bg-center block md:hidden h-[500px] background-animate-other"
        style={{ backgroundImage: `url(${componentData.mobileViewBackground.data.attributes.url})` }}
      ></div>

      {/* Desktop Image */}
      <div
        className="bg-cover bg-center hidden md:block h-[800px]"
        style={{ backgroundImage: `url(${componentData.heroBackground.data.attributes.url})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute w-[100%] md:w-[50%] inset-0 bg-black bg-opacity-20 md:bg-opacity-30"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-10">
        <div className="text-center md:text-left md:w-[50%]">
          <div className="relative">
            <div className="absolute uncover-animate"></div>
            <h1 className="poppins-font home-page-title text-4xl font-bold leading-tight md:text-6xl text-white">
              {componentData.title}
            </h1>
          </div>
          <HeroDescription componentData={componentData} />
          <GetInTouch buttonText="Get in touch" />
        </div>
      </div>
    </div>
  )
}


