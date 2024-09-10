interface HomePageWhyUsCardProps {
  image: string;
  title: string;
  text: string;
}

export default function HomePageWhyUsCard({ image, title, text }: HomePageWhyUsCardProps) {
  return (
    <div className="inter-font bg-gray-600 hover:bg-gray-500 transition mx-2 my-2 p-5 md:p-7 rounded-md text-center w-[calc(50%-1rem)] md:w-[390px] text-white">
      <img className="w-[49px] m-auto" src={image} alt="CardImage" />
      <div className="font-bold my-2">{title}</div>
      <div>{text}</div>
    </div>
  );
}