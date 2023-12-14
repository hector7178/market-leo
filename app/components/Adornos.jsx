'use client'
import { useEffect, useState } from 'react'
import HomeLeft from './svgs/HomeLeft'
import { scroll } from 'framer-motion'

function Adornos() {
    const [dataScroll, setDataScroll]=useState()

    useEffect(()=>{
      scroll(progress => {
      setDataScroll(progress*100)
    })
    },[dataScroll])
  return (
    <>
    <HomeLeft className={(dataScroll>10?'translate-y-[-50vh] fixed top-0 left-0 ':'translate-y-[0] fixed top-0 left-0 ') +'ease-in-out duration-500'} />
    <HomeLeft className={(dataScroll>10?'fixed bottom-0 right-0 rotate-180 translate-y-[50vh] ':'fixed bottom-0 right-0 rotate-180 translate-y-[0vh] ')+'ease-in-out duration-500'} />
       
    </>
  )
}

export default Adornos