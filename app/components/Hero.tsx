import React from 'react'
import { heroData } from '../data/hero'
import Link from 'next/link'
import Image from 'next/image'

export const Hero = () => {
  return (
    <div className='px-3'>
      <div className='p-8 flex flex-col items-center justify-center h-screen text-center'>
        <div className="relative flex items-center justify-center mb-4 w-28 h-28">
          <Image 
            src={heroData.image} 
            alt={heroData.name}
            width={160}
            height={160}
            className="object-cover w-100 h-100 rounded-full"
          />
        </div>
        <h1 className="text-5xl mb-2 lg:text-6xl uppercase font-[family-name:var(--font-bebas-neue)]">
          {heroData.name}
        </h1>
        <h2 className="text-base mb-4 font-light text-primary font-[family-name:var(--font-roboto-mono)]">
          {heroData.role}
        </h2>
        <p className="text-xs lg:text-base text-gray max-w-md tracking-widest md:ml-1 font-[family-name:var(--font-inter)]">
          {heroData.description}
        </p>

        <Link 
          href={"/contact"}
          className='inline-block w-max p-2 mt-6 border rounded-md border-light-gray'
        >
          <span className="inline-block min-w-[200px] text-xs lg:text-sm text-center font-bold  py-3 px-9 rounded-md bg-primary hover:bg-black text-white hover:text-white transition duration-300 ">
            GET IN TOUCH
          </span>
        </Link>

      </div>
    </div>
  )
}
