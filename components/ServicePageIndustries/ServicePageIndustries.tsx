import Link from "next/link"
import IndustryCard from "./IndustryCard"

interface ServicePageIndustriesProps {
  componentData: {
    __component: string,
    titleLeftPart: string,
    titleRightPart: string,
    description: string,
    buttonText: string,
    [key: string]: any,
  }
}

export default function ServicePageIndustries({componentData}: ServicePageIndustriesProps) {

  return (
    <div className="p-3">
      <div className="text-center inter-font mt-5">
        <div className="poppins-font text-4xl font-bold text-gray-500"><span>{componentData.titleLeftPart}</span> <span  className="light-blue">{componentData.titleRightPart}</span></div>
        <div className="max-w-[800px] my-5 m-[auto] text-lg font-medium">{componentData.description}</div>
        <Link className="rounded-lg p-3 text-white bg-blue-600 bg-opacity-80 md:bg-opacity-60 no-underline hover:underline-offset-4 hover:underline hover:bg-opacity-100 transition duration-200 px-5" href={""} >{componentData.buttonText}</Link>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row md:justify-between max-w-[1000px] m-[auto] mt-5">
        { componentData.card && componentData.card.map((content : any, index: number) => <IndustryCard title={content.title} description={content.description} image={content.image} index={index} key={index} />) }
      </div>
    </div>
  )
}
