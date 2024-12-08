"use client"
import { useState } from 'react'
import { IconMenuBars } from '../icons'

export const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <>
      <div className='flex justify-between px-2 py-2 fixed top-0 left-0 right-0 z-10'>
        <div className='ml-auto' onClick={() => setActiveMenu(!activeMenu)}>
          <IconMenuBars size={8} />
        </div>
      </div>
    </>
  )
}
