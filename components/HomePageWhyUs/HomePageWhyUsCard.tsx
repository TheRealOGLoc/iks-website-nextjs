"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface HomePageWhyUsCardProps {
  image: any;
  title: string;
  text: string;
  index: number;
}

export default function HomePageWhyUsCard({
  image,
  title,
  text,
  index,
}: HomePageWhyUsCardProps) {
  const showUpRef = useRef(null);
  const isInView = useInView(showUpRef, { once: true });
  const delayTime = (index + 1) * 0.2;

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0.5 }}
      animate={{
        opacity: isInView ? 1 : 0.5,
      }}
      transition={{ duration: 0.5, delay: delayTime }}
      ref={showUpRef}
      className="inter-font bg-gray-600 md:hover:bg-gray-500 md:transition p-5 md:p-7 rounded-md text-center text-white"
    >
      <img
        className="w-[49px] m-auto"
        src={image.icon.data.attributes.url}
        alt={image.icon.data.attributes.alternativeText}
        title={image.icon.data.attributes.caption}
      />
      <div className="font-bold my-2">{title}</div>
      <div>{text}</div>
    </motion.div>
  );
}
