import SolutionCard from "./SolutionCard"

interface IndustrySectorPageOurSolutionProps {
  componentData: {
    __component: string,
    title: string,
    [key: string]: any
  }
}

export default function IndustrySectorPageOurSolution({componentData}: IndustrySectorPageOurSolutionProps) {
  return (
    <div className="p-8 md:p-20 max-w-[1250px] m-auto">
      <div className="poppins-font text-4xl font-bold text-gray-500"><span className="light-blue">{componentData.title}</span></div>
      <div className="flex flex-wrap flex-col md:flex-row justify-between m-[auto] mt-5">
        {
          componentData.card && componentData.card.map((content: any, index: number) => <SolutionCard title={content.title} description={content.description} icon={content.icon} index={index} key={index} />)
        }
      </div>
    </div>
  )
}

