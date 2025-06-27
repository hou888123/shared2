import React, { ReactNode } from 'react';

interface ErrorPageProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

/**
 * 通用錯誤頁面封裝組件
 * 為兩個專案提供統一的錯誤頁面容器
 */
const ErrorPage: React.FC<ErrorPageProps> = ({ title, onClose, children }) => {
  return (
    <div className="u-flex u-flex-col u-items-center u-justify-center u-w-full u-h-full u-bg-white u-shadow-md u-rounded-md u-overflow-hidden">
      <div className="u-flex u-justify-between u-items-center u-w-full u-bg-blue-1000 u-px-4 u-py-3">
        <h2 className="u-text-white u-font-bold">{title}</h2>
        <button onClick={onClose} className="u-text-white u-bg-transparent u-border-none u-cursor-pointer">
          <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="white"/>
          </svg>
        </button>
      </div>
      <div className="u-px-5 u-py-3 u-w-full u-flex-1 u-overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default ErrorPage; 