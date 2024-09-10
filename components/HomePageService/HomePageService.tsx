import HomePageServiceCard from "./HomePageServiceCard"

interface HomePageServiceProps {
  componentData: {
    __component: string,
    titleLeftPart: string,
    titleRightPart: string,
    description: string,
    buttonText: string,
    buttonUrl: string,
    [key: string]: any
  }
}


export default function HomePageService({componentData}: HomePageServiceProps) {
  return (
    <div className="my-[0px] max-w-[1400px] m-[auto] p-4" >
      <div className="text-center">
        <div className="items-center text-center text-5xl my-5">
          <p className="home-page-solution poppins-font font-semibold cyan-blue">{componentData.titleLeftPart} <span className="light-blue" >{componentData.titleRightPart}</span></p>
        </div>
        <div className="inter-font text-zinc-800 max-w-[800px] mx-auto text-xl cyan-blue">
        {componentData.description}
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between mt-10 cyan-blue px-10">
        {componentData.card.map((data: any, index: number) => <HomePageServiceCard image={data.icon.data.attributes} mobileViewImage={data.mobileViewImage.data.attributes} title={data.title} text={data.description} buttonText={data.buttonText} buttonUrl={data.buttonUrl} key={index} />)}
      </div>
    </div>
  )
}
