"use client"
import { useEffect, useRef } from "react";
import { useCountUp } from "react-countup"
import { motion, useInView } from "framer-motion";

interface HomePageNumbersCardProps {
  data: number,
  title: string,
  plusSign: boolean
}

export default function HomePageNumbersCard({ data, title, plusSign }: HomePageNumbersCardProps) {

  const showUpRef = useRef(null)
  const countUpRef = useRef(null);
  const isInView = useInView(showUpRef, { once: true })
  const { start } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: data,
    delay: 0,
    duration: 4,
    separator: ""
  });

  useEffect(() => {
    if (isInView) {
      start()
    }
  }, [isInView])


  return (
    <motion.div
      className="w-[350px] md:w-[300px] text-center border-solid border-slate-150 rounded-lg border-[1px] shadow-lg mx-auto my-2 md:m-2 p-5 md:hover:scale-105 md:transition md:ease-in-out"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      ref={showUpRef}
    >
      <div className="poppins-font text-3xl font-semibold light-blue">
        <span ref={countUpRef} />
        <span>{plusSign ? "+" : ""}</span>
      </div>
      <div className="poppins-font font-semibold">{title}</div>
    </motion.div>
  );
}
