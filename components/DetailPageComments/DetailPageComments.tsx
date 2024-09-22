"use client"
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { GetComments } from '@/utilities/get-components-data'
import { formatCommentData } from '@/utilities/format-data'
import Avatar from "@/public/logo/avatar.png"
import Image from 'next/image'

export default function DetailPageComments() {

  const typeAndSlug = usePathname().split("/")
  const type = typeAndSlug[1]
  const slug = typeAndSlug[2]
  const [comments, setComments] = useState<[] | null>(null)

  useEffect(() => {
    async function getComments() {
      const response = await GetComments(type, slug)
      console.log(response)
      setComments(response)
    }
    getComments()
  }, [])

  return (
    comments && comments.length !== 0 && <div className='poppins-font p-1 mt-9'>
      <div className='font-semibold text-2xl'>Comments</div>
      <div className='w-full h-[0.1px] bg-gray-500 my-5'></div>
      {
        comments && comments.map((comment: any, index) =>
          <div className='flex my-3 mb-7' key={index} >
            <img src="" alt="" />
              <Image 
                src={Avatar} 
                className='w-[50px] h-[50px]' 
                alt={'Avatar'}
              />
            <div className='poppins-font px-3'>
              <div className='mb-2'>
                <div className='font-medium text-xl'>{comment.attributes.name}</div>
                <div className='text-gray-600' >{formatCommentData(comment.attributes.publishedAt)}</div>
              </div>
              <div>{comment.attributes.comment}</div>
            </div>
          </div>
        )
      }
      <div className='w-full h-[0.5px] bg-gray-500 mt-2'></div>
    </div>
  )
}
