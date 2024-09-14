import CardLink from "./CardLink"

interface HomePageServiceCardProps {
  image: {
    url: string,
    alternativeText: string,
    caption:string
  },
  mobileViewImage: {
    url: string,
    alternativeText: string,
    caption:string
  },
  title: string,
  text: string,
  buttonText: string,
  buttonUrl: string
}

export default function HomePageServiceCard({ image, mobileViewImage, title, text, buttonText, buttonUrl }: HomePageServiceCardProps) {

  return (
    <div className="inter-font mb-12 md:mb-0 text-center md:text-left">
      <img className="w-[64px] h-[64px] mb-3 mx-auto hidden md:mx-0 md:block" src={image.url} alt={image.alternativeText} title={image.caption} />
      <img className="w-[256px] mb-3 mx-auto block md:mx-0 md:hidden" src={mobileViewImage.url} alt={mobileViewImage.alternativeText} title={mobileViewImage.caption} />
      <div className="font-bold text-xl">{title}</div>
      <div className="max-w-[350px] m-auto">{text}</div>
      <div className="mt-3">
        <CardLink buttonText={buttonText} buttonUrl={buttonUrl} />
      </div>
    </div>
  )
}
