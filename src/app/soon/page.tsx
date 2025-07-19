'use client'

import React,{useState} from 'react'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import styles from "./page.module.css";
import { WaitList } from '../reusable-components/special/special'

function ComingSoonPage() {
  const router = useRouter()
  const [waitShown,setWaitShown] =useState<boolean>(false)

  const handleBack = () => {
    router.back()
  }

  return (
    <main className={`w-full min-h-screen flex flex-col items-center justify-center relative bg-[--clr--primary-1] overflow-hidden ${styles.imageCover}`}>
      {
        waitShown && (
          <>
          <WaitList  setIsModalShown={setWaitShown}/>
          </>
        )
       }
      
      
      {/* Back Button */}
      <div
        className="w-12 h-12 lg:w-12 bg-black rounded-full absolute top-4 z-1 left-4 flex justify-center text-white items-center cursor-pointer"
        onClick={handleBack}
      >
        <ArrowLeft size={20} />
      </div>

        

        <h1 className='text-4xl md:text-6xl font-bold text-black text-center'>Coming Soon</h1>
        <p className='text-lg md:text-2xl font-bold !my-8 text-black text-center'>Our website is under contruction</p>

        <div className='flex-col sm:flex-row flex items-center w-[100%] justify-center'>

          <div className='min-w-[150px] txt-2xl text-white bg-black justify-center items-center flex !my-2  !mx-5 h-[50px]' onClick={()=>setWaitShown(true)}>
               Join Wait List
          </div>
          <div className='min-w-[150px] txt-2xl text-white bg-black justify-center items-center flex  !my-2  !mx-5 h-[50px]' onClick={()=>router.push('/pricing')}>
               Get Demo
          </div>

        </div>

    </main>
  )
}

export default ComingSoonPage
