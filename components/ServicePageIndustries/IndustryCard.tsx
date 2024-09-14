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
      initial={{ opacity: 0.4 }}
      animate={{
        opacity: isInView ? 1 : 0.4,
      }}
      transition={{
        duration: 0.7,
        delay: delayTime
      }}
      className="mx-auto my-3 md:basis-1/3 shadow-md hover:bg-slate-100 transition hover:shadow-lg max-w-[300px]"
    >
      <img className="max-w-[300px] m-[auto]" src={image.data.attributes.url} alt={image.data.attributes.alternativeText} title={image.data.attributes.caption} />
      <div className="p-5">
        <div className="my-3 font-semibold">{title}</div>
        <div className="text-sm font-light">{description}</div>
      </div>
    </motion.div>

  )
}
