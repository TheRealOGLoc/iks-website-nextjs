interface HomePageTransformBusinessProps {
  componentData: {
    __component: string;
    titleLeftPart: string;
    titleRightPart: string;
    description: string;
    buttonTextTouch: string;
    buttonTextExplore: string;
    image: any;
    [key: string]: any;
  };
}

export default function TransformBusiness({ componentData }: HomePageTransformBusinessProps) {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center inter-font">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={componentData.image.data.attributes.url}
          alt="Business Presentation"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-40 md:opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-left max-w-[900px] px-6">
        <div className="text-2xl md:text-4xl font-semibold poppins-font cyan-blue">
          {componentData.titleLeftPart} <span className="light-blue">{componentData.titleRightPart}</span>
        </div>
        <div className="inter-font text-base my-2 font-medium">
          {componentData.description}
        </div>
        <div className="flex mt-6 space-x-4">
          <button className="text-white bg-[#70B9DF] text-sm md:text-l font-semibold px-4 py-2 md:px-6 md:py-3 rounded-md">
            {componentData.buttonTextTouch}
          </button>
        </div>
      </div>
    </div>
  );
}
