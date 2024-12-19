"use client";
import React, { useState } from 'react';
import { TabsProps } from '../interfaces/components/tabs';
import { IconInfo } from '../icons';


export const Tabs = ({ 
  tabs, defaultTab, className = ''
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const tabContent = tabs.find((tab) => tab.id === activeTab)?.content

  const isEmpty = (tabContent: any) => {
    return Object.keys(tabContent).length === 0
  }

  return (
    <div className={`${className}`}>

      <div className="flex flex-col md:flex-row justify-start rounded-lg bg-neutral-50 p-2">
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
            {tab.icon && <span className='inline'>{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>

      {
        !isEmpty(tabContent)
        ? (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 mt-8">
            <div className="mt-4">
              {tabs.find((tab) => tab.id === activeTab)?.content}
            </div>
          </section>
        ) : (
          <section className="grid grid-cols-1 gap-x-4 gap-y-6 mt-8">
            <div className="mt-4">
              <div className='flex justify-center mb-8 opacity-20'><IconInfo size={60} /></div>
              <p className="text-center max-w-3xl mx-auto">Due to confidentiality agreements, I am unable to showcase my professional projects here. However, if you&apos;re interested, feel free to contact me, and I&apos;ll gladly share my professional portfolio with you.</p>
            </div>
          </section>
        )

      }
      
    </div>
  );
};