"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface AlignDescriptionProps {
  componentData: {
    description: string
  }
}

export default function AlignDescription({ componentData }: AlignDescriptionProps) {
  const text = componentData.description.split(" ");
  const showUpRef = useRef(null);
  const isInView = useInView(showUpRef, { once: true }); // Trigger animation once when in view

  return (
    <div ref={showUpRef} className="inter-font text-xl max-w-[1000px] m-[auto] font-medium my-2">
      {text.map((el, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}} // Animate when in view
          transition={{
            duration: 0.2,
            delay: i / 10,
          }}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
  )
}
