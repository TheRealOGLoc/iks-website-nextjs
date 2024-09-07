interface SolutionCardProps {
  title: string,
  description: string,
  icon: any
}

export default function SolutionCard({title, description, icon}: SolutionCardProps) {
  return (
    <div className="my-2 text-white basis-1/3 max-w-[350px] text-center inter-font p-5 rounded-lg border-[1px] bg-gray-500">
      <img className="w-[49px] m-[auto]" src={icon.data.attributes.url} alt="" />
      <div className="my-3 font-semibold">{title}</div>
      <div>{description}</div>
    </div>
  )
}


