interface Children {
  text: string,
  type: string
}

interface ContentChildren {
  children: Children[]
}

interface CaseCardProps {
  componentData: {
    id: number,
    title: string,
    readTime: number,
    postTime: string,
    slug: string,
    blogImage: {
      [key: string]: any
    },
    content: ContentChildren[]
  }
}
export default function CaseCard({ componentData }: CaseCardProps) {
  return (
    <div className="max-w-[350px] my-3 md:max-w-[380px] shadow-xl mx-auto min-h-[430px] md:max-h-[500px] transition hover:shadow-2xl">
      <div className="mt-12 w-[290px] md:w-[350px] mx-auto md:overflow-hidden">
        <img
          className="max-w-[290px] md:max-w-[350px]"
          src={componentData.blogImage.data.attributes.url}
          alt={componentData.blogImage.data.attributes.alternativeText}
          title={componentData.blogImage.data.attributes.caption}
        />
      </div>
      <div className="p-7">
        <a className="flex items-start hover:underline" href={`/case-studies/${componentData.slug}`}>
          <div className="font-bold text-2xl my-2">{componentData.title}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 min-w-5 mt-4 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 19L19 5M5 5h14v14"
            />
          </svg>
        </a>
        <div className="multiline-ellipsis text-lg my-2 text-gray-500">
          {componentData.content[0].children[0].text}
        </div>
      </div>

    </div>
  )
}
