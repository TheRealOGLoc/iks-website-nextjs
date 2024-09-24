import PainPointCard from "./PainPointCard"

interface IndustrySectorPageApproachProps {
  componentData: {
    __component: string,
    title: string,
    description: string,
    [key: string]: any
  }
}

export default function IndustrySectorPagePainPoint({ componentData }: IndustrySectorPageApproachProps) {
  return (
    <div className="p-8 mt-5 md:px-20">
      <div className="text-center">
        <div className="poppins-font text-4xl font-bold light-blue">{componentData.title}</div>
        <div className="inter-font max-w-[600px] m-[auto] my-2">{componentData.description}</div>
      </div>

      <div className="flex flex-wrap flex-col md:flex-row justify-around max-w-[1200px] m-[auto] mt-5">
        {
          componentData.card && componentData.card.map((content: any, index: number) => <PainPointCard title={content.title} description={content.description} icon={content.icon} index={index} key={index} />)
        }
      </div>
    </div>
  )
}
