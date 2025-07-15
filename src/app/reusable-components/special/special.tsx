'use client'
import React from 'react'

import Image from 'next/image'


export const Logo=({width,height}:{width:string,height:string})=>{



  return (
    <>
      <div className={`h-${height} w-${width} relative`}>
 <Image
      alt='production'
       src="/images/24e4e505e38beb6cf65fc7a6db6cbac828afffdb.png"
         fill
    
      />
      </div>
    </>
  )
}
