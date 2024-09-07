interface ShowCaseProps {
  componentData: {
    __component: string,
    title: string,
    description: string,
    images: any
    [key: string]: any
  }
}

export default function AboutUsPageAffiliation({ componentData }: ShowCaseProps) {
  return (
    <div>
      <div className="text-center light-blue inter-font">
        <div className="poppins-font font-bold text-2xl">{componentData.title}</div>
        <div className="max-w-[450px] m-auto">{componentData.description}</div>
      </div>
    </div>
  )
}
