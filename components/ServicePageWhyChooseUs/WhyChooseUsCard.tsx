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
      initial={{ opacity: 0.1, y: 50 }}
      animate={{
        opacity: isInView ? 1 : 0.1,
        y: isInView ? 0 : 50
      }}
      transition={{ duration: 0.7, delay: delayTime }}
      ref={showUpRef}
      className="basis-1/3 max-w-[350px] text-center inter-font p-5 rounded-lg border-[1px] border-gray-100 my-3 md:my-0">
      <img className="w-[49px] m-[auto]" src={icon.data.attributes.url} alt={icon.data.attributes.alternativeText} title={icon.data.attributes.caption} />
      <div className="my-3 font-semibold">{title}</div>
      <div>{description}</div>
    </motion.div>
  )
}
