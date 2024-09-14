"use client"
import React from 'react'
import { motion, useInView } from "framer-motion";
import { useRef } from "react"

export default function TextCover() {

  const showUpRef = useRef(null)
  const isInView = useInView(showUpRef, { once: true })

  return (
    <motion.div
      className="absolute bg-white opacity-80"
      initial={{ width: '95%', opacity: 0.8 }}
      animate={{
        width: isInView ? '0%' : '95%',
        opacity: isInView ? 0.2 : 0.8
      }}
      ref={showUpRef}
      transition={{ duration: 2, ease: "easeInOut" }}
      style={{ height: '100%' }}
    >
    </motion.div>
  )
}
