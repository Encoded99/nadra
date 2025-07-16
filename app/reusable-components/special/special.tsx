'use client'
import React, { useState, Dispatch, SetStateAction } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { X,ArrowLeft,Loader } from 'lucide-react';
import { SubmitBtn,SubmitButtonType } from '../element/element';
import { useRouter } from "next/navigation";
export const Logo=({width,height}:{width:string,height:string})=>{
const router=useRouter()


  return (
    <>
      <div className={`h-${height} w-${width} relative`}>
 <Image
      alt='production'
       src="/images/24e4e505e38beb6cf65fc7a6db6cbac828afffdb.png"
         fill
     onClick={()=>router.push('/')}
      />
      </div>
    </>
  )
}



 const WaitListo=({setIsModalShown}:{ setIsModalShown:Dispatch<SetStateAction<boolean>>})=>{


 type DataType={
  firstName:string,
  lastName:string,
  email:string
 }
  const [data,setData]=useState<DataType>({firstName:"",lastName:"",email:""})


const handleSubmit=()=>{

  console.log(data,'data-sent ')
}

  const buttonData:SubmitButtonType={
    text:'Submit',
    type:'normal',
    trigger:handleSubmit

  }

 const handleParentPress = () => {
  setIsModalShown(false)
  };
const handleChildClick = (e:React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Prevent event from reaching the parent
   
  };







  return (
    <>
    <div className={`fixed inset-0 justify-center items-center ${styles.toggleLinkContainerOverLay}`} onClick={handleParentPress}>

       <div className={` md:w-[80%] lg:w-[50%]  h-[80%] flex justify-around items-center rounded-2xl ${styles.waitListModal}`} onClick={handleChildClick}>
        <div className={`w-[50%]  relative h-[100%] ${styles.leftImageContainer}` }>
             <Image
             className='rounded-tl-2xl rounded-bl-2xl'
      alt='production'
       src="/images/7104bb31ac4e5c21464ab5e113e548e5c014fd08(1).jpg"
         fill
    
      />
        </div>

           <div className={`w-[50%] h-[100%]  !p-4 md:!p-6 ${styles.rightContainer}` }>
            <div className='flex w-[100%] justify-end'>
                <X onClick={()=>setIsModalShown(false)}/>

            </div>
            <div className='flex-1 flex items-center flex-col'>
                        <h3  style={{color:'#CD4E5E'}} className='font-bold text-xl !mb-8'>Join Our Wait List</h3>
                        <label className='font-bold text-4 !my-[2%]'>First Name</label>
                        <input  className={`${styles.waitListInput} w-[100%] h-10`}  onChange={(e)=>setData((prev)=>({...prev,firstName:e.target.value}))} name='text'></input>

                          <label className='font-bold text-4 !my-[2%]'>Last Name</label>
                        <input  className={`${styles.waitListInput} w-[100%] h-10`}  onChange={(e)=>setData((prev)=>({...prev,lastName:e.target.value}))} name='text'></input>

                         <label className='font-bold text-4 !my-[2%]'>Email</label>
                        <input  className={`${styles.waitListInput} w-[100%] h-10`}  onChange={(e)=>setData((prev)=>({...prev,email:e.target.value}))} name='text'></input>
                       <div  className='w-[100%] !my-[6%]'>
                         <SubmitBtn data={buttonData}/>
                       </div>
                        

            </div>
        
        </div>

       </div>


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