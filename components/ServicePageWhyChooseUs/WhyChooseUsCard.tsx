interface WhyChooseUsCardProps {
  title: string,
  description: string,
  icon: any
}

export default function WhyChooseUsCard({title, description, icon}: WhyChooseUsCardProps) {
  return (
    <div className="basis-1/3 max-w-[350px] text-center inter-font p-5 rounded-lg border-[1px] border-gray-100 my-3 md:my-0">
      <img className="w-[49px] m-[auto]" src={icon.data.attributes.url} alt={icon.data.attributes.alternativeText} title={icon.data.attributes.caption} />
      <div className="my-3 font-semibold">{title}</div>
      <div>{description}</div>
    </div>
  )
}
