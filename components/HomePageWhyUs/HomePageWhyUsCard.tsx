interface HomePageWhyUsCardProps {
  image: any;
  title: string;
  text: string;
}

export default function HomePageWhyUsCard({ image, title, text }: HomePageWhyUsCardProps) {
  console.log(image)
  return (
    <div className="inter-font bg-gray-600 hover:bg-gray-500 transition mx-2 my-2 p-5 md:p-7 rounded-md text-center w-[calc(50%-1rem)] md:w-[390px] text-white">
      <img className="w-[49px] m-auto" src={image.icon.data.attributes.url} alt={image.icon.data.attributes.alternativeText} title={image.icon.data.attributes.caption} />
      <div className="font-bold my-2">{title}</div>
      <div>{text}</div>
    </div>
  );
}