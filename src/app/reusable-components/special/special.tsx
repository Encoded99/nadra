'use client'
import React, { useState, Dispatch, SetStateAction } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { X,ArrowLeft,Loader } from 'lucide-react';
import { SubmitBtn,SubmitButtonType } from '../element/element';

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





export const WaitList=({setIsModalShown}:{ setIsModalShown:Dispatch<SetStateAction<boolean>>})=>{
const [isLoaded,setIsLoaded]=useState<boolean>(false)


  

 const handleParentPress = () => {
  setIsModalShown(false)
  };
const handleChildClick = (e:React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Prevent event from reaching the parent
   
  };










  return (
    <>
    <div className={`fixed inset-0 justify-center items-center ${styles.toggleLinkContainerOverLayTally}`} >

      

      

       <div className={` w-[100%]  h-[100%]  bg-white relative`} onClick={handleChildClick}>

<div className='w-12 aspect-square lg:w-12 bg-black rounded-full absolute top-4 left-4 justify-center items-center text-white flex ' onClick={handleParentPress}>
   <ArrowLeft/>
</div>


{
  !isLoaded && (
    <>
    <div className='w-[100%] h-[100%] flex justify-center items-center'>

           <Loader className="w-8 aspect-square lg:w-16 animate-spin text-black-700" />

    </div>
    </>
  )
}
<iframe 
  src="https://tally.so/r/nPZ6OP" 
  loading="lazy" 
  width="100%" 
  height="100%" 
  frameBorder="0" 
  marginHeight={0} 
  marginWidth={0}
  title="Nadra Waitlist"
  onLoad={() => setIsLoaded(true)}
  >
</iframe>
       </div>


    </div>
    </>
  )
}
