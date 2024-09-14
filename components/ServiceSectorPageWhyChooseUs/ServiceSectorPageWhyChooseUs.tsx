import WhyChooseCard from "./WhyChooseCard"

interface ServiceSectorPageWhyChooseUsProps {
  componentData: {
    __component: string,
    titleLeftPart: string,
    titleRightPart: string,
    [key: string]: any
  }
}
export default function ServiceSectorPageWhyChooseUs({componentData}: ServiceSectorPageWhyChooseUsProps) {
  return (
    <div className="w-[100%] py-[40px] p-5 md:px-[80px] ">
      <div className="max-w-[1300px] m-[auto]">
        <div className="my-5">
          <p className="poppins-font text-5xl font-bold text-gray-400">{componentData.titleLeftPart} <span className="light-blue">{componentData.titleRightPart}</span>?</p>
        </div>
        <div className="flex flex-wrap">
          {
            componentData.card.map((data: any, index: number) => <WhyChooseCard image={data} title={data.title} text={data.description} index={index} key={index} />)
          }
        </div>
      </div>
    </div>
  )
}
