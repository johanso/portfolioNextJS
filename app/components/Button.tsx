import React from 'react'

export const Button = () => {
  return (
    <a className="inline-block w-max p-2 mt-6 border rounded-md border-light-gray " href="/contact">
      <span className="inline-block min-w-[200px] text-xs lg:text-sm text-center font-bold  py-3 px-9 rounded-md bg-primary hover:bg-black text-white hover:text-white transition duration-300 ">
        GET IN TOUCH
      </span>
    </a>
  )
}
