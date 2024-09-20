import ShowCaseCard from "./ShowCaseCard"

interface ShowCaseCard {
  description: string,
  title: string,
  image: any
}


interface ShowCaseProps {
  componentData: {
    __component: string,
    card: ShowCaseCard[],
    [key: string]: any
  }
}

export default function AboutUsPageShowCase({componentData}: ShowCaseProps) {
  return (
    <div className="flex flex-col md:flex-row mx-auto my-10 justify-between max-w-[1100px]">
      { componentData.card && componentData.card.map((content, index) => <ShowCaseCard description={content.description} title={content.title} image={content.image} key={index} /> ) }
    </div>
  )
}
