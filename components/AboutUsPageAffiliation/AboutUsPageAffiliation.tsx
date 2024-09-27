"use client";

interface ShowCaseProps {
  componentData: {
    __component: string,
    title: string,
    description: string,
    images: any
    [key: string]: any
  }
}

export default function AboutUsPageAffiliation({ componentData }: ShowCaseProps) {
  const images = componentData.images.data || []

  return (
    <div className="my-20">
      <div className="text-center light-blue inter-font">
        <div className="poppins-font font-bold text-4xl">{componentData.title}</div>
        <div className="max-w-[450px] m-auto my-2">{componentData.description}</div>
      </div>
      <div className="max-w-[1000px] m-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
        { images.length > 0 ? (
            images.map((image: any, idx: number) => (
              <div key={idx} className="flex flex-col mb-10 justify-evenly max-w-[250px]" >
                <span className="align-top w-[250px] h-[70px] poppins-font text-xl font-semibold text-center my-3" >{image.attributes.caption}</span>
                <img 
                src={image.attributes.url} 
                alt={image.attributes.alternativeText || "image" } 
                title={image.attributes.caption || ""}
                className="m-auto w-[200px]"
                />
              </div>
            ))
          ) :  ""}
        </div>
      </div>
    </div>
  )
}
