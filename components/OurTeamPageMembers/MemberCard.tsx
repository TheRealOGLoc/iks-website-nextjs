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
    <div className="flex flex-col md:flex-row mb-8 md:my-[150px]"> 
      {
        !odd 
        ?
        <img className="" src={image.data.attributes.url} alt="" />
        : 
        <img className="block object-fill md:hidden" src={image.data.attributes.url} alt="" />
      }
      <div className="inter-font p-10 pt-[100px]">
        <div className="font-bold poppins-font text-4xl">{name}</div>
        <div className="text-gray-700 text-lg my-3">{jobTitle}</div>
        <div className="cyan-blue">{description}</div>
      </div>
      {
        odd
        ?
        <img className="hidden object-fill md:block" src={image.data.attributes.url} alt="" />
        : 
        ""
      }
    </div>
  )
}
