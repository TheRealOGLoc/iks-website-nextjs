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
    <div className="">
      <div className="text-center poppins-font text-5xl font-bold text-gray-500"><span>{componentData.titleLeftPart}</span> <span className="light-blue">{componentData.titleRightPart}</span></div>
      <div className="flex flex-col md:flex-row max-w-[1418px] m-[auto] mt-5">
        {
          componentData.card && componentData.card.map((content: any, index: number) => {

            return <div className="flex flex-col md:flex-row items-center" key={index}>
              {
                <ProcessCard title={content.title} description={content.description} icon={content.icon} index={index} key={index} />
              }
              {
                index !== 3 &&
                <Image src={DotArrow} className="rotate-90 md:rotate-0 w-[64px] h-[64px] mx-1" alt={""} />
              }
            </div>
          })
        }

      </div>
    </div>
  )
}
