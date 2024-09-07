"use client"
import { useState, useEffect } from "react";

interface HomePageCaseStudiesProps {
  componentData: {
    __component: string,
    titleLeftPart: string,
    titleRightPart: string,
    description: string,
    buttonText: string,
    card: any
    [key: string]: any
  }
}

export default function HomePageCaseStudies({ componentData }: HomePageCaseStudiesProps) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [logos] = useState(componentData.card.image.data)

  const totalSlides = Math.ceil(logos.length / 3); // calculate total slider number

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides); // switch to next slider
    }, 6000); // 每3秒切换一次
    return () => clearInterval(interval); // 组件卸载时清除定时器
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };


  return (
    <div className="mt-[100px]">
      <div className="text-center">
        <div className="font-semibold text-5xl poppins-font light-blue">{componentData.titleLeftPart} <span className="cyan-blue">{componentData.titleRightPart}</span></div>
        <div className="inter-font text-xl max-w-[490px] m-[auto] font-medium my-2">{componentData.description}</div>
        <button className="text-white bg-slate-500 text-sm p-3 mt-3">{componentData.buttonText}</button>
      </div>

      <div className="relative max-w-[1200px] m-[auto] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out mt-[100px]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalSlides }, (_, i) => (
            <div className="flex min-w-full justify-around items-center" key={i}>
              {logos.slice(i * 3, i * 3 + 3).map((logo: any) => (
                <img key={logo.id} src={logo.attributes.url} alt={logo.attributes.name} className="w-[400px]" />
              ))}
            </div>
          ))}
        </div>
        {/* 通过 flex 布局放在下方 */}
        <div className="flex justify-center mt-[100px] space-x-5">
          {Array.from({ length: totalSlides }, (_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full cursor-pointer ${i === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
              onClick={() => goToSlide(i)}
            ></span>
          ))}
        </div>
      </div>

    </div>
  )
}
