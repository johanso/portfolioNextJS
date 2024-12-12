import { ReactNode } from 'react'

interface BoxInfoTextProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  years?: string
  text: string
}

export const BoxInfoText = ({title, icon, text, years, subtitle} : BoxInfoTextProps) => {
  return (
    <div className="p-6 rounded-lg bg-white border-solid border-2 border-black">
      <div className={`flex flex-wrap gap-x-4 ${subtitle ? 'flex-col' : 'items-center'}`}>
        { icon && <span>{icon}</span> }
        <div className="flex items-center">
          <h3 className="text-md lg:text-base font-semibold text-black">{title}</h3>
          {years && <span className='text-neutral-500 ml-2 text-sm font-[family-name:var(--font-roboto-mono)]'>{years}</span>}
        </div>
        { subtitle && (
          <span className="text-sm mt-1 font-light text-primary">{subtitle}</span>
        )}
      </div>
      <div className="mt-3">
        <p className="text-sm font-medium text-neutral-500 md:text-sm">{text}</p>
      </div>
    </div>
  )
}
