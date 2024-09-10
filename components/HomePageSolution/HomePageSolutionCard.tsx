"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface HomePageSolutionCardProps {
  image: string,
  text: string,
  index: number
}

export default function HomePageSolutionCard({image, text, index}: HomePageSolutionCardProps) {
  
  const showUpRef = useRef(null)
  const isInView = useInView(showUpRef, { once: true })
  const delayTime = (index + 1) * 0.2

  return (
    <motion.div 
      className="inter-font text-center m-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: isInView ? 1 : 0, 
        y: isInView ? 0 : 50
      }}
      transition={{ duration: 0.7, delay: delayTime }}
      ref={ showUpRef }
      >
      <img className="w-[64px] m-[auto]" src={image} alt="img" />
      <div className="max-w-[280px] mt-7 cyan-blue" >{text}</div>
    </motion.div>
  )
}
