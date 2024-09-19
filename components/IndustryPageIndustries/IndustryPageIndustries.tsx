import IndustryCard from "./IndustryCard"

interface IndustryPageIndustriesProps {
  componentData: {
    __component: string,
    titleLeftPart: string,
    titleRightPart: string,
    description: string,
    [key: string]: any,
  }
}
export default function IndustryPageIndustries({componentData}: IndustryPageIndustriesProps) {

  return (
    <div className="p-5">
      <div className="text-center inter-font mt-5">
        <div className="poppins-font text-4xl font-bold text-gray-500"><span>{componentData.titleLeftPart}</span> <span  className="light-blue">{componentData.titleRightPart}</span></div>
        <div className="max-w-[800px] my-5 m-[auto] text-lg font-medium">{componentData.description}</div>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row justify-between max-w-[1500px] m-[auto] mt-5">
        { componentData.card && componentData.card.map((content : any, index: number) => <IndustryCard title={content.title} description={content.description} image={content.image} showButton={content.showButton} buttonText={content.buttonText} buttonUrl={content.buttonUrl} index={index} key={index} />) }
      </div>
    </div>
  )
}
