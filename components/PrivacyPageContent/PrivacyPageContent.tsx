import RichTextRenderer from "../BlogDetailPageContent/RichTextRenderer"


interface BlogDetailPageContentProps {
  componentData: {
    content: [],
    title: string
  }
}

export default function PrivacyPageContent({ componentData }: BlogDetailPageContentProps) {
  return (
    <div className="max-w-[1250px] mx-auto inter-font py-9 px-5 md:px-0">
      <div className="max-w-[800px] m-auto" >
        <div className="poppins-font text-4xl text-center font-semibold">{componentData.title}</div>
        <RichTextRenderer nodes={componentData.content} />
      </div>
    </div>
  )
}


