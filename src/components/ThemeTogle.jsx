'use client'


import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
// import { ThemeContext } from '@/context/ThemeContext'
import { useTheme } from 'next-themes'

export default function ThemeTogle() {

  // const {theme, toggle} = useContext(ThemeContext);
  // console.log(theme);

  const {theme, setTheme, systemTheme} = useTheme("light");
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === 'system'?systemTheme:theme;
  return (
    <div 
     onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className={`flex items-center justify-between relative w-[40px] h-[20px] rounded-full cursor-pointer 
     transition-colors duration-300 p-[1px] mt-[3px   ${theme === "dark" ? 'bg-white' : 'bg-[#0f172a]'}`}
    >

      <Image src="/moon.png" alt="" width={13} height={13}/>

      <div className={`w-[15px] h-[15px] rounded-full bg-white translatex-1 absolute transition-all duration-300
          ${theme === "dark" ? "bg-black" : "translate-x-5 bg-white"}`}></div>

      <Image src="/sun.png" alt="" width={13} height={13}/>

    </div>
  )
}
