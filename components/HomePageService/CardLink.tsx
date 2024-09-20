"use client"
import React, { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

interface CardLink {
  buttonText: string;
  buttonUrl: string
}

export default function CardLink({ buttonText, buttonUrl }: CardLink) {

  const showUpRef = useRef(null)
  const isInView = useInView(showUpRef, { once: true })

  return (
    <div className='relative'>
      <motion.div 
        ref={showUpRef} 
        className='absolute bg-white h-[50px] top-[-10px]'
        initial={{width: 120, height: 50}}
        animate={{
          width: isInView ? 0 : 120,
          height: isInView ? 50 : 50}}
        transition={{
          duration: 0.6,
          delay: 0.3}}
        ></motion.div>
      <Link href={`/services/${buttonUrl}`} className="text-white poppins-font font-bold bg-light-blue hover:bg-blue-600 transition text-sm p-3">{buttonText}</Link>
    </div>
  )
}
