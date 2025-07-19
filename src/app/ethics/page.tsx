'use client'
import React,{useEffect, useState} from 'react'
import { X,ArrowLeft,Loader } from 'lucide-react';
import { useRouter } from "next/navigation";
function Page() {
const router=useRouter()




  return (
    <main className={`w-[100%]`}>
 

      <div className='w-12 aspect-square lg:w-12 bg-black rounded-full absolute top-4 left-4 justify-center items-center text-white flex ' onClick={handleClick}>
   <ArrowLeft/>
</div>


      

     





    


  
    </main>
  )
}

export default Page