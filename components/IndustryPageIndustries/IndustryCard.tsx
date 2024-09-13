import Link from "next/link"

interface IndustryCardProps {
  title: string,
  description: string,
  image: {
    data: {
      attributes: {
        url: string,
        alternativeText: string,
        caption: string
      }
    }
  },
  showButton: boolean,
  buttonText: string,
  buttonUrl: string
}

export default function IndustryCard({title, description, image, showButton, buttonUrl, buttonText}: IndustryCardProps) {
  return (
    <div className="mx-auto md:basis-1/3 p-5 my-3 text-center border-[1px] border-gray-300 rounded-2xl max-w-[300px]">
      <img className="max-w-[230px] m-[auto] mt-5" src={image.data.attributes.url} alt={image.data.attributes.alternativeText} title={image.data.attributes.caption} />
      <div className="my-3 font-semibold">{title}</div>
      <div className="text-sm font-light mb-2">{description}</div>
      {
          showButton && <Link className="text-white bg-slate-600 text-sm p-1 px-3 rounded-lg" href={buttonUrl} >{buttonText}</Link>
      }
    </div>
  )
}
