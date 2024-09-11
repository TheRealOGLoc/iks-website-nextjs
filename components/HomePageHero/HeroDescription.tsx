"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

interface HeroDescriptionProps {
  componentData: {
    description: string,
    mobileViewDescription: string
  }
}

export default function HeroDescription({ componentData }: HeroDescriptionProps) {
  return (
    <div className='h-[100px] md:h-[200px] md:max-w-[95%] text-white'>
      <div className="hidden md:block inter-font text-lg my-6 md:max-w-lg md:my-10">
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            "",
            0,
            componentData.description,
          ]}
          speed={85}
        />
      </div>
      {
        componentData.mobileViewDescription &&
        <div className="block md:hidden inter-font text-lg my-10 md:max-w-lg md:my-10">
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              "",
              0,
              componentData.mobileViewDescription,
            ]}
            speed={75}
          />
        </div>
      }
    </div>
  )
}
