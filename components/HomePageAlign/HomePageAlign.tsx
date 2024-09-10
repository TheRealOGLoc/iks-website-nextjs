import AlignDescription from "./AlignDescription"
interface HomePageAlignProps {
  componentData: {
    __component: string,
    description: string,
    titleLeftPart: string,
    titleRightPart: string,
    [key: string]: any
  }
}

export default function HomePageAlign({componentData}: HomePageAlignProps) {
  return (
    <div className="my-[100px] p-5">
      <div className="text-center">
        <div className="font-semibold text-4xl md:text-5xl poppins-font cyan-blue">
          {componentData.titleLeftPart} <span className="light-blue underline">{componentData.titleRightPart}</span>
        </div>
        <div className="inter-font text-xl max-w-[1000px] m-[auto] font-medium my-2">
          {componentData.description && 
            <AlignDescription componentData={componentData} />
          }
        </div>
      </div>
    </div>
  )
}
