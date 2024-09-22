interface Children {
  text: string,
  type: string
}

interface ContentChildren {
  children: Children[]
}

interface LatestCasesProps {
  componentData: {
    id: number,
    title: string,
    readTime: number,
    slug: string,
    blogImage: {
      [key: string]: any
    },
    content: ContentChildren[]
  }
}

export default function LatestCasesCard({ componentData }: LatestCasesProps) {

  return (
    <div className="md:max-w-[350px] mb-9 p-7 md:p-0 md:shadow-md md:hover:shadow-xl transition md:min-h-[470px] latest-post-card">
      <img className="mx-[auto] overflow-hidden" src={componentData.blogImage.data.attributes.url} alt={componentData.blogImage.data.attributes.alternativeText} title={componentData.blogImage.data.attributes.caption} />
      <div className="md:p-7">
        <div className="font-bold text-2xl my-5 md:my-2">{componentData.title}</div>
        <div className="multiline-ellipsis text-base my-2 text-gray-600">{componentData.content[0].children[0].text}</div>
        <div className="my-4 font-semibold flex">
          <a className="read-more-link underline md:no-underline text-cyan-600" href={`/case-studies/${componentData.slug}`}>Read more</a>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 122.88 122.25"
            xmlSpace="preserve"
            className="w-5 min-w-5 ml-3"
          >
            <g>
              <path
                d="M122.57,29.25l0.31,62.88c0.01,3.28-2.05,6.1-5,7.29l0.01,0.01l-54.64,22.09c-0.99,0.4-2.05,0.6-3.12,0.6
      c-0.11,0-0.22,0-0.33-0.01c-0.47,0.08-0.95,0.13-1.42,0.13c-1.06,0-2.11-0.21-3.08-0.62L4.94,100.46l0-0.01
      C2.03,99.22-0.01,96.32,0,92.94l0.3-62.08c-0.04-0.66,0-1.33,0.12-1.99c0.02-0.95,0.22-1.88,0.58-2.76
      c0.84-2.04,2.47-3.55,4.42-4.33l0-0.01L57.98,0.6c2.14-0.86,4.44-0.77,6.4,0.07l52.47,18.97c3.14,1.13,5.13,3.96,5.27,7.01
      C122.41,27.49,122.57,28.37,122.57,29.25L122.57,29.25z M51.51,108.46l0.39-54.77L9.82,35.5L8.93,90.49L51.51,108.46
      L51.51,108.46L51.51,108.46z M113.58,35.5L66.55,53.7l0.37,54.71l46.94-17.54L113.58,35.5L113.58,35.5L113.58,35.5z"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}


