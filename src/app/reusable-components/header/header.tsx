'use client'
import React,{useState} from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { ChevronDown,Menu,HomeIcon } from 'lucide-react'
import Image from 'next/image'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Logo } from '../special/special'

type LinkType={
  _id:number,
  name:string,
  link:string
}
const linkData:LinkType[]=[
  {
    _id:1,
    name:"Shop on Nadra",
    link:"/community"
  },
   {
    _id:2,
    name:"Pricing",
    link:"/community"
  },

   {
    _id:3,
    name:"Explore",
    link:"/community"
  },

   {
    _id:4,
    name:"Login",
    link:"/community"
  },
]





export const WhiteHeader=()=>{
const [isModalShown,setIsModalShown]=useState<boolean>(false)





 const handleParentPress = () => {
  setIsModalShown(false)
  };

const handleChildClick = (e:React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Prevent event from reaching the parent
    console.log('Special child clicked!');
  };









 return (
  <>
<header className={`w-[100%] h-[60px] sm:h-[64px] md:h-[68px] lg:h-[72px] ${styles.bigHeaderContainer}`}>

  <Logo  width='24' height='6'/>
  <div className={`${styles.linkContainer}`}>


{
  linkData.map((item,index)=>{
    return (
      <>
      <div className={styles.linkCover}  key={item._id}>
   <Link href={item.link}   style={{color:item.name==='Login'?'#CD4E5E':"black"}} className={styles.link} key={index}>
     {item.name}
  </Link>
  {
    item.name==='Explore' && (
      <>
        <ChevronDown className={styles.link} style={{marginLeft:'1vw',}}/>
      </>
    )
  }
      </div>
    

      </>
    )
  })
}


<div className={`${styles.registerBtn} rounded-lg`}>
  Signup
</div>

  </div>

</header>
  
<header className={styles.smallLinkheader}>

      <Menu className="w-6 h-6 !mr-[3px]"   onClick={()=>setIsModalShown(true)}/>
      <Logo  width='20' height='6'/>

    </header>



{
  isModalShown && (
    <>
    <div className={`fixed inset-0 ${styles.toggleLinkContainerOverLay}`}  onClick={handleParentPress}>
  <div className={` ${styles.toggleLinkContainer}`} onClick={handleChildClick}>

    <div className={` ${styles.toggleLinkContainerHeader}`}>


      
      <HomeIcon style={{color:"#FF8DA1"}} className="w-6 h-6 !mr-[3px] text-gray-700"  />
       <Logo  width='20' height='6'/>
    </div>



   <div className={` ${styles.toggleLinkContainerContent}`}>

    {
        linkData.map((item,)=>{
          return (
            <>
              <Link href={item.link} className={styles.smallLink}>
     {item.name}
  </Link> 
            </>
          )
        })
      }

   <div className={`${styles.smallGetStartedBtn}`}>
     Sign Up
  </div>
   </div>

 


  </div>

</div>
 
    </>
  )
}


  
  
  </>
 )
}


const BottomlinkData:LinkType[]=[
  {
    _id:1,
    name:"About Us",
    link:"/community"
  },
   {
    _id:2,
    name:"Privacy",
    link:"/community"
  },

   {
    _id:3,
    name:"FAQ",
    link:"/community"
  },

   {
    _id:4,
    name:"Products",
    link:"/community"
  },

  {
    _id:5,
    name:"Contact Us",
    link:"/community"
  },

  {
    _id:6,
    name:"Terms & Conditions",
    link:"/community"
  },

  {
    _id:7,
    name:"Help",
    link:"/community"
  },
   {
    _id:8,
    name:"Pricing",
    link:"/community"
  },
]


export const Footer=()=>{

  return (
    <>

    <footer className={`${styles.footerContainer} h-60`}>
      <div className='h-8 w-24 relative'>
 <Image
      alt='production'
       src="/images/24e4e505e38beb6cf65fc7a6db6cbac828afffdb.png"
         fill
    
      />
      </div>

      <div className='w-[100%] h-[80%] flex justify-between items-stretch flex-row'>
        <div className=' flex flex-col   justify-center items-start  h-full w-[20%]'>
          <div style={{marginBottom:'14px'}} className='flex justify-center items-center'>
                <FaInstagram  className="w-8 h-8 !mr-4" />
             <FaLinkedin  className="w-8 h-8" />
         
          </div>

          <div> © 2025 Nadra Marketplace Ltd.</div>

        </div>

        <div className=' flex flex-col  justify-center items-start  h-full w-[70%] lg:w-[60%]'>


<div style={{marginBottom:'14px'}} className='flex justify-center items-center w-[100%]'>

              {
                BottomlinkData.slice(0,4).map((item)=>{
                  return (
                    <>
                    <div className='text-white text-4 !mr-[auto]' >{item.name}</div>
                    
                    </>
                  )
                })
              } 
          
          </div>

<div style={{marginBottom:'14px'}} className='flex justify-center items-center w-[100%]'>

              {
                BottomlinkData.slice(4,8).map((item)=>{
                  return (
                    <>
                    <div className='text-white text-4 !mr-[auto]' >{item.name}</div>
                    
                    </>
                  )
                })
              } 
          
          </div>
        </div>

      </div>
     

    </footer>


<footer className={`${styles.footerContainerSmall} w-[100%] h-[350px]              
 

`}>

  <div className={`${styles.footerFirstLine}`}>
 <div className='h-6 w-20 relative'>
 <Image
      alt='production'
       src="/images/24e4e505e38beb6cf65fc7a6db6cbac828afffdb.png"
         fill
    
      />
      </div>
  <ChevronDown className="w-6 h-6 text-white-600"/>
  </div>

<div className={`${styles.smallLinkLine}`}>
  {
    BottomlinkData.map((item)=>{
      return (
        <>
        <Link href={item.link} className={styles.footerLink}>
     {item.name}
  </Link>

        </>
      )
    })
  }

  



</div>
      




  <div  className='flex justify-start items-center w-[100%] !my-[15px]'>
                <FaInstagram  className="w-8 h-8 !mr-4" />
             <FaLinkedin  className="w-8 h-8" />
         
          </div>



  <div  className={`${styles.smallCopyright}`}>
           © 2025 Nadra Marketplace Ltd.
    </div>
  

</footer>


    </>
  )

}
