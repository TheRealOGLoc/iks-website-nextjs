interface IndustryPageOurApproachProps {
  componentData: {
    __component: string,
    title: string,
    description: string,
  }
}

export default function IndustryPageOurApproach({componentData}: IndustryPageOurApproachProps) {
  return (
    <div className="text-center inter-font my-20 hidden md:block">
      <div className="poppins-font text-4xl font-bold light-blue"><span>{componentData.title}</span></div>
      <div className="max-w-[900px] my-5 m-[auto] text-lg font-medium text-gray-600">{componentData.description}</div>
    </div>
  )
}