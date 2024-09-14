import { formatDate } from "../../utilities/format-data"

interface Children {
  text: string,
  type: string
}

interface ContentChildren {
  children: Children[]
}

interface BlogCardProps {
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
export default function BlogCard({ componentData }: BlogCardProps) {
  return (
    <div className="max-w-[350px] md:max-w-[350px] p-7 shadow-xl mx-auto min-h-[500px] md:max-h-[550px] hover:bg-slate-100 transition hover:shadow-2xl">
      <div className="max-w-[350px] h-[250px] overflow-hidden">
        <img
          className="h-[200px] object-cover"
          src={componentData.blogImage.data.attributes.url}
          alt={componentData.blogImage.data.attributes.alternativeText}
          title={componentData.blogImage.data.attributes.caption}
        />
      </div>
      <div className="font-semibold text-gray-500">
        {formatDate(componentData.postTime)}
      </div>
      <a className="flex items-start hover:underline" href={`/blogs/${componentData.slug}`}>
        <div className="font-bold text-2xl my-2">{componentData.title}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 min-w-5 mt-2 ml-1"
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
