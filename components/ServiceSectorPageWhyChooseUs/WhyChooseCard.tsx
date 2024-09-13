interface WhyChooseCardProps {
  image: any,
  title: string,
  text: string
}
export default function WhyChooseCard({image, title, text}: WhyChooseCardProps) {
  return (
    <div className="inter-font bg-gray-400 mx-3 my-2 p-7 rounded-md text-center w-[390px] text-white">
      <img className="w-[49px] m-[auto] " src={image.icon.data.attributes.url} alt={image.icon.data.attributes.alternativeText} title={image.icon.data.attributes.caption} />
      <div className="font-bold my-2">{title}</div>
      <div>{text}</div>
    </div>
  )
}
