'use client'
import React,{useEffect, useState} from 'react'
import { WhiteHeader,Footer } from '../reusable-components/header/header'
import styles from './page.module.css'
import Image from 'next/image'
import { ChevronDown,Check } from 'lucide-react'
import { useGlobal } from '../context'
import { PaymentModal,CurrencySymbol,SubType,UnicodeType } from '../reusable-components/special/special'

function Page() {







  type CurrencyType={
    _id:number,
    name:string
    symbol:CurrencySymbol,
    unicode:UnicodeType,

  }


 const currencyData: CurrencyType[] = [
  {
    _id: 1,
    name: "Dollar",
    symbol: "USD",
    unicode: "$",  // ✅ Actual dollar symbol
  },
  {
    _id: 2,
    name: "Pounds",
    symbol: "GBP",
    unicode: "£",  // ✅ Actual pounds symbol
  },
  {
    _id: 3,
    name: "Naira",
    symbol: "NGN",
    unicode: "₦",  // ✅ Actual naira symbol
  },
];


const {rates,fetchExchange}=useGlobal()
const [instance,setInstance]=useState<'monthly'|'yearly'>('monthly')

const [currency,setCurrency]=useState<CurrencyType>(currencyData[0])
const [isModalShown,setIsModalShown]=useState<boolean>(false)
const [amount,setAmount]=useState<number>(0)
const [multiplier,setMultiplier]=useState<number>(1)
const [selectedSub,setSelectedSub]=useState<SubType>('Starter')
const [unicode,setUnicode]=useState<UnicodeType>('$')

type FeatureType={
  _id:number,
  text:string
}
type PriceType={

  _id:number,
  title:SubType,
  features:FeatureType[],
  previousPrice:number,
  price:number,
  summary:string,
alt:string,
}
const pricingData:PriceType[]=[

  {
    _id:1,
    title:'Starter',
    summary:"For focused sellers ready to build trust and grow intentionally.",
    alt:"Start safe. Grow confidently.",
    features:[
      {
        _id:1,
        text:'Up to 10 product listings'
      },
      {
        _id:2,
        text:' Verified marketplace access'
      },
      {
        _id:3,
        text:'Scam protection guaranteed'
      },

{
        _id:4,
        text:'Peace of mind listings'
      },
    
    
    ],

    previousPrice:150,
    price:120,


    
  },

  
  {
    _id:2,
    title:'Growth',
    summary:"For brands that demand respect, security, and maximum impact.",
    alt:"Your business. Elevated and protected.",
    features:[
      {
        _id:1,
        text:'Up to 20 product listings'
      },
      {
        _id:2,
        text:'More listings for expanding inventory'
      },
      {
        _id:3,
        text:'Priority placement in buyer searches'
      },
      {
        _id:4,
        text:'Full scam prevention features'
      },


    
    ],

   
  previousPrice:300,
    price:250,

    
  },

  

  
  {
    _id:3,
    title:'Premium',
    summary:"For brands that demand respect, security, and maximum impact",
       alt:"Your growth deserves protection.",
    features:[
      {
        _id:1,
        text:'Up to 50 product listings'
      },
      {
        _id:2,
        text:'Showcase your full collection'
      },
      
      {
        _id:3,
        text:'Top tier visibility and trust badge'
      },

{
        _id:4,
        text:'Dedicated support for seamless selling'
      },
  
    
    ],

    previousPrice:550,
    price:500,

    
  }
  
  
]



type ExtraPriceType={

  _id:number,
  title:'Starter'|'Growth' | 'Premium',
  features:FeatureType[],
  price:number

}

const extraPricingData:ExtraPriceType[]=[

  {
    _id:1,
    title:'Starter',
    features:[
      {
        _id:1,
        text:'Available only to Starter subscribers'
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
    title:'Growth',
    features:[
      {
        _id:1,
        text:'Available only to Growth subscribers'
      },
      {
        _id:2,
        text:'Can list up to 10 additional products'
      },
   
    
    ],

   
  
    price:0.10,

    
  },

  

  
  
  
  
]




useEffect(()=>{

if(!rates.GBP)return

 const params=currency.symbol
 switch (params) {
  case 'GBP':
    setUnicode('£')
    setMultiplier(rates?.GBP);
    break;
  case 'NGN':
     setUnicode('₦')
    setMultiplier(rates?.NGN);
    break;
  default:
     setUnicode('$')
    setMultiplier(1);
}



},[currency])


const handleClick=(params:PriceType)=>{
 
  const finalAmount= params.price*multiplier
  setAmount(finalAmount)
  setSelectedSub(params.title)
  
  setIsModalShown(true)

}



useEffect(()=>{

  fetchExchange()

},[])


const subData={
  instance,
  name:selectedSub
}
  return (
    <main className={`w-[100%]`}>




        {
          isModalShown &&(
            <>
            <PaymentModal unicode={unicode} subData={subData}  amount={amount} currency={currency.symbol} setIsModalShown={setIsModalShown}/>
            </>
          )
        }
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


     <div style={{fontWeight:700}} className={`w-[100%]  text-[1rem] md:text-[1.5rem]   ${styles.headerLine}`}>
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

          <div className={`text-4 md:text-8 lg:text-16 ${styles.currency}`}>
      
        
          <select id="currency" name="currency"  onChange={(e) => {
            const currencyFound= currencyData.find((item)=>item.symbol===e.target.value)

            if (currencyFound){
              setCurrency(currencyFound)
            }
          }}>


{
  currencyData.map((item,index)=>{
     return (
      <>
     <option key={index} value={item.symbol}>
      {item.symbol}
    </option>
      </>
     )
  })
}

 
</select>
        </div>



      </div>


 <div className={`${styles.pricingContainer}`}>
  
  {
    pricingData.map((item)=>{

const mappedPrice:number = parseFloat((item.price * multiplier).toFixed(0));
 const mappedPreviousPrice=parseFloat((item.previousPrice * multiplier).toFixed(0));

      return (
        <>
        
    
        <div className={`h-[450px]  rounded-2xl     ${styles.pricingCard}`}>
  <div style={{fontWeight:'700'}} className='w-[100%] flex text-black  justify-center items-center h-[25%] text-center flex-col  !py-[4%] !px-[2%] '>
     
      <h1  style={{fontWeight:'700',color:'#CD4E5E'}} className='w-[100%] flex  justify-center items-center  text-cente text-xl'>{item.title}</h1>
      <div style={{fontWeight:'700'}} className='w-[100%] flex text-black  justify-center items-center text-center text-[11px]'>{item.summary}</div>
 <div style={{fontWeight:'700',color:"grey"}} className='w-[100%] flex text-grey  justify-center items-center text-center text-[11px]'>{item.alt}</div>
  </div>
  
   <div
  style={{ backgroundColor: '#553448D9' }}
  className='w-full text-white flex justify-center items-center h-[13%] text-center'
>
  {currency.unicode}
  <span className='line-through'>
    {instance === 'monthly'
      ? Number(mappedPreviousPrice).toFixed(0).toLocaleString()
      : Number(mappedPreviousPrice * 12).toFixed(0).toLocaleString()}
  </span>
  <strong className='!ml-[5px] text-lg'>
    {instance === 'monthly'
      ? Number(mappedPrice).toFixed(0).toLocaleString()
      : Number(mappedPrice * 12 * 0.85).toFixed(0).toLocaleString()}{' '}
    {instance === 'monthly' ? '/ month' : '/ year'}
  </strong>
</div>
  <div className='w-[100%] !px-[4%] !py-[10%]  flex-col  flex justify-start items-start h-[50%]'>


    {
      item.features.map((feature)=>{
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
 
 <div className=' !pb-[4%] w-[100%] h-[12%] '>
<div className={`flex justify-center w-[70%] !mx-auto !px-[5px] h-[100%] items-center  rounded-[20px]  ${styles.subBtn}`} onClick={()=>handleClick(item)}>


  {item.title==='Premium'?'Contact Sales':"Subscribe"}
   
  </div>
 </div>


</div>
    
        </>
      )
    })
  }


 </div>

<div style={{color:'#898989'}} className='text-sm  text-justify !mb-[32px] !mt-[8vh] '>
  All payment plans are exclusive of other charges, such as VAT and transactions fees. These fees will be collected separately and may vary depending on payment method and the processing country. For more details, please visit support.nadra.ng
</div>




     
  


       
<div  className={`w-[100%] !py-8      lg:!py-12   rounded-xl   sm:h-40 ${styles.bannerLine}`}>
      <div className={`${styles.titleHolder} w-60  sm:w-[50%]  md:w-[50%]  lg:w-[40%] !mr-[10%] sm:!mr-4 md:!mr-28 lg:!mr-32`}>
 <div  className={` sm:text-3xl md:text-4xl lg:text-4xl`}>
       Additional Listing Packages
       </div>

     <div  className={`text-[clamp(0.5rem,1.5vw,2rem)] sm:text-[clamp(0.5rem,2vw,3rem)] md:text-[clamp(0.5rem,1.5vw,3rem)] lg:text-[clamp(0.5rem,1.0vw,3rem)] `}>
       *Exclusive only to Starter and Premium members on Nadra*   
    
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
          
          <select id="currency" name="currency"  onChange={(e) => {
            const currencyFound= currencyData.find((item)=>item.symbol===e.target.value)

            if (currencyFound){
              setCurrency(currencyFound)
            }
          }}>


{
  currencyData.map((item,index)=>{
     return (
      <>
     <option key={index} value={item.symbol}>
      {item.symbol}
    </option>
      </>
     )
  })
}

 
</select>
        </div>



      </div>
       
    




 <div className={`${styles.extraPricingContainer}`}>
  
  {
    extraPricingData.map((item)=>{
      return (
        <>
        
    
        <div className={`h-52  rounded-2xl  !py-[4%]   ${styles.extraPricingCard}`}>
  <div style={{fontWeight:'700'}}  className='w-[100%] flex justify-center items-center h-[20%] text-center text-black'>
      {item.title}
  </div>
 <div style={{backgroundColor:'#CD4E5E'}} className='w-[100%] text-white   flex justify-center items-center h-[25%] text-center'>
     
      <strong className='!ml-[5px] text-lg'> {item.price} / item</strong>
  </div>

  <div className='w-[100%] !px-[4%] !py-[5%]  flex-col  flex justify-start items-start h-[60%]'>


    {
      item.features.map((feature)=>{
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

export default Page
