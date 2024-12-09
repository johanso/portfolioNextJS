"use client"
import Link from "next/link"
import { IconContactPlane, IconFaceSmile, IconIdentification, IconISqueresPlus } from "../icons"
export const MenuNavMobile = () => {

  return (
    <nav className="fixed w-11/12 left-0 right-0 bottom-0 m-auto bg-white">
      <ul className="flex justify-center gap-12">
        <li className="text-left [&>a]:text-gray-500 [&>a]:flex [&>a]:flex-col [&>a]:items-center">
          <Link href="/about">
            <IconFaceSmile size={22} />
            <span className="text-xs block mt-1">About</span>
          </Link>
        </li>
        <li className="text-left [&>a]:text-gray-500 [&>a]:flex [&>a]:flex-col [&>a]:items-center">
          <Link href="/">
            <IconIdentification size={22} />
            <span className="text-xs block mt-1">Resume</span>
          </Link>
        </li>
        <li className="text-left [&>a]:text-gray-500 [&>a]:flex [&>a]:flex-col [&>a]:items-center">
          <Link href="/#">
            <IconISqueresPlus size={22} />
            <span className="text-xs block mt-1">Works</span>
          </Link>
        </li>
        <li className="text-left [&>a]:text-gray-500 [&>a]:flex [&>a]:flex-col [&>a]:items-center">
          <Link href="/#">
            <IconContactPlane size={22} />
            <span className="text-xs block mt-1">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
