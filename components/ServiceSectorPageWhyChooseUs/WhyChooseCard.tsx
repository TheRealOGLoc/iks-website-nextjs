"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react";


interface WhyChooseCardProps {
  image: any,
  title: string,
  index: number,
  text: string
}
export default function WhyChooseCard({ image, title, text, index }: WhyChooseCardProps) {

  const showUpRef = useRef(null)
  const isInView = useInView(showUpRef, { once: true })
  const delayTime = (index + 1) * 0.2


  return (
    <motion.div
      ref={showUpRef}
      initial={{ opacity: 0.5 }}
      animate={{
        opacity: isInView ? 1 : 0.5,

      }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: delayTime }}
      className="inter-font bg-gray-600 md:hover:bg-gray-500 md:transition mx-3 my-2 p-7 rounded-md text-center max-w-[390px] text-white">
      <img className="w-[49px] m-[auto] " src={image.icon.data.attributes.url} alt={image.icon.data.attributes.alternativeText} title={image.icon.data.attributes.caption} />
      <div className="font-bold my-2">{title}</div>
      <div>{text}</div>
    </motion.div>
  )
}
