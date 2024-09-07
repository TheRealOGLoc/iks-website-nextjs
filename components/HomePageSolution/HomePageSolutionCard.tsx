interface HomePageSolutionCardProps {
  image: string,
  text: string
}

export default function HomePageSolutionCard({image, text}: HomePageSolutionCardProps) {
  return (
    <div className="inter-font text-center m-10">
      <img className="w-[64px] m-[auto]" src={image} alt="img" />
      <div className="max-w-[280px] mt-7 cyan-blue" >{text}</div>
    </div>
  )
}
