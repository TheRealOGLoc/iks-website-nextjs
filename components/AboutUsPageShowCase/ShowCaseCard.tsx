interface ShowCaseCard {
  description: string,
  title: string,
  image: any
}
 

export default function ShowCaseCard({description, title, image}: ShowCaseCard) {
  return (
    <div className="border-[1px] p-7 max-w-[400px] mx-auto my-3 md:max-w-[600px] inter-font shadow-lg">
      <img src={image.data.attributes.url} alt="" />
      <div className="font-bold my-2 text-xl">{title}</div>
      <div>{description}</div>
    </div>
  )
}
