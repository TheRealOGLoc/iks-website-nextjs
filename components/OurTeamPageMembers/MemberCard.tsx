interface MemberCards {
  description: string,
  jobTitle: string,
  name: string,
  image: any,
  odd: boolean,
  [key: string]: any,
}

export default function MemberCard({description, jobTitle, name, odd, image}: MemberCards) {
  return (
    <div className="flex flex-col md:flex-row items-center mb-8 md:my-[50px]"> 
      {
        !odd 
        ? 
          <img className="object-fill max-w-[300px]" src={image.data.attributes.url} alt={image.data.attributes.alternativeText} title={image.data.attributes.caption} />
        : 
        <img className="block object-fill md:hidden max-w-[300px]" src={image.data.attributes.url} alt={image.data.attributes.alternativeText} title={image.data.attributes.caption} />
      }
      <div className="inter-font p-10">
        <div className="font-bold poppins-font text-4xl">{name}</div>
        <div className="text-gray-700 text-lg my-3">{jobTitle}</div>
        <div className="cyan-blue">{description}</div>
      </div>
      {
        odd
        ?
        <img className="hidden object-fill md:block max-w-[300px]" src={image.data.attributes.url} alt={image.data.attributes.alternativeText} title={image.data.attributes.caption} />
        : 
        ""
      }
    </div>
  )
}
