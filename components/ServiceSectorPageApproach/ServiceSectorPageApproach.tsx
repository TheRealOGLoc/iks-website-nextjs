import ApproachCard from "./ApproachCard"

interface ServiceSectorPageApproachProps {
  componentData: {
    __component: string,
    titleLeftPart: string,
    titleRightPart: string,
    description: string,
    [key: string]: any
  }
}

export default function ServiceSectorPageApproach({ componentData }: ServiceSectorPageApproachProps) {
  return (
    <div className="p-20">
      <div className="text-center">
        <div className="poppins-font text-4xl font-bold text-gray-500"><span>{componentData.titleLeftPart}</span> <span className="light-blue">{componentData.titleRightPart}</span></div>
        <div className="inter-font max-w-[600px] m-[auto] my-2">{componentData.description}</div>
      </div>

      <div className="flex flex-wrap flex-col md:flex-row justify-between max-w-[1100px] m-[auto] mt-5">
        {
          componentData.card && componentData.card.map((content: any, index: number) => <ApproachCard title={content.title} index={index} description={content.description} icon={content.icon} key={index} />)
        }
      </div>
    </div>
  )
}
