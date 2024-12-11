import { ReactNode } from 'react'

interface BoxInfoTextProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  text: string
}

export const BoxInfoText = ({title, icon, text, subtitle} : BoxInfoTextProps) => {
  return (
    <div className="p-6 border rounded-lg bg-white border-light-gray">
      <div className={`flex  flex-wrap gap-x-4 ${subtitle ? 'flex-col' : 'items-center'}`}>
        { icon && <span>{icon}</span> }
        <h3 className="text-base font-semibold text-black lg:text-base">{title}</h3>
        { subtitle && (
          <span className="text-sm font-light text-primary font-[family-name:var(--font-roboto-mono)]">{subtitle}</span>
        )}
      </div>
      <div className="mt-3">
        <p className="text-sm font-medium text-black md:text-sm">{text}</p>
      </div>
    </div>
  )
}
