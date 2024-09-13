import HomePageSolutionCard from "./HomePageSolutionCard";

interface HomePageSolutionProps {
  componentData: {
    __component: string;
    titleLeftPart: string;
    titleRightPart: string;
    description: string;
    card: {
      icon: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      description: string;
    }[];
    [key: string]: any;
  };
}

export default function HomePageSolution({ componentData }: HomePageSolutionProps) {
  return (
    <div className="my-[50px] md:my-[100px] max-w-[1400px] m-[auto] px-2 md:px-4">
      <div className="text-center">
        <div className="items-center text-center text-4xl md:text-5xl my-5">
          <div className="home-page-solution poppins-font font-semibold cyan-blue">
            {componentData.titleLeftPart}{" "}
            <div className=" light-blue text-3xl md:text-5xl">{componentData.titleRightPart}</div>
          </div>
        </div>
        <div className="inter-font text-zinc-800 max-w-[800px] mx-auto text-lg md:text-xl cyan-blue">
          {componentData.description}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-10 space-y-6 md:space-y-0 md:flex-row md:justify-between">
        {componentData.card.map((data: any, index: number) => (
          <HomePageSolutionCard
            image={data}
            text={data.description}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
