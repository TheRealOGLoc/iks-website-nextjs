import WhyChooseUsCard from "./WhyChooseUsCard"

interface ServicePageWhyChooseUsProps {
  componentData: {
    __component: string,
    titleLeftPart: string,
    titleRightPart: string,
    [key: string]: any
  }
}

export default function ServicePageWhyChooseUs({componentData}: ServicePageWhyChooseUsProps) {
  return (
    <div className="p-20">
      <div className="poppins-font text-4xl font-bold text-gray-500"><span>{componentData.titleLeftPart}</span> <span  className="light-blue">{componentData.titleRightPart}</span></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1200px] m-[auto] mt-5">
        {
          componentData.card && componentData.card.map((content: any, index: number) => <WhyChooseUsCard title={content.title} description={content.description} icon={content.icon} index={index} key={index} />)
        }
      </div>
    </div>
  )
}
