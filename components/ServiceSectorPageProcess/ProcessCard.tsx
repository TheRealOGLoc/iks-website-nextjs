interface ProcessCardProps {
  title: string,
  description: string,
  icon: any
}

export default function ProcessCard({title, description, icon}: ProcessCardProps) {
  return (
    <div className="max-w-[300px] mx-auto md:mx-0 my-2 text-center inter-font p-5 rounded-lg border-[1px] border-gray-100">
      <img className="w-[49px] m-[auto]" src={icon.data.attributes.url} alt="" />
      <div className="my-3 font-semibold">{title}</div>
      <div>{description}</div>
    </div>
  )
}
