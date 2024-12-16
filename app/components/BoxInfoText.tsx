import Link from 'next/link';
import { ReactNode } from 'react'
import { IconLink } from '../icons';

interface BoxInfoTextProps {
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
  years?: string
  url?: string
  text: string
  custonClass?: string
}

export const BoxInfoText = ({title, icon, text, years, subtitle, url, custonClass} : BoxInfoTextProps) => {
  return (
    <div className={`p-6 rounded-lg bg-white border-solid border-2 border-black relative ${custonClass === 'timeline' ? "[&:not(:last-child)]:after:content-[''] [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:bottom-[-0.95rem] [&:not(:last-child)]:after:h-[0.95rem] [&:not(:last-child)]:after:w-[2px] [&:not(:last-child)]:after:bg-black [&:not(:last-child)]:after:left-1/2 [&:not(:last-child)]:after:-translate-x-1/2" : ''}`}>
      <div className={`flex flex-wrap gap-x-4 ${subtitle ? 'flex-col' : 'items-center'}`}>
        { icon && <span>{icon}</span> }
        <div className="flex items-center">
          <h3 className="text-md lg:text-base font-semibold text-black">{title}</h3>
          {years && <span className='text-neutral-500 ml-2 xl:ml-4 text-sm font-[family-name:var(--font-roboto-mono)]'>{years}</span>}
        </div>
        { subtitle && (
          <div className='flex items-center'>
            <span className="text-sm mt-1 font-light text-primary">{subtitle}</span> 
            {
              url && (
                <Link href={url} target="_blank" className="ml-2 text-primary">
                  <IconLink size={14} />
                </Link>
              )
            }
          </div>
        )}
      </div>
      <div className="mt-3">
        <p className="text-sm font-medium text-neutral-500 md:text-sm">{text}</p>
      </div>
    </div>
  )
}
