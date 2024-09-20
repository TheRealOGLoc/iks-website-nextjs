interface ShowCaseCard {
  description: string,
  title: string,
  image: any
}
 

export default function ShowCaseCard({description, title, image}: ShowCaseCard) {
  return (
    <div className="border-[1px] p-7 max-w-[400px] mx-auto my-3 md:max-w-[500px] inter-font shadow-lg">
      <img src={image.data.attributes.url} alt={image.data.attributes.alternativeText} title={image.data.attributes.caption} />
      <div className="font-bold my-2 text-xl">{title}</div>
      <div>{description}</div>
    </div>
  )
}
