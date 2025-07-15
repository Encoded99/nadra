'use client'
import React,{useState} from 'react'
import { WhiteHeader,Footer } from '../reusable-components/header/header'
import styles from './page.module.css'
import Image from 'next/image'
import { ChevronDown,Check } from 'lucide-react'

function page() {

const [instance,setInstance]=useState<'monthly'|'yearly'>('monthly')

type FeatureType={
  _id:number,
  text:string
}
type PriceType={

  _id:number,
  title:'EMPOWER'|'PREMIUM' | 'CORE',
  features:FeatureType[],
  previousPrice:number,
  price:number

}
const pricingData:PriceType[]=[

  {
    _id:1,
    title:'CORE',
    features:[
      {
        _id:1,
        text:'Up to 10 product listings'
      },
      {
        _id:2,
        text:'Additional listing packages'
      },
      {
        _id:3,
        text:'No hidden charges'
      },

{
        _id:4,
        text:'Transparent services'
      },
    {
        _id:5,
        text:'Can upgrade anytime'
      },
    
    ],

    previousPrice:150,
    price:120,


    
  },

  
  {
    _id:2,
    title:'EMPOWER',
    features:[
      {
        _id:1,
        text:'Up to 20 product listings'
      },
      {
        _id:2,
        text:'Additional listing packages'
      },
      {
        _id:3,
        text:'Manage & List'
      },
      {
        _id:4,
        text:'No hidden charges'
      },

{
        _id:5,
        text:'Transparent services'
      },
    {
        _id:6,
        text:'Can upgrade anytime'
      },
    
    ],

   
  previousPrice:300,
    price:250,

    
  },

  

  
  {
    _id:2,
    title:'PREMIUM',
    features:[
      {
        _id:1,
        text:'Up to 50 product listings'
      },
      {
        _id:2,
        text:'Sell with confidence'
      },
      
      {
        _id:3,
        text:'No hidden charges'
      },

{
        _id:4,
        text:'Transparent services'
      },
    {
        _id:5,
        text:'Can upgrade anytime'
      },
    
    ],

    previousPrice:550,
    price:500,

    
  }
  
  
]



type ExtraPriceType={

  _id:number,
  title:'EMPOWER'|'PREMIUM' | 'CORE',
  features:FeatureType[],
  price:number

}

const extraPricingData:ExtraPriceType[]=[

  {
    _id:1,
    title:'CORE',
    features:[
      {
        _id:1,
        text:'Available only to Core subscribers'
      },
      {
        _id:2,
        text:'Can list up to 5 additional products'
      },
    
    
    ],

   
    price:0.10,


    
  },

  
  {
    _id:2,
    title:'EMPOWER',
    features:[
      {
        _id:1,
        text:'Available only to Empower subscribers'
      },
      {
        _id:2,
        text:'Can list up to 10 additional products'
      },
   
    
    ],

   
  
    price:0.10,

    
  },

  

  
  
  
  
]





  return (
    <main className={`w-[100%]`}>
     <WhiteHeader/>
     <div className={`w-[100%]   h-8 sm:h-8 md:h-8 lg:h-8 ${styles.firstLine}`}>
Are you ready to take your business to the next level with Nadra?
     </div>
     <div  className={`w-[100%] !py-8      lg:!py-12      sm:h-64  ${styles.secondLine}`}>
      <div className={`${styles.titleHolder} w-60  sm:w-[50%]  md:w-[50%]  lg:w-[40%] !mr-[10%] sm:!mr-4 md:!mr-28 lg:!mr-32`}>
 <h1  className={`text-l sm:text-3xl md:text-4xl lg:text-4xl`}>
        Personalized Payment Plans Curated Just for You!
       </h1>

     <div style={{marginTop:'0px'}} className={`text-[clamp(0.5rem,1.5vw,2rem)] sm:text-[clamp(0.5rem,2vw,3rem)] md:text-[clamp(0.5rem,1.5vw,3rem)] lg:text-[clamp(0.5rem,1.0vw,3rem)] `}>
        Thoughtfully designed payment plans that are tailored to fit your business needs and budget, giving you clarity and confidence in your decision.
    
     </div>

    
      </div>
      
      
   <div  className={`w-20 sm:w-32 md:w-32 lg:w-32   aspect-[1/1] relative `}>
 <Image
     
     src="/images/Group 19.png"
     alt='production'
     fill
     />
   </div>

     </div>


     <div className={`w-[100%]  text-[1rem] md:text-[1.5rem]   ${styles.headerLine}`}>
           <div className={`!mx-[2%] ${instance === 'monthly' ? styles.indicator : ''}`}  onClick={()=>setInstance('monthly')}>
            Monthly
           </div>
            <div className={`!mx-[2%] ${instance === 'yearly' ? styles.indicator : ''}`}  onClick={()=>setInstance('yearly')}>
            Yearly
           </div>
     </div>

     <section className={`w-[100%] !px-[5%]`}>
   
      <div className={`w-[100%]   !mt-16 justify-between flex align-middle`}>
        <div className={`text-xl md:text-2xl lg:text-3xl font-bold`}>
          Our Payment Plans
        </div>

          <div className={`text-4 md:text-8 lg:text-12 ${styles.currency}`}>
          GBP
          <ChevronDown/>
        </div>



      </div>


 <div className={`${styles.pricingContainer}`}>
  
  {
    pricingData.map((item,index)=>{
      return (
        <>
        
    
        <div className={`h-106  rounded-2xl  !py-[4%]   ${styles.pricingCard}`}>
  <div style={{fontWeight:'700'}} className='w-[100%] flex text-black  justify-center items-center h-[10%] text-center'>
      {item.title}
  </div>
 <div style={{backgroundColor:'#553448D9'}} className='w-[100%] text-white   flex justify-center items-center h-[10%] text-center'>
      &#163;<span className='line-through'>{instance==='monthly'?item.previousPrice:item.previousPrice*12}</span>
      <strong className='!ml-[5px] text-lg'>{instance==='monthly'? item.price:item.price*12} {instance==='monthly'?'/ month':"/ year"}</strong>
  </div>

  <div className='w-[100%] !px-[4%] !py-[10%]  flex-col  flex justify-start items-start h-[70%]'>


    {
      item.features.map((feature,index)=>{
        return(
          <>
          <div className='w-[100%]  !my-auto flex-row  flex '>
      <Check/>
      <div className='!ml-[6px] text-sm'>{feature.text}</div>
    </div>
     
          </>
        )
      })
    }

   
  </div>
 
<div className={`flex justify-center w-[70%] !mx-auto !px-[5px] h-[10%] items-center  rounded-lg  ${styles.subBtn}`}>


  {item.title==='PREMIUM'?'Contact Sales':"Subscribe"}
   
  </div>

</div>
    
        </>
      )
    })
  }


 </div>

<div style={{color:'#898989'}} className='text-sm !mb-[32px] !mt-[8vh] '>
  All payment plans are exclusive of other charges, such as VAT and transactions fees. These fees will be collected separately and may vary depending on payment method and the processing country. For more details, please visit support.nadra.ng
</div>




     
  


       
<div  className={`w-[100%] !py-8      lg:!py-12   rounded-xl   sm:h-40 ${styles.bannerLine}`}>
      <div className={`${styles.titleHolder} w-60  sm:w-[50%]  md:w-[50%]  lg:w-[40%] !mr-[10%] sm:!mr-4 md:!mr-28 lg:!mr-32`}>
 <div  className={` sm:text-3xl md:text-4xl lg:text-4xl`}>
       Additional Listing Packages
       </div>

     <div  className={`text-[clamp(0.5rem,1.5vw,2rem)] sm:text-[clamp(0.5rem,2vw,3rem)] md:text-[clamp(0.5rem,1.5vw,3rem)] lg:text-[clamp(0.5rem,1.0vw,3rem)] `}>
       *Exclusive only to Core and Empower members on Nadra*   
    
     </div>

    
      </div>
      
      
   <div  className={` sm:w-36     aspect-[1/1] relative `}>
 <Image
     
     src="/images/speech-bubble.png"
     alt='production'
     fill
     />
   </div>

     </div>
    


 <div className={`w-[100%]   !mt-16 justify-between flex items-start`}>
        <div className={`text-xl md:text-2xl lg:text-3xl font-bold`}>
          Additional Product Listing Packages
        </div>

          <div className={`text-4 md:text-8 lg:text-12 ${styles.currency}`}>
          GBP
          <ChevronDown/>
        </div>



      </div>
       
    




 <div className={`${styles.extraPricingContainer}`}>
  
  {
    extraPricingData.map((item,index)=>{
      return (
        <>
        
    
        <div className={`h-52  rounded-2xl  !py-[4%]   ${styles.extraPricingCard}`}>
  <div style={{fontWeight:'700'}}  className='w-[100%] flex justify-center items-center h-[20%] text-center text-black'>
      {item.title}
  </div>
 <div style={{backgroundColor:'#CD4E5E'}} className='w-[100%] text-white   flex justify-center items-center h-[20%] text-center'>
     
      <strong className='!ml-[5px] text-lg'> {item.price} / item</strong>
  </div>

  <div className='w-[100%] !px-[4%] !py-[5%]  flex-col  flex justify-start items-start h-[40%]'>


    {
      item.features.map((feature,index)=>{
        return(
          <>
          <div className='w-[100%]  !my-auto flex-row  flex '>
      <Check/>
      <div className='!ml-[6px] text-sm'>{feature.text}</div>
    </div>
     
          </>
        )
      })
    }

   
  </div>
 


</div>
    
        </>
      )
    })
  }


 </div>




     </section>

<Footer/>
    </main>
  )
}

export default page