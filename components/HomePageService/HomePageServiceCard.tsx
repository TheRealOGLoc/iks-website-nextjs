interface HomePageServiceCardProps {
  image: any,
  mobileViewImage: any,
  title: string,
  text: string,
  buttonText: string
}

export default function HomePageServiceCard({image, mobileViewImage, title, text, buttonText}: HomePageServiceCardProps) {
  return (
    <div className="inter-font mb-12 md:mb-0 text-center md:text-left">
      <img className="w-[64px] h-[64px] mb-3 mx-auto hidden md:mx-0 md:block" src={image.url} alt="service-icon" />
      <img className="w-[256px] mb-3 mx-auto block md:mx-0 md:hidden" src={mobileViewImage.url} alt="service-icon" />
      <div className="font-bold text-xl">{title}</div>
      <div className="max-w-[350px]">{text}</div>
      <button className="text-white bg-slate-500 text-sm p-3 mt-3">{buttonText}</button>
    </div>
  )
}
