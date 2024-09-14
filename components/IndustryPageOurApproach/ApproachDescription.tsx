"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ApproachDescription {
  componentData: {
    description: string
  }
}

export default function ApproachDescription({componentData}: ApproachDescription) {
  const text = componentData.description.split(" ");
  const showUpRef = useRef(null);
  const isInView = useInView(showUpRef, { once: true }); // Trigger animation once when in view

  return (
    <div ref={showUpRef} className="max-w-[900px] my-5 m-[auto] text-lg font-medium text-gray-600">
      {text.map((el, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}} // Animate when in view
          transition={{
            duration: 0.1,
            delay: i / 30,
          }}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
  )
}
