'use client'
import React, { useState, Dispatch, SetStateAction,useEffect } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { X,ArrowLeft,Loader } from 'lucide-react';
import { SubmitBtn,SubmitButtonType } from '../element/element';
import { useRouter } from "next/navigation";
import { apiUrl } from '@/app/axios';
import axios from 'axios';
import { useFlutterwave } from 'flutterwave-react-v3';
import { useGlobal } from '@/app/context';



import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';


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
export type UnicodeType = '₦' | '£' | '$';
export type CurrencySymbol='USD'|'GBP'|'NGN'
export type SubType= 'Starter'|'Growth' | 'Premium'
 export const PaymentModal=({setIsModalShown,currency,amount,subData,unicode,}:{ setIsModalShown:Dispatch<SetStateAction<boolean>>,
  unicode:UnicodeType,
  currency:CurrencySymbol,amount:number,subData:{name:SubType,instance:"yearly"|"monthly",}})=>{
const [isLoading,setIsLoading]=useState<boolean>(false)
const [congrat,setCongrat]=useState<boolean>(false)
const [tranctionId,setTransactionId]=useState<number>(0)
const [isError,setIsError,]=useState<boolean>(false)
const {fetchExchange}=useGlobal()
 type DataType={
  name:string,

  email:string,
  telephone:string,
 }
  const [data,setData]=useState<DataType>({name:"",email:"",telephone:""})



  interface ApiDataType{
    name:string,
    email:string,
    amount:number,
    currency:CurrencySymbol,
    subData:{
      instance:string,
      name:SubType
    },
    transactionId:number

  }


const ConfirmTransaction=async(params:number)=>{



if (!data.email){
  alert('please input email')

  return 
}

   setIsLoading(true)
  setCongrat(false)
  setIsError(false)
 
  try{
     const finalData:ApiDataType={
      name:data.name ,
      email:data.email,
      amount:amount,
      currency:currency,
      subData,
      transactionId:params,

     }


   const url=`${apiUrl}/users/verify-payment`

   
   const  response= axios.post(url,finalData)
    setCongrat(true)

  }

  catch(err){
   setIsError(true)
    console.log(err,'error-verifying-payment ')

  }
 finally{
  setIsLoading(false)
 }
 
}

const test='FLWPUBK_TEST-fa552273724bac895462e40c8519e7c3-X'
const live='FLWPUBK-1d1d4ec075e70dd70e69340b3d4a216e-X'

const ref=`${data.email}${Date.now().toString()}` 


   const config = {
    public_key:live,
    tx_ref: ref,
    amount: amount,
    currency: currency,
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: data.email,
      name: data.name,
       phone_number:data.telephone,
    },
    customizations: {
      title: 'Nadra Demo Subscription',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

 














 const handleParentPress = () => {
  setIsModalShown(false)
  };
const handleChildClick = (e:React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Prevent event from reaching the parent
   
  };


  




const handleFlutterPayment = useFlutterwave(config);

const handlePaymentClick = async () => {
  await fetchExchange()
  if (!data.email) {
    alert('please enter an email');
    return;
  }
setIsLoading(true)
  handleFlutterPayment({
    callback: async (response) => {
      console.log(response, 'response from this');

      if (response.status === 'successful') {
       
        setTransactionId(response.transaction_id)
        await ConfirmTransaction(response.transaction_id);
      }

      closePaymentModal(); // ✅ Close modal programmatically
    },
    onClose: () => {
      console.log("Modal closed");
    },
  });
};



  const buttonData:SubmitButtonType={
    text:'Submit',
    type:'normal',
    trigger:handlePaymentClick

  }

  const contactSupport=()=>{

  }



  return (
    <>
    <div className={`fixed inset-0 justify-center items-center ${styles.toggleLinkContainerOverLay}`} onClick={handleParentPress}>



   {
        isLoading && (
          <>
          <div  style={{backgroundColor:"rgba(0, 0, 0, 0.7)"}}   className='absolute top-[0%] left-[0%] z-3 w-[100%] h-[100%] justify-center flex items-center bg-amber-100'>
<Loader style={{color:"#CD4E5E"}} className="w-24 h-24 animate-spin text-white-700" />

          </div>
          
          </>
        )
      }



       <div className={` md:w-[80%] lg:w-[50%]  h-auto flex justify-around items-center rounded-2xl ${styles.waitListModal}`}  onClick={handleChildClick}>





{
  congrat && (
    <>





<div className="w-full flex flex-col items-center justify-start h-auto  !p-4">

  

    {/* Message Section */}
    <div className="w-full flex flex-col items-center justify-start mt-6">
      <div className="text-2xl font-bold text-[#CD4E5E] !mb-4">Thank You!</div>

      <div className="text-gray-700 px-6 text-center !mb-4">
      Your subscription was successful. We're glad to have you on board!
      </div>

      <div className="flex gap-3 !mb-4">
        <button
          onClick={() =>  setIsModalShown(false)}
          className="bg-[#CD4E5E] hover:bg-[#b93e4d] text-white font-semibold !py-2 !px-6 rounded-lg transition min-w-[30%] min-h-[40px] "
        >
          Okay
        </button>

        
      </div>
    </div>
  </div>






    
    </>
  )
}




{
  isError && (
    <>
      <div className="w-full flex flex-col items-center justify-start h-auto  !p-4">

  

    {/* Message Section */}
    <div className="w-full flex flex-col items-center justify-start mt-6">
      <div className="text-2xl font-bold text-[#CD4E5E] !mb-4">Hold On...</div>

      <div className="text-gray-700 px-6 text-center !mb-4">
        We're having trouble confirming your payment at the moment.
        <br />
        If your payment was successful, it will reflect shortly.
        <br />
        You can also try again or contact support.
      </div>

      <div className="flex flex-col sm:flex-row gap-3 !mb-4">
  <button
    onClick={() => ConfirmTransaction(tranctionId)}
    className="bg-[#CD4E5E] hover:bg-[#b93e4d] text-white font-semibold !py-2 !px-6 rounded-lg transition min-w-[30%] min-h-[40px] w-full sm:w-auto"
  >
    Try Again
  </button>

  <button
    onClick={() => contactSupport()}
    className="border border-[#CD4E5E] text-[#CD4E5E] hover:bg-[#f9d7db] font-semibold !py-2 !px-6 rounded-lg transition min-w-[30%] min-h-[40px] w-full sm:w-auto"
  >
    Contact Support
  </button>
</div>

    </div>
  </div>
    </>
  )
}




{
  !congrat && !isError && (
    <>
    
        <div className={`w-[50%]  relative h-auto ${styles.leftImageContainer}` }>
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
                        <h3  style={{color:'#CD4E5E'}} className='font-bold text-xl !mb-auto'>Subscribe</h3>
                     <div className='text-start w-[100%]'>
                           <p  style={{color:'grey'}} className=' text-md !mb-auto font-bold'> <span style={{color:'#CD4E5E'}}>Plan:</span> {subData.name} </p>
                        </div>
                        <div className='text-start w-[100%]'>
                           <p  style={{color:'grey'}} className=' text-md !mb-auto font-bold'> <span style={{color:'#CD4E5E'}}>Duration:</span> {subData.instance[0].toUpperCase()}{subData.instance.slice(1,subData.instance.length).toLowerCase()} </p>
                        </div>
                        <div className='text-start w-[100%]'>
                           <p  style={{color:'grey'}} className=' text-md !mb-auto font-bold'> <span style={{color:'#CD4E5E'}}>Amount:</span> {unicode}{amount.toLocaleString()} </p>
                        </div>


                        <p  style={{color:'grey'}} className=' text-sm !mb-2'>Kindly input your details to subscribe for demo </p>
                        
                        <label className='font-bold text-4 !my-[2%]'>Name</label>
                        <input  className={`${styles.waitListInput} w-[100%] h-10`}  onChange={(e)=>setData((prev)=>({...prev,name:e.target.value}))} name='text'></input>

                         <label className='font-bold text-4 !my-[2%]'>* Email</label>
                        <input  className={`${styles.waitListInput} w-[100%] h-10`}  onChange={(e)=>setData((prev)=>({...prev,email:e.target.value}))} name='text'></input>
                       <div  className='w-[100%] !my-[6%]'>
                         <SubmitBtn data={buttonData}/>
                       </div>
                        

            </div>
        
        </div>

    </>
  )
}




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



export const CalendlyWidget =({setIsModalShown}:{setIsModalShown:Dispatch<SetStateAction<boolean>>})=>{
 useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);




 const handleParentPress = () => {
  setIsModalShown(false)
  };




const handleChildClick = (e:React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Prevent event from reaching the parent
   
  };








  return (

    <>
    
     <div className={`fixed inset-0 justify-center items-center ${styles.toggleLinkContainerOverLayTally}`} >
 <div className={` w-[100%]  h-[100%]  bg-white relative`} onClick={handleChildClick}
 
 >
<div className='w-12 aspect-square lg:w-12 bg-black rounded-full absolute top-4 left-4 justify-center items-center text-white flex ' onClick={handleParentPress}>
   <ArrowLeft/>
</div>

<div
      className="calendly-inline-widget"
      data-url="https://calendly.com/YOUR_USERNAME/YOUR_EVENT"
      style={{ width: "100%", height: "100%" }}
    >



    </div>


 </div>
     
    </div>
    </>
   
  );


}


