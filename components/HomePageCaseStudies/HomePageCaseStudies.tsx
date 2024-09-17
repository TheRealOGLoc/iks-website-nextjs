"use client"
import { useState, useEffect } from "react";
import Link from "next/link";

interface HomePageCaseStudiesProps {
  componentData: {
    __component: string,
    titleLeftPart: string,
    titleRightPart: string,
    description: string,
    buttonText: string,
    card: any;
    [key: string]: any;
  };
}

export default function HomePageCaseStudies({ componentData }: HomePageCaseStudiesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [logos] = useState(componentData.card.image.data);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the view is mobile or desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set a breakpoint for mobile
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize the state on component mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = isMobile ? logos.length : Math.ceil(logos.length / 3); // total slides depend on screen size

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides); // switch to next slider
    }, 6000); // 每6秒切换一次
    return () => clearInterval(interval); // clear timer on component unmount
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="mt-[100px]">
      {/* Header */}
      <div className="text-center">
        <div className="font-semibold text-5xl poppins-font light-blue">
          {componentData.titleLeftPart} <span className="cyan-blue">{componentData.titleRightPart}</span>
        </div>
        <div className="inter-font text-xl max-w-[490px] m-[auto] font-medium my-2 ">
          {componentData.description}
        </div>
      </div>

      {/* Slider */}
      <div className="relative max-w-[1230px] m-[auto] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out mt-9 md:mt-[50px]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {isMobile
            ? // For mobile view: show one image per slide
            logos.map((logo: any, index: number) => (
              <div className="flex w-full justify-center items-center" key={index} style={{ minWidth: '100%' }}>
                <img
                  src={logo.attributes.url}
                  alt={logo.attributes.alternativeText}
                  title={logo.attributes.caption}
                  className="w-[300px] shadow-md m-1"
                />
              </div>
            ))
            : // For desktop view: show 3 images per slide
            Array.from({ length: totalSlides }, (_, i) => (
              <div className="flex min-w-full justify-around items-center" key={i}>
                {logos.slice(i * 3, i * 3 + 3).map((logo: any) => (
                  <img
                    key={logo.id}
                    src={logo.attributes.url}
                    alt={logo.attributes.alternativeText}
                    title={logo.attributes.caption}
                    className="w-[400px] border-[1px] rounded-lg border-zinc-300 shadow-md m-1"
                  />
                ))}
              </div>
            ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-9 md:mt-[50px] space-x-5">
          {Array.from({ length: totalSlides }, (_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full cursor-pointer ${i === currentIndex ? "bg-gray-800" : "bg-gray-400"
                }`}
              onClick={() => goToSlide(i)}
            ></span>
          ))}
        </div>
      </div>
      <div className="mt-6 text-center">
        <Link href={`/case-studies`} className="text-white bg-light-blue hover:bg-blue-600 transition text-sm p-3 mt-3">{componentData.buttonText}</Link>
      </div>
    </div>
  );
}
