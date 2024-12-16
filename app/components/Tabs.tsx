"use client";
import React, { useState } from 'react';
import { TabsProps } from '../interfaces/components/tabs';


export const Tabs = ({ 
  tabs, defaultTab, className = ''
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <div className={`${className}`}>

      <div className="flex justify-start rounded-lg bg-neutral-50 p-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-2 text-sm font-medium transition-colors rounded-lg 
              ${activeTab === tab.id
                ? 'bg-white text-primary shadow'
                : 'text-neutral-700 hover:text-gray-700 hover:bg-neutral-50'
              }
            `}
          >
            {tab.icon && <span className='hidden lg:inline'>{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.find((tab) => tab.id === activeTab)?.content}
      
    </div>
  );
};