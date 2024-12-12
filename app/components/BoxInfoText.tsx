import Link from 'next/link';
import { ReactNode } from 'react'
import { IconLink } from '../icons';

interface BoxInfoTextProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  years?: string
  url?: string
  text: string
}

export const BoxInfoText = ({title, icon, text, years, subtitle, url} : BoxInfoTextProps) => {
  return (
    <div className="p-6 rounded-lg bg-white border-solid border-2 border-black">
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
