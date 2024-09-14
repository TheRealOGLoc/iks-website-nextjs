"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react";

interface SolutionCardProps {
  title: string,
  description: string,
  index: number,
  icon: any
}

export default function SolutionCard({ title, description, icon, index }: SolutionCardProps) {

  const showUpRef = useRef(null)
  const isInView = useInView(showUpRef, { once: true })
  const delayTime = (index + 1) * 0.1


  return (
    <motion.div
      ref={showUpRef}
      initial={{ opacity: 0.5 }}
      animate={{
        opacity: isInView ? 1 : 0.5,

      }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: delayTime }}
      className="my-2 text-white basis-1/3 max-w-[350px] text-center inter-font p-5 rounded-lg border-[1px] bg-gray-600 hover:bg-gray-500 transition">
      <img className="w-[49px] m-[auto]" src={icon.data.attributes.url} alt={icon.data.attributes.alternativeText} title={icon.data.attributes.caption} />
      <div className="my-3 font-semibold">{title}</div>
      <div>{description}</div>
    </motion.div>
  )
}


