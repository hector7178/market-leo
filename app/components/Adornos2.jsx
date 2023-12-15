'use client'
import { useEffect, useState } from 'react'

import { scroll } from 'framer-motion'
import Image from 'next/image'

function Adornos() {
    const [dataScroll, setDataScroll]=useState()

    useEffect(()=>{
      scroll(progress => {
      setDataScroll(progress*100)
    })
    },[dataScroll])
  return (
    <>
    {
    dataScroll?
    <>
    <Image src={'/Adornospag2.svg'} alt='' width={100} height={100} className={(dataScroll<20  ?' rotate-180 translate-x-full fixed top-10 right-10 h-[20vh] w-[35vw] opacity-10 md:flex hidden ':' opacity-60 rotate-180 translate-x-[0vw] fixed top-10 -right-10 h-[90vh] w-[25vw] md:flex hidden')+' ease-in-out duration-300 '}/>
    <Image src={'/Adornospag2.svg'} alt='' width={100} height={100} className={(dataScroll<20  ?' -translate-x-full fixed top-12 -left-8 h-[20vh] w-[25vw] opacity-10 md:flex hidden ':' opacity-60  translate-x-[0vw] fixed top-10 -left-12 h-[90vh] w-[25vw] md:flex hidden')+' ease-in-out duration-300 '}/>
    </> 
    :
     null   
     
    }
    </>
  )
}

export default Adornos