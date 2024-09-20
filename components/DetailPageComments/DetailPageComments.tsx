"use client"
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { GetComments } from '@/utilities/get-components-data'

export default function DetailPageComments() {
  
  const typeAndSlug = usePathname().split("/")
  const type = typeAndSlug[1]
  const slug = typeAndSlug[2]
  const [comments, setComments] = useState([])

  useEffect(() => {
    async function getComments() {
      const response = await GetComments(type, slug)
      setComments(response)
    }
    getComments()
  }, [])

  return (
    <div>
      
    </div>
  )
}
