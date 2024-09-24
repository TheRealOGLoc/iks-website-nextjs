interface ServiceCardProps {
  title?: string,
  descriptionOne?: string,
  descriptionTwo?: string,
  descriptionThree?: string
}

export default function ServiceCard({ title, descriptionOne, descriptionTwo, descriptionThree }: ServiceCardProps) {
  return (
    <div className="max-w-[360px] m-5 md:m-3">
      {title && <div className="text-center font-semibold poppins-font my-1">{title}</div>}
      <ul className="list-disc ml-5 inter-font">
        {descriptionOne && <li >{descriptionOne}</li>}
        {descriptionTwo && <li >{descriptionTwo}</li>}
        {descriptionThree && <li >{descriptionThree}</li>}
      </ul>
    </div>
  )
}
