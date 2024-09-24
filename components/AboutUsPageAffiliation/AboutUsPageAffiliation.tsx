"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    pauseOnHover: true,
    slidesToShow: 1, // Default for desktop (5 logos per row)
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768, // For mobile view
        settings: {
          slidesToShow: 1, // Show 4 logos per row on mobile
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="my-10">
      <div className="text-center light-blue inter-font">
        <div className="poppins-font font-bold text-4xl">{componentData.title}</div>
        <div className="max-w-[450px] m-auto my-2">{componentData.description}</div>
      </div>
      <div className="max-w-[500px] m-auto">
        <Slider {...settings} >
          { images.length > 0 ? (
            images.map((image: any, idx: number) => (
              <div key={idx} className="overflow-hidden" >
                <div className="poppins-font text-xl font-semibold text-center my-3" >{image.attributes.caption}</div>
                <img 
                src={image.attributes.url} 
                alt={image.attributes.alternativeText || "image" } 
                title={image.attributes.caption || ""}
                className="m-auto w-[300px]"
                />
              </div>
            ))
          ) :  ""}
        </Slider>
      </div>
    </div>
  )
}
