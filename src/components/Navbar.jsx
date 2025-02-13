
import AuthLinks from '@/components/AuthLinks'
import ThemeTogle from '@/components/ThemeTogle'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between h-[100px]'>
        <div className='hidden flex-1 gap-[10px] hiden lg:inline-flex'>
          <Image src="/facebook.png" alt='' width={24} height={24}/>
          <Image src="/instagram.png" alt='' width={24} height={24}/>
          <Image src="/tiktok.png" alt='' width={24} height={24}/>
          <Image src="/youtube.png" alt='' width={24} height={24}/>
        </div>
        <div className='flex-1 text-left font-bold text-[24px] lg:text-center xl:text-[36px]'>Hamedblog.</div>
        <div className='flex flex-1 items-center ml-[12px] gap-[12px] xl:gap-[15px] text-[18px] xl:text-[20px]'>
          <ThemeTogle/>
          <div className='hidden sm:inline-flex gap-[12px] xl:gap-[15px]'>

            <Link href={'/'} className='hidden sm:block'>HomePage</Link>
            <Link href={'/'} className='hidden sm:block'>Contact</Link>
            <Link href={'/'} className='hidden sm:block'>About</Link>

          </div>
          <AuthLinks/>
        </div>
    </div>
  )
}
