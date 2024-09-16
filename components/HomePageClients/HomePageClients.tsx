"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


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

  // Slider settings for first row (left to right)
  const settingsLTR = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Default for desktop (5 logos per row)
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Slide every 3 seconds
    responsive: [
      {
        breakpoint: 768, // For mobile view
        settings: {
          slidesToShow: 4, // Show 4 logos per row on mobile
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024, // For tablet and desktop view
        settings: {
          slidesToShow: 5, // 5 logos per row for tablet and desktop
          slidesToScroll: 1,
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
    <div className="mt-[100px] max-w-[1200px] m-auto">
      <div className="text-center">
        <div className="font-semibold text-5xl poppins-font cyan-blue">
          {componentData.titleLeftPart} <span className="light-blue">{componentData.titleRightPart}</span>
        </div>
        <div className="inter-font text-xl max-w-[490px] m-[auto] font-medium my-2">
          {componentData.description}
        </div>
      </div>

      <div className="my-[100px]">
        {/* First row (left to right) */}
        <Slider {...settingsLTR}>
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
            <p>No logos to display</p>
          )}
        </Slider>

        {/* Second row (right to left) */}
        <Slider {...settingsRTL}>
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
            <p>No logos to display</p>
          )}
        </Slider>
      </div>
    </div>
  );
}