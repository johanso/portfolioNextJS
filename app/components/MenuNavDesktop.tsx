"use client"
import Link from "next/link"
export const MenuNavDesktop = () => {

  return (
    <nav className="fixed w-full left-0 right-0 top-0 py-4 m-auto bg-white shadow-sm">
      <ul className="flex justify-center gap-20">
        <li className="text-left [&>a]:text-gray-500 [&>a]:flex [&>a]:flex-col [&>a]:items-center">
          <Link href="/dashboard">
            <span className="text-sm block mt-1">About</span>
          </Link>
        </li>
        <li className="text-left [&>a]:text-gray-500 [&>a]:flex [&>a]:flex-col [&>a]:items-center">
          <Link href="/dashboard">
            <span className="text-sm block mt-1">Resume</span>
          </Link>
        </li>
        <li className="text-left [&>a]:text-gray-500 [&>a]:flex [&>a]:flex-col [&>a]:items-center">
          <Link href="/dashboard">
            <span className="text-sm block mt-1">Works</span>
          </Link>
        </li>
        <li className="text-left [&>a]:text-gray-500 [&>a]:flex [&>a]:flex-col [&>a]:items-center">
          <Link href="/dashboard">
            <span className="text-sm block mt-1">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
