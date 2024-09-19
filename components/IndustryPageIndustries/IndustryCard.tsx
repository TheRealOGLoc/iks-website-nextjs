"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react";
import Link from "next/link"

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
  },
  showButton: boolean,
  buttonText: string,
  buttonUrl: string
}

export default function IndustryCard({ title, description, image, showButton, buttonUrl, buttonText, index }: IndustryCardProps) {

  const showUpRef = useRef(null)
  const isInView = useInView(showUpRef, { once: true })
  const delayTime = (index + 1) * 0.2

  return (
    <div
      className="mx-auto md:basis-1/3 my-3 text-left shadow-md md:hover:bg-slate-100 md:transition md:hover:shadow-lg max-w-[480px] min-h-[580px] relative">
      <img className="m-[auto]" src={image.data.attributes.url} alt={image.data.attributes.alternativeText} title={image.data.attributes.caption} />
      <motion.div
        ref={showUpRef}
        initial={{ y: 15, opacity: 0.3 }}
        animate={{
          y: isInView ? 0 : 15,
          opacity: isInView ? 1 : 0.3,
        }}
        transition={{
          duration: 0.7,
          delay: delayTime
        }}
        className="p-5">
        <div className="my-3 font-semibold md:text-lg text-center">{title}</div>
        <div className="text-sm font-light mb-2 description-justify">{description}</div>

      </motion.div>
      {
        showButton &&
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <Link className="block mx-auto rounded-full p-3 h-12 text-white bg-blue hover:shadow-lg hover:bg-[#70B9DF] no-underline hover:underline-offset-4 hover:underline transition duration-200 text-base font-semibold" href={buttonUrl}>
            {buttonText}
          </Link>
        </div>
      }
    </div>

  )
}
