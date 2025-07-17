'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import { ChevronDown,Menu,Home as HomeIcon } from "lucide-react";
import React,{useState} from "react";
import { Logo,WaitList } from "./reusable-components/special/special";

import { useRouter } from "next/navigation";





  const Home =()=>{
const [isModalShown,setIsModalShown]=useState<boolean>(false)
const [waitShown,setWaitShown] =useState<boolean>(false)
const router = useRouter();
 const handleParentPress = () => {
  setIsModalShown(false)
  };

const handleChildClick = (e:React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Prevent event from reaching the parent
 
  };
type LinkType={
  _id:number,
  name:string,
  link:string
}

  const linkData:LinkType[]=[
  {
    _id:1,
    name:"Community",
    link:"/community"
  },
   {
    _id:2,
    name:"Blog",
    link:"/community"
  },

   {
    _id:3,
    name:"Nadra Ethics",
    link:"https://ethics.nadra.ng"
  },

   {
    _id:4,
    name:"Pricing",
    link:"/pricing"
  },
    {
    _id:5,
    name:"Sell",
    link:"/pricing"
  },

    {
    _id:6,
    name:"Shop",
    link:"/pricing"
  },

   {
    _id:7,
    name:"Login",
    link:"/pricing"
  },
]


  const footerData:LinkType[]=[
  {
    _id:1,
    name:"Terms of use",
    link:"/community"
  },
   {
    _id:2,
    name:"Support",
    link:"/community"
  },

   {
    _id:3,
    name:"Company",
     link:"/community"
  },

   {
    _id:4,
    name:"Privacy Policy",
    link:"/community"
  },
    {
    _id:5,
    name:"Nadra Ethics",
    link:"https://ethics.nadra.ng"
  },

    {
    _id:6,
    name:" Contact us",
    link:"/community"
  },

  
]

const handlePress=()=>{
  router.push('/pricing')
}




    return(
      <>
      
 <main className={styles.pageContainer}>



 {
  waitShown && (
    <>
    <WaitList  setIsModalShown={setWaitShown}/>
    </>
  )
 }


<header className={styles.smallLinkheader}>

      <Menu className="w-6 h-6"   onClick={()=>setIsModalShown(true)}/>
       <div
        className={`text-3xl ${styles.smallLinkTitle}`}
       >nadra</div>

    </header>
{
  isModalShown && (
    <>
    
    <div className={`  ${styles.toggleLinkContainerOverLay}`}  onClick={handleParentPress}>
  <div className={` ${styles.toggleLinkContainer}`} onClick={handleChildClick}>

    <div className={` ${styles.toggleLinkContainerHeader}`}>

      <HomeIcon style={{color:"#FF8DA1"}} className="w-6 h-6 text-gray-700 !mr-[3px]"  />
       <Logo width='20' height="6"/>
    </div>



   <div className={` ${styles.toggleLinkContainerContent}`}>


    {
      linkData.map((item,)=>{
        return (
          <>
              <Link key={item._id} href={item.link} className={styles.smallLink}>
     {item.name}
  </Link>
          </>
        )
      })
    }

   

   <div  onClick={handlePress} className={`${styles.smallGetStartedBtn}`} >
     Get Demo
  </div>
   </div>

 


  </div>

</div>

    </>
  )
}

 <section className={styles.firstSection}>

    <header className={`${styles.linkHeader} h-12
            sm:h-16
            md:h-20
            lg:h-24`}>
         <div className={styles.leftLink}>


            {
      linkData.slice(0,3).map((item,)=>{
        return (
          <>
              <Link key={item._id} href={item.link} className={styles.link}>
     {item.name}
  </Link>
          </>
        )
      })
    }
       
  


         </div>

           <div className={`${styles.titleHeaderContainer} 
           `}>
            <h3 className={styles.title}>nadra</h3>
            </div>

 <div className={styles.rightLink}>

        {
      linkData.slice(3,7).map((item,)=>{
        return (
          <>
              <Link key={item._id} href={item.link} className={styles.link}>
     {item.name}
  </Link>
          </>
        )
      })
    }
   

  <div className={`${styles.link} ${styles.registerBtn}`}
   onClick={handlePress}
  >
      Get Demo
  </div>

         </div>

    </header>
 

   
    
  <div className={styles.circleContainer}>





     <div className={ `

        w-80              
  sm:w-96            
  md:w-[500px]             
  lg:w-[600px]          
  aspect-square 
  rounded-full
  flex items-center justify-center flex-col
  ${styles.firstCircle}
       
       
       `}
       
       
       
       >

     <Image

      src="/images/Ellipse 2@2x.png"
     alt='production'
      
       fill/>

    <h1 
        
         className={`${styles.pitchTitle }
            text-[24px] md:text-[40px] lg:text-[50px]`}
        
        >Shop with confidence</h1>
                <h1 className={`${styles.pitchTitle }
                text-[24px] md:text-[40px] lg:text-[50px]
                
                `}>Sell with purpose</h1>
                  <div  className={`sm:w-[90%] md-w[100%] lg:w-[70%] sm:leading[10px] md:leading[20px] lg:leading[40px]   ${styles.pitchCover}`}>
                <p className={`${styles.pitchParagraph}    text-[15px] md:text-[15px] lg:text-[15px]`}>
                  A Marketplace for <strong> Muslim women.</strong> Because finding what you love and selling what you believe in shouldn&#39;t be a gamble.
                </p>
                  </div>

                  <div style={{zIndex:1}} className={`    w-[100%]              
  sm:w-[100%]             
  md:w-[100%]             
  lg:w-[70%]    ${styles.btnContainer}`}>

                    <div
                    onClick={()=>setWaitShown(true)}
                    
                    
                    className={`
              w-[80px]         
        sm:w-[40%]             
  md:w-[40%]             
  lg:w-[40%]
     text-[8px]
     lg:text-[12px]                 
                      
                      ${styles.pitchBtn} ${styles.buyerBtn}`} >
                       Join waitlist
                    </div>
                      <div className={`
         w-[80px]         
  sm:w-[40%]             
  md:w-[40%]             
  lg:w-[40%] 
      text-[8px]      lg:text-[12px]                      ${styles.pitchBtn} ${styles.sellerBtn}`}
       onClick={handlePress}
      >Get Demo</div>


                  </div>
               




       </div>










   






  <div className={`${styles.secondCircle}  
       w-80              
  sm:w-96            
  md:w-[500px]             
  lg:w-[600px]          
  aspect-square 
  rounded-full
  flex items-center justify-center flex-col
     
     `}>

     <Image

      src="/images/Ellipse 3.png"
     alt='production'
      
       fill/>

       <div className={`w-[clamp(100px,50%,1200px)]  aspect-[1.5/1] rounded sm:rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl ${styles.firstFrame}`}>


<div  className={`${styles.firstImageCover} rounded sm:rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl `}>

  <Image 
  src="/images/pexels-mart-production-7667442-1536x1024.jpg"
     alt='production'
      className={`rounded sm:rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl`}
       fill
 />

 
</div>

<div className={`text-[clamp(0.75rem,1vw,1.2rem)]  font-semibold flex justify-center items-center ${styles.detailsText}`}>Clear product details</div>

</div>


<div className={`w-[clamp(50px,30%,300px)] aspect-[1/1.5] rounded sm:rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl ${styles.secondFrame}`}>


<div  className={`${styles.secondImageCover} rounded sm:rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl `}>

  <Image 
  src="/images/6c5011d81f5c6e7ee28d075590098f4e1d87dba3(1).jpg"
     alt='production'
      className={`rounded sm:rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl`}
       fill
 />

 
</div>

</div>


<div className={`w-[clamp(100px,30%,400px)]     ${styles.purchaseFrame} text-sm sm:text-base md:text-sm lg:text-sm xl:text-sm rounded-2xl`}>

  Where every purchase feels like a connection, and every seller is a sister.
</div>

<div className={`w-[clamp(100px,30%,400px)]     ${styles.guessWorkFrame} text-sm sm:text-base md:text-sm lg:text-sm xl:text-sm rounded-2xl`}>
No more guesswork
</div>



     </div>




   



    </div>
    

  <h1 
        
         className={`${styles.whyNadra } ${styles.header }
            text-[24px] sm:text-[4vw] md:text-[3.5vw] lg:text-[3.5vw] text-center
                `}
        
        >Why nadra?</h1>

    </section >

 <section  className={styles.secondSection}>

      <div

      className={`${styles.secondSectionFirst}
       h-24              
  sm:h-28            
  md:h-32             
  lg:h-36
      
      
      `}
      
      >

        <div className={`${styles.gridItem} ${styles.gridItemOne}`} > </div>

       <div className={`${styles.gridItem} ${styles.gridItemTwo}`}>
  <div className={` 
  text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] ${styles.paragraphContainer}`}>
  Trust isn&rsquo;t optional—<span className={styles.spanTextSecond}> it&rsquo;s </span> Vital.

</div>
       </div>
 



            <div className={`${styles.gridItem}`} > </div>

      </div>


 <div

      className={`${styles.secondSectionSecond}
       h-36              
  sm:h-40            
  md:h-44             
  lg:h-48
      
      
      `}
      
      >

        <div className={`${styles.gridItem} ${styles.gridItemOne}`} > </div>
          <div className={`${styles.gridItem} ${styles.gridItemTwo}`} > </div>

          <div className={`${styles.gridItem} ${styles.gridItemThree}`} > </div>
            <div className={`${styles.gridItem} ${styles.gridItemFour}`} > </div>

      </div>


<div

      className={`${styles.secondSectionSecond}
       h-36              
  sm:h-40            
  md:h-44             
  lg:h-48
      
      
      `}
      
      >

        <div className={`${styles.gridItem} ${styles.gridItemOne}`} > </div>
          <div className={`${styles.gridItem} ${styles.gridItemTwo}`} > </div>

          <div className={`${styles.gridItem} ${styles.gridItemThree}`} > </div>
            <div className={`${styles.gridItem} ${styles.gridItemFour}`} > </div>

      </div>






<div

      className={`${styles.secondSectionLast}
         h-24              
  sm:h-28            
  md:h-32             
  lg:h-36
      
      
      `}
      
      >

        <div className={` ${styles.gridItemOne}${styles.lastGridItem}`} > </div>
          <div className={`${styles.lastGridItem} ${styles.gridItemTwo}`} > </div>

          <div className={`${styles.lastGridItem} ${styles.gridItemThree}`} > </div>
            <div className={`${styles.lastGridItem} ${styles.gridItemFour}`} > </div>

      </div>


      


<div className={`  ${styles.leftFrame}  ${styles.firstWhiteFrame}`}>

  <div  style={{margin:'0 20px',color:"black"}} className={styles.firstLetter}>
 <div>
          Confident buyers return.
        </div>
        <div>
         Respected sellers grow.
        </div>
  </div>
  <div className={`${styles.logoContainer}
   w-8              
  sm:w-8            
  md:w-8             
  lg:w-12          
  aspect-square 
  rounded-full
  
  `}>
    🌱
  </div>
       

      </div>


      <div   className={`  ${styles.greenFrame} ${styles.leftFrame}`}>

  <div className={styles.firstLetter}>
 <div>
          Verified sellers. Real 
        </div>
        <div>
     feedback. Zero nonsense.
        </div>
  </div>
  <div className={`${styles.logoContainer}
   w-8              
  sm:w-8            
  md:w-8             
  lg:w-12          
  aspect-square 
  rounded-full
  
  `}>
  ✨
  </div>
       

      </div>

    <div className={`w-[clamp(100px,12%,1200px)] aspect-[1/1.4]   ${styles.smallSecondFrame}`}>

 <div className="relative w-full h-full rounded-[16px] overflow-hidden">
    <Image
      src="/images/368927e1e19024e61321c7be4f8210aef6d87680.jpg"
      alt="production"
      fill
      className="object-cover"
    />
  </div>
   

    </div>



     <div className={`w-[clamp(130px,13%,1300px)] aspect-[1/1.4]   ${styles.smallBigFrame}`}>

 <div className="relative w-full h-full rounded-[16px] overflow-hidden">
    <Image
      src="/images/2d106da9c332a98b7b7564128fbba3988bf0f17c.jpg"
      alt="production"
      fill
      className="object-cover"
    />
  </div>
   

    </div>

     <div className={`  ${styles.pinkFrame} ${styles.rightFrame}`}>


<div style={{backgroundColor:'#CD4E5E'}} className={`${styles.logoContainer}
   w-8              
  sm:w-8            
  md:w-8             
  lg:w-12          
  aspect-square 
  rounded-full
  
  `}>
  💬
  </div>

  <div className={styles.firstLetter}>
 <div>
           Dynamic impressions that 
        </div>
        <div>
     evolve with experience.
        </div>
  </div>
  
       

      </div>




<div className={`  ${styles.rightFrame}  ${styles.secondWhiteFrame}`}>
    <div  style={{backgroundColor:'grey'}} className={`${styles.logoContainer}
   w-8              
  sm:w-8            
  md:w-8             
  lg:w-12          
  aspect-square 
  rounded-full
  
  `}>
  🤝
  </div>
       

  <div  style={{color:'#9747FF'}} className={styles.firstLetter}>
 <div >
           Built for <span className={styles.yellow}>connection,</span> 
        </div>
        <div>
         not just conversion.
        </div>
  </div>


      </div>



    </section>

<section className={styles.thirdSection}>
  <h1 
        
         className={`${styles.header } ${styles.howItWorksHeader}
            text-[24px] sm:text-[4vw] md:text-[3.5vw] lg:text-[3.5vw] text-center
                `}
        
        >How it works</h1>


        <div className={` w-[95%]              
  sm:w-[80%]            
  md:w-[60%]             
  lg:w-1/2   ${styles.howItWorksFrame}`}>

    <div className={`w-[100%] ${styles.innerFrame}`}>
     <p className={` ${styles.innerParagraph}  w-text[0.5rem]              
  sm:text-[1rem]            
  md:text-[1rem]            
  lg:text-[1rem]`}>


Seamless, secure sign-up—because trust begins with transparency.
Find what you need without the noise. Clarity at every click.
Make informed decisions you’ll feel good about long after checkout.
Engage beyond the transaction. Relationships that last.

✅ Zero Fake reviews. Trust that moves with you confidence that lasts.
     </p>

     <div className={
       `${styles.getStartedBtn} rounded-2xl`
     }
        onClick={handlePress}
     >Get Demo</div>
    </div>


        </div>



</section>
<footer className={`${styles.footerContainer} w-[100%]

 h-[200px]              
  sm:h-[300px]            
  md:h-[300px]             
  lg:h-[300px]

`}>

  <div className={styles.footerLine}>
    <div className={`${styles.footerTitle}  text-[clamp(0.75rem,4vw,4rem)]`}>
           nadra
    </div>

    


<div className={` ${styles.footerTextContainer}`}>
  {
  footerData.slice(0,3).map((item)=>{
    return (
      <>
      <Link key={item._id} href={item.link} className={`${styles.footerText} text-[clamp(0.75rem,1.5vw,3rem)]`}>
        {item.name}
  </Link>
      </>
    )
  })
}

    

</div>
     
     


  </div>


   <div className={styles.footerLine}>
    <div style={{fontWeight:500}} className={`${styles.footerTitle}  text-[clamp(0.75rem,1.0vw,2rem)]`}>
           © 2025 Nadra Marketplace Ltd.
    </div>


<div  className={` ${styles.footerTextContainer}`}>

{
  footerData.slice(3,6).map((item)=>{
    return (
      <>
      <Link key={item._id} href={item.link} className={`${styles.footerText} text-[clamp(0.75rem,1.5vw,3rem)]`}>
        {item.name}
  </Link>
      </>
    )
  })
}




 

</div>
     
     


  </div>

</footer>

<footer className={`${styles.footerContainerSmall} w-[100%] h-[300px]              
 
`}>

  <div className={`${styles.footerFirstLine}`}>
 <div className={`${styles.footerTitle}  text-[24px]`}> nadra</div>
  <ChevronDown className="w-6 h-6 text-white-600"/>
  </div>

<div className={`${styles.smallLinkLine}`}>


  {
  footerData.map((item)=>{
    return (
      <>
      <Link key={item._id} href={item.link}  className={styles.footerLink}>
        {item.name}
  </Link>
      </>
    )
  })
}







</div>
      




 



  <div  className={`${styles.smallCopyright}`}>
           © 2025 Nadra Marketplace Ltd.
    </div>
  

</footer>


 </main>

      </>
    )
  }



export default Home


   
   
