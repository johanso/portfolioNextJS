import React from 'react'
import { Button } from './Button'
import { heroData } from '../data/Hero'


export const Hero = () => {
  return (
    <div className='px-3'>
      <div className='p-8 flex flex-col items-center justify-center h-screen text-center'>
        <h1 className="text-5xl mb-2 lg:text-6xl uppercase font-[family-name:var(--font-bebas-neue)]">
          {heroData.name}
        </h1>
        <h2 className="text-base mb-4 font-light text-primary font-[family-name:var(--font-roboto-mono)]">
          {heroData.role}
        </h2>
        <p className="text-xs lg:text-base text-gray max-w-md tracking-widest md:ml-1 font-[family-name:var(--font-inter)]">
          {heroData.description}
        </p>
        <Button />
      </div>
    </div>
  )
}
