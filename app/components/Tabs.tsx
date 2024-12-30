"use client";
import React, { ReactNode, useState } from 'react';
import { TabId, TabsProps } from '../interfaces/components/tabs';
import { IconInfo } from '../icons';
import { PasswordModal } from './PasswordModal';

export const Tabs = ({ tabs, defaultTab, className = '' }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<TabId>(defaultTab || tabs[0]?.id);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [attemptedTab, setAttemptedTab] = useState<TabId | null>(null);
  
  const tabContent = tabs.find((tab) => tab.id === activeTab)?.content;

  const isEmpty = (tabContent: ReactNode): boolean => {
    if (tabContent === null || tabContent === undefined) return true;
    if (typeof tabContent === 'object' && Object.keys(tabContent as object).length === 0) return true;
    return false;
  };

  const handleTabClick = (tabId: TabId) => {
    if (tabId === 'professional' && !isAuthenticated) {
      setAttemptedTab(tabId);
      setShowPasswordModal(true);
    } else {
      setActiveTab(tabId);
    }
  };

  const handlePasswordSubmit = (password: string) => {
    setIsAuthenticated(true);
    setShowPasswordModal(false);
    if (attemptedTab) {
      setActiveTab(attemptedTab);
      setAttemptedTab(null);
    }
  };

  return (
    <div className={`${className}`}>
      <div className="flex flex-col gap-y-1 md:flex-row justify-start rounded-lg bg-neutral-50 p-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 md:py-2 md:px-4 text-sm font-medium transition-colors rounded-lg 
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

      {showPasswordModal && (
        <PasswordModal
          onClose={() => setShowPasswordModal(false)}
          onSubmit={handlePasswordSubmit}
        />
      )}

      {!isEmpty(tabContent) ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 mt-8">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </section>
      ) : (
        <section className="grid grid-cols-1 gap-x-4 gap-y-6 mt-8">
          <div className='flex justify-center mb-8 opacity-20'><IconInfo size={60} /></div>
          <p className="text-center max-w-3xl mx-auto">Due to confidentiality agreements, I am unable to showcase my professional projects here. However, if you&apos;re interested, feel free to contact me, and I&apos;ll gladly share my professional portfolio with you.</p>
        </section>
      )}
    </div>
  );
};