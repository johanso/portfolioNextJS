"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation';
import { IconContactPlane, IconFaceSmile, IconIdentification, IconISqueresPlus, IconHome } from "../icons"

interface MenuItem {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

const menuItems: MenuItem[] = [
  {
    href: '/',
    label: 'Home',
    icon: <IconHome size={22} />
  },
  {
    href: '/about',
    label: 'About',
    icon: <IconFaceSmile size={22} />
  },
  {
    href: '/resume',
    label: 'Resume',
    icon: <IconIdentification size={22} />
  },
  {
    href: '/#',
    label: 'Works',
    icon: <IconISqueresPlus size={22} />
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: <IconContactPlane size={22} />
  }
];

export const Navigation = () => {

  const pathname = usePathname();

  return (
    <nav className="fixed w-full left-0 right-0 top-0 py-4 m-auto bg-white shadow-sm">
      {/* Menu Desktop - se muestra en md y superior, se oculta en móvil */}
      <ul className="hidden md:flex justify-center gap-20">
        {menuItems.map((item) => (
          <li key={item.label} className="text-left [&>a]:flex [&>a]:flex-col [&>a]:items-center">
            <Link href={item.href} className={`${pathname === item.href ? 'text-primary font-semibold' : 'text-gray-500'}`}>
              <span className="text-sm block mt-1">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Menu Mobile - se muestra en móvil, se oculta en md y superior */}
      <ul className="flex md:hidden justify-center gap-8">
        {menuItems.map((item) => (
          <li key={item.label} className="text-left [&>a]:flex [&>a]:flex-col [&>a]:items-center">
            <Link href={item.href} className={`${pathname === item.href ? 'text-primary font-semibold' : 'text-gray-500'}`}>
              {item.icon}
              <span className="text-xs block mt-1">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
