import Tick from "@/public/icon/blue-tick.png"
import Image from "next/image"

interface ServiceCardProps {
  title?: string,
  descriptionOne?: string,
  descriptionTwo?: string,
  descriptionThree?: string,
  image?: any
}

export default function ServiceCard({ title, descriptionOne, descriptionTwo, descriptionThree, image }: ServiceCardProps) {
  return (
    <div className="max-w-[360px] border-[2px] border-gray-300 rounded-3xl py-3 m-5 md:m-3">
      <img className="rounded-full w-[192px] h-[192px] my-10 mx-auto" src={image?.data?.attributes?.url} alt={image.data.attributes.alternativeText} title={image.data.attributes.caption} />
      {title && <div className="text-center h-14 font-semibold text-2xl poppins-font my-1">{title}</div>}
      <ul className="pl-3 pr-4 inter-font">
        {descriptionOne && <li className="flex mb-2" ><Image src={Tick} alt="" className="w-[24px] h-[24px] mr-3" /> {descriptionOne}</li>}
        {descriptionTwo && <li className="flex mb-2"><Image src={Tick} alt="" className="w-[24px] h-[24px] mr-3" />{descriptionTwo}</li>}
        {descriptionThree && <li className="flex mb-2"><Image src={Tick} alt="" className="w-[24px] h-[24px] mr-3" />{descriptionThree}</li>}
      </ul>
    </div>
  )
}
