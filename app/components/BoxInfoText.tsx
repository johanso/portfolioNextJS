import { ReactNode } from 'react'

interface BoxInfoTextProps {
  title: string;
  icon: ReactNode;
  text: string
}

export const BoxInfoText = ({title, icon, text} : BoxInfoTextProps) => {
  return (
    <div className="p-6 border rounded-lg bg-white border-light-gray">
      <div className="flex items-center">
        {icon}
        <h3 className="ml-4 text-base font-semibold text-black lg:text-base">{title}</h3>
      </div>
      <div className="mt-3">
        <p className="text-xs font-medium text-black md:text-sm">{text}</p>
      </div>
    </div>
  )
}
