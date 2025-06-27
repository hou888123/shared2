import React from 'react';
import ErrorContent from '../../layout/ErrorContent';
import { ERROR_MESSAGES } from '../../../constants/errorMessages';

interface CommonErrorPageProps {
  title: string;
  onClose: () => void;
  errorType: 'frontend' | 'idle';
  errorMessage?: string;
  onRetry: () => void;
}

/**
 * 通用錯誤頁面組件
 * 集成前端加載失敗和閒置超時錯誤處理
 */
const CommonErrorPage: React.FC<CommonErrorPageProps> = ({
  title,
  onClose,
  errorType,
  errorMessage,
  onRetry
}) => {
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
        {errorType === 'frontend' ? (
          <ErrorContent
            errorMessage={ERROR_MESSAGES.FRONTEND_LOADING_ERROR.MESSAGE}
            errorCode={ERROR_MESSAGES.FRONTEND_LOADING_ERROR.CODE}
            onButtonClick={onRetry}
            showUserQuestion={false}
          />
        ) : (
          <ErrorContent
            errorMessage={errorMessage || ERROR_MESSAGES.IDLE_TIMEOUT_ERROR.MESSAGE}
            onButtonClick={onRetry}
            buttonText={ERROR_MESSAGES.IDLE_TIMEOUT_ERROR.BUTTON_TEXT}
            showUserQuestion={false}
          />
        )}
      </div>
    </div>
  );
};

export default CommonErrorPage; 