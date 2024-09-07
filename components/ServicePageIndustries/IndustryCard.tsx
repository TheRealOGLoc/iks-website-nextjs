interface IndustryCardProps {
  title: string,
  description: string,
  image: {
    data: {
      attributes: {
        url: string
      }
    }
  }
}

export default function IndustryCard({title, description, image}: IndustryCardProps) {
  return (
    <div className="mx-auto my-3 md:basis-1/3 p-5 text-center bg-gray-400 text-white rounded-2xl max-w-[300px]">
      <img className="max-w-[230px] m-[auto] mt-5" src={image.data.attributes.url} alt="" />
      <div className="my-3 font-semibold">{title}</div>
      <div className="text-sm font-light">{description}</div>
    </div>
  )
}
