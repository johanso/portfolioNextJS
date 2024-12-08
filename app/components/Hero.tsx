import React from 'react'
import { Button } from './Button'


export const Hero = () => {
  return (
    <div className='px-3'>
      <div className='p-8 flex flex-col items-center justify-center h-screen text-center'>
        <h1 className="text-5xl mb-2 lg:text-6xl uppercase font-[family-name:var(--font-bebas-neue)]">Johan Ricardo N</h1>
        <h2 className="text-base mb-4 font-light text-primary font-[family-name:var(--font-roboto-mono)]">[Frontend UI / DEV]</h2>
        <p className="text-xs lg:text-base text-gray max-w-md tracking-widest md:ml-1 font-[family-name:var(--font-inter)]">Passionate about crafting captivating web experiences</p>
        <Button />
      </div>
    </div>
  )
}
