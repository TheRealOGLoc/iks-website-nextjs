interface ServiceSectorPageHeroProps {
  componentData: {
    __component: string,
    title: string,
    description: string,
    mobileViewDescription: string,
    buttonText: string,
    [key: string]: any
  }
}

export default function ServiceSectorPageHero({componentData}: ServiceSectorPageHeroProps) {
  return (
    <div className="relative">
      {/* Mobile Image */}
      <div
        className="bg-cover bg-center block md:hidden h-[500px]"
        style={{ backgroundImage: `url(${componentData.mobileViewBackground.data.attributes.url})` }}
      ></div>

      {/* Desktop Image */}
      <div
        className="bg-cover bg-center hidden md:block h-screen"
        style={{ backgroundImage: `url(${componentData.heroBackground.data.attributes.url})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute w-[100%] md:w-[50%] inset-0 bg-black bg-opacity-20 md:bg-opacity-30"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-10">
        <div className="text-center md:text-left md:w-[50%]">
          <h1 className="poppins-font home-page-title text-4xl font-bold leading-tight md:text-6xl text-white">
            {componentData.title}
          </h1>
          <div className="inter-font text-lg my-6 md:max-w-lg md:my-10 text-white hidden md:block">
            {componentData.description}
          </div>
          <div className="inter-font text-lg my-6 md:max-w-lg md:my-10 text-white block md:hidden text-left max-w-[300px] m-auto">
            {componentData.mobileViewDescription}
          </div>
          <button className="poppins-font bg-blue-400 text-white px-6 py-3 rounded-md text-lg w-[200px]">
            {componentData.buttonText} →
          </button>
        </div>
      </div>
    </div>
  )
}
