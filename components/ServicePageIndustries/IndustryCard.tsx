"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react";

interface IndustryCardProps {
  title: string,
  description: string,
  index: number,
  image: {
    data: {
      attributes: {
        url: string,
        alternativeText: string,
        caption: string
      }
    }
  }
}

export default function IndustryCard({ title, description, image, index }: IndustryCardProps) {

  const showUpRef = useRef(null)
  const isInView = useInView(showUpRef, { once: true })
  const delayTime = (index + 1) * 0.3

  return (
    <motion.div
  ref={showUpRef}
  initial={{ opacity: 0.4}}
  animate={{
    opacity: isInView ? 1 : 0.4,
  }}
  transition={{
    duration: 0.7,
    delay: delayTime
  }}
  className="mx-auto my-3 md:basis-1/3 p-5 text-center bg-gray-500 hover:bg-gray-700 transition text-white hover:text-gray-200 max-w-[300px]"
>
  <img className="max-w-[230px] m-[auto] mt-5" src={image.data.attributes.url} alt={image.data.attributes.alternativeText} title={image.data.attributes.caption} />
  <div className="my-3 font-semibold">{title}</div>
  <div className="text-sm font-light">{description}</div>
</motion.div>

  )
}
