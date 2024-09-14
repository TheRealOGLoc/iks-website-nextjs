"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import CategoryModule from "./CategoryModule"

interface ServiceCategoryProps {
  componentData: {
    __component: string,
    titleLeftPart: string,
    titleRightPart: string,
    description: string,
    buttonText: string,
    buttonUrl: string,
    modules: CategroyModule[],
    [key: string]: any
  }
}

interface CategroyModule {
  title: string,
  description: string
}


export default function ServicePageCategory({ componentData }: ServiceCategoryProps) {

  const [modules, setModules] = useState<CategroyModule[] | null>(null)

  useEffect(() => {
    setModules(componentData.modules)
  }, [])

  return (
    <div className="my-5 p-5">
      <div className="text-center inter-font mt-5">
        <div className="poppins-font text-4xl font-bold text-gray-500"><span>{componentData.titleLeftPart}</span> <span className="light-blue">{componentData.titleRightPart}</span></div>
        <img className="w-[256px] mb-3 mx-auto block md:mx-0 md:hidden" src={componentData.mobileViewImage.data.attributes.url} alt={componentData.mobileViewImage.data.attributes.alternativeText} title={componentData.mobileViewImage.data.attributes.caption} />
        <div className="max-w-[800px] my-5 m-[auto] text-lg font-medium">{componentData.description}</div>
        <Link className="rounded-lg p-3 text-white bg-gray-500 px-5" href={componentData.buttonUrl} >{componentData.buttonText}</Link>
      </div>
      <div className="hidden md:block">
        <div className="flex m-[auto] mt-[50px] justify-between max-w-[1300px]">
          {modules && modules.map((module, index) => <CategoryModule title={module.title} description={module.description} key={index} />)}
        </div>
      </div>
    </div>
  )
}
