import ProcessCard from "./ProcessCard"

interface ServiceSectorPageProcesssProps {
  componentData: {
    __component: string,
    titleLeftPart: string,
    titleRightPart: string,
    [key: string]: any
  }
}

export default function ServiceSectorPageProcess({componentData}: ServiceSectorPageProcesssProps) {
  return (
    <div className="p-5 md:p-20">
      <div className="text-center poppins-font text-5xl font-bold text-gray-500"><span>{componentData.titleLeftPart}</span> <span  className="light-blue">{componentData.titleRightPart}</span></div>
      <div className="flex flex-wrap flex-col md:flex-row justify-between max-w-[1300px] m-[auto] mt-5">
        {
          componentData.card && componentData.card.map((content: any, index: number) => <ProcessCard title={content.title} description={content.description} icon={content.icon} key={index} />)
        }
      </div>
    </div>
  )
}
