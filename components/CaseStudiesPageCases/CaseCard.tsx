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
    <div className="max-w-[350px] md:max-w-[400px] p-7 shadow-xl mx-auto min-h-[450px] md:min-h-[600px]">
    <div className="overflow-hidden">
      <img
        className=""
        src={componentData.blogImage.data.attributes.url}
        alt=""
      />
    </div>
    <div className="font-semibold mt-10 text-gray-500">
    </div>
    <a className="flex items-start" href={`/case-studies/${componentData.slug}`}>
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
  )
}
