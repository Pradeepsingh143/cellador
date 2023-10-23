import Image from 'next/image'
import React from 'react'

export default function ServiceCard({url, text}) {
  return (
    <div className={`service__card relative w-[1000px] h-[300px] bg-white  rounded-xl`}>
        <Image src={url} fill alt={"images"}  objectFit='cover' className='rounded-xl brightness-50 hover:brightness-[30%]'/>
        <h2 className='text-2xl md:text-xl absolute bottom-3 left-5 text-white capitalize'>{text}</h2>
    </div>
  )
}
