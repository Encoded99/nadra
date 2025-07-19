'use client'
import React,{useState} from 'react'
import styles from './page.module.css'
import { Loader } from "lucide-react";


export interface SubmitButtonType{
 text:string,
 trigger:()=>void,
 type?:'neutral' | 'danger'|'normal'
}


export const SubmitBtn=({ data }: { data: SubmitButtonType })=>{

  const { text, trigger,  } = data;

  const [loading, setLoading] = useState<boolean>(false);

  const handlePress = async () => {
    try {
      setLoading(true);
      // In case trigger is not async, wrap it in Promise.resolve
      await Promise.resolve(trigger());
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };




  return (
    <>

    <div  className={`w-[100%] h-10 ${styles.submitBtn}`} onClick={handlePress}>
      {
        loading && (
          <>
          <Loader className="w-5 h-5 animate-spin text-white-700" />
          </>
        )
      }
      {
        !loading && (
          <>
         {text}
          </>
        )
      }

    </div>
    
    </>
  )
}


