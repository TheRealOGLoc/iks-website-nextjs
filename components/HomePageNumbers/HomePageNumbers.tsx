import HomePageNumbersCard from "./HomePageNumbersCard"

interface HomePageNumbersProps {
  componentData: {
    __component: string,
    titleLeftPart: string,
    titleRightPart: string,
    [key: string]: any
  }
}

export default function HomePageNumbers({componentData}: HomePageNumbersProps) {
  return (
    <div className="my-10">
      <div className="text-center text-5xl font-semibold">
        <div className="poppins-font cyan-blue my-10">{componentData.titleLeftPart} <span className="light-blue">{componentData.titleRightPart}</span></div>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row max-w-[1300px] m-[auto]">
        {componentData.card.map((data: any, index: number) => <HomePageNumbersCard data={data.number} title={data.title} text={data.description} plusSign={data.plusSign} key={index} />)}
      </div>
    </div>
  )
}
