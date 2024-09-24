import ProcessCard from "./ProcessCard"
import DotArrow from "@/public/icon/dot-arrow.png"
import Arrow from "@/public/icon/arrow.png"
import Image from "next/image"

interface ServiceSectorPageProcesssProps {
  componentData: {
    __component: string,
    titleLeftPart: string,
    titleRightPart: string,
    [key: string]: any
  }
}

export default function ServiceSectorPageProcess({ componentData }: ServiceSectorPageProcesssProps) {
  return (
    <div className="p-5 ">
      <div className="text-center poppins-font text-5xl font-bold text-gray-500"><span>{componentData.titleLeftPart}</span> <span className="light-blue">{componentData.titleRightPart}</span></div>
      <div className="flex flex-wrap flex-col xl:flex-row max-w-[1124px] m-[auto] mt-5">
        {
          componentData.card && componentData.card.map((content: any, index: number) => {

            return <div className="flex flex-col xl:flex-row items-center" key={index}>
              {
                index !== 3 &&
                <ProcessCard title={content.title} description={content.description} icon={content.icon} index={index} key={index} />
              }
              {
                index !== 2 && index !== 3 &&
                <Image src={DotArrow} className="rotate-90 xl:rotate-0 w-[64px] h-[64px] mx-6" alt={""} />
              }
            </div>
          })
        }

      </div>
      {
        componentData.card && componentData.card[3] &&
        <div className="max-w-[300px] m-[auto] xl:mt-9">
          <Image src={Arrow} className="rotate-90 mx-auto" alt="" />
          <ProcessCard title={componentData.card[3].title} description={componentData.card[3].description} icon={componentData.card[3].icon} index={3} key={3} />
        </div>
      }
    </div>
  )
}
