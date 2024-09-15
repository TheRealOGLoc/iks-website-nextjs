"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import { ShareSocial } from "react-share-social"

export default function DetailPageShareButton() {
  const pathName = process.env.WEBSITE_URL + usePathname()
  const style = {
    root: {
      padding: 0,
      margin: 0
    },
    copyContainer: {
      display: 'none'
    },
    iconContainer: {
      padding: 0
    }
  }
  return (
    <div className='my-5'>
      <div className='font-bold md:text-lg ml-1'>Share this post</div>
      <ShareSocial url={pathName} style={style} socialTypes={['linkedin', 'twitter', 'facebook']} />
    </div>

  )
}
