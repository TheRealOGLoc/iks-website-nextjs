import HomePageWhyUsCard from "./HomePageWhyUsCard"

interface HomePageWhyUsProps {
  componentData: {
    __component: string,
    titleLeftPart: string,
    titleRightPart: string,
    [key: string]: any
  }
}

export default function HomePageWhyUs({ componentData }: HomePageWhyUsProps) {
  return (
    <div className="w-full px-3 md:py-[40px] md:px-[80px]">
      <div className="max-w-[1300px] m-auto">
        <div className="my-5">
          <p className="poppins-font text-5xl font-bold text-gray-400">
            {componentData.titleLeftPart}{" "}
            <span className="light-blue">{componentData.titleRightPart}</span>?
          </p>
        </div>
        <div className="flex flex-wrap -mx-2">
          {componentData.card.map((data: any, index: number) => (
            <HomePageWhyUsCard
              image={data.icon.data.attributes.url}
              title={data.title}
              text={data.description}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}