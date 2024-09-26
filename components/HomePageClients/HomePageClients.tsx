"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface HomePageClientsProps {
  componentData: {
    __component: string;
    titleLeftPart: string;
    titleRightPart: string;
    description: string;
    firstRow: {
      data: { attributes: { url: string; name: string; alternativeText?: string; caption?: string } }[];
    };
    secondRow: {
      data: { attributes: { url: string; name: string; alternativeText?: string; caption?: string } }[];
    };
    [key: string]: any;
  };
}

export default function HomePageClients({ componentData }: HomePageClientsProps) {
  const firstRow = componentData.firstRow.data || [];
  const secondRow = componentData.secondRow.data || [];

  const firstRowRef = useRef<Slider | null>(null);
  const secondRowRef = useRef<Slider | null>(null);
  const viewRef = useRef(null);
  const inView = useInView(viewRef);

  useEffect(() => {
    setTimeout(startPlay, 3000)
  }, [inView]);

  const startPlay = () => {
    if (inView) {
      firstRowRef.current?.slickPlay();
      secondRowRef.current?.slickPlay();
    } 
  }

  // Slider settings for first row (left to right)
  const settingsLTR = {
    dots: false,
    infinite: true,
    speed: 3000,
    pauseOnHover: false,
    slidesToShow: 8,
    slidesToScroll: 3,
    autoplay: false, // autoplay
    autoplaySpeed: 0,
    responsive: [
      {
        breakpoint: 768, // For mobile view
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
    ],
  };

  // Slider settings for second row (right to left, RTL)
  const settingsRTL = {
    ...settingsLTR, // Copy all the settings from the first row
    rtl: true, // Enable right-to-left scrolling
  };

  return (
    <div className="mt-[100px] w-full m-auto">
      <div className="text-center">
        <div className="font-semibold text-5xl poppins-font cyan-blue">
          {componentData.titleLeftPart} <span className="light-blue">{componentData.titleRightPart}</span>
        </div>
        <div className="inter-font text-xl max-w-[490px] m-[auto] font-medium my-2">
          {componentData.description}
        </div>
      </div>

      <motion.div ref={viewRef} className="my-[100px]">
        {/* First row (left to right) */}
        <Slider ref={firstRowRef} {...settingsLTR}>
          {firstRow.length > 0 ? (
            firstRow.map((logo, idx) => (
              <div key={idx} className="px-2">
                <img
                  src={logo.attributes.url} // Ensure this URL is valid
                  alt={logo.attributes.alternativeText || "Logo"} // Fallback text
                  title={logo.attributes.caption || ""}
                  className="w-full h-auto"
                />
              </div>
            ))
          ) : (
            ""
          )}
        </Slider>

        {/* Second row (right to left) */}
        <Slider ref={secondRowRef} {...settingsRTL}>
          {secondRow.length > 0 ? (
            secondRow.map((logo, idx) => (
              <div key={idx} className="px-2">
                <img
                  src={logo.attributes.url} // Ensure this URL is valid
                  alt={logo.attributes.alternativeText || "Logo"} // Fallback text
                  title={logo.attributes.caption || ""}
                  className="w-full h-auto"
                />
              </div>
            ))
          ) : (
            ""
          )}
        </Slider>
      </motion.div>
    </div>
  );
}
