"use client"
import { usePathname } from "next/navigation"
import ServiceCard from "./ServiceCard"


interface ServiceSectorPageServicesProps {
  componentData: {
    titleLeftPart: string,
    titleRightPart: string,
    description: string,
    image: any,
    card: any
  }
}

export default function ServiceSectorPageServices({ componentData }: ServiceSectorPageServicesProps) {
  const softwarePathname = usePathname() === "/services/custom-software-solution"

  return (
    <div className="p-5">
      <div className="text-center">
        <div className="poppins-font text-4xl font-bold text-gray-500"><span>{componentData.titleLeftPart}</span> <span className="light-blue">{componentData.titleRightPart}</span></div>
        <div className="inter-font max-w-[600px] m-[auto] my-2">{componentData.description}</div>
      </div>
      {
        softwarePathname ?
          <div className='flex justify-between flex-col md:flex-row max-w-[800px] m-auto my-5'>
            {componentData.card && componentData.card.map((content: any, index: number) => <ServiceCard title={content.title} descriptionOne={content.descriptionOne} descriptionThree={content.descriptionThree} descriptionTwo={content.descriptionTwo} key={index} />)}
          </div> :
          <div className='flex justify-between flex-col md:flex-row max-w-[1200px] m-auto my-5'>
            {componentData.card && componentData.card.map((content: any, index: number) => <ServiceCard title={content.title} descriptionOne={content.descriptionOne} descriptionThree={content.descriptionThree} descriptionTwo={content.descriptionTwo} key={index} />)}
          </div>
      }

    </div>
  )
}
