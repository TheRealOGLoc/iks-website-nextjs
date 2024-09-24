"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface WhyChooseUsCardProps {
  title: string,
  description: string,
  icon: any,
  index: number
}

export default function WhyChooseUsCard({ title, description, icon, index }: WhyChooseUsCardProps) {

  const showUpRef = useRef(null)
  const isInView = useInView(showUpRef, { once: true })
  const delayTime = (index + 1) * 0.2

  return (
    <motion.div
      initial={{ opacity: 0.1 }}
      animate={{
        opacity: isInView ? 1 : 0.1,
      }}
      transition={{ duration: 0.7, delay: delayTime }}
      ref={showUpRef}
      className="inter-font bg-gray-600 md:hover:bg-gray-500 md:transition mx-3 my-2 p-7 rounded-md text-center max-w-[390px] text-white">
      <img className="w-[49px] m-[auto] " src={icon.data.attributes.url} alt={icon.data.attributes.alternativeText} title={icon.data.attributes.caption} />
      <div className="font-bold my-2">{title}</div>
      <div>{description}</div>
    </motion.div>
  )
}
