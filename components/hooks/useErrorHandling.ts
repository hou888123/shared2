import { useState } from 'react';

/**
 * 錯誤處理Hook
 * 集中管理各種錯誤狀態和處理邏輯
 */
export const useErrorHandling = () => {
  // 錯誤狀態
  const [isFrontendErrorVisible, setIsFrontendErrorVisible] = useState(false);
  const [isSystemErrorVisible, setIsSystemErrorVisible] = useState(false);
  const [isKeywordErrorVisible, setIsKeywordErrorVisible] = useState(false);
  const [isQueryLimitErrorVisible, setIsQueryLimitErrorVisible] = useState(false);
  const [isTokenLimitErrorVisible, setIsTokenLimitErrorVisible] = useState(false);
  const [isIdleTimeoutErrorVisible, setIsIdleTimeoutErrorVisible] = useState(false);
  const [isOutOfScopeErrorVisible, setIsOutOfScopeErrorVisible] = useState(false);
  const [isStoreLimitErrorVisible, setIsStoreLimitErrorVisible] = useState(false);
  const [isSimilarityErrorVisible, setIsSimilarityErrorVisible] = useState(false);
  const [isSensitiveDataErrorVisible, setIsSensitiveDataVisible] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  
  // 重置所有錯誤狀態
  const resetAllErrors = () => {
    setIsFrontendErrorVisible(false);
    setIsSystemErrorVisible(false);
    setIsKeywordErrorVisible(false);
    setIsQueryLimitErrorVisible(false);
    setIsTokenLimitErrorVisible(false);
    setIsIdleTimeoutErrorVisible(false);
    setIsOutOfScopeErrorVisible(false);
    setIsStoreLimitErrorVisible(false);
    setIsSimilarityErrorVisible(false);
    setIsSensitiveDataVisible(false);
    setShowErrorModal(false);
  };
  
  // 錯誤處理函數
  const handleFrontendErrorButtonClick = () => setIsFrontendErrorVisible(true);
  const handleSystemErrorButtonClick = () => setIsSystemErrorVisible(true);
  const handleKeywordErrorButtonClick = () => setIsKeywordErrorVisible(true);
  const handleQueryLimitErrorButtonClick = () => setIsQueryLimitErrorVisible(true);
  const handleTokenLimitErrorButtonClick = () => setIsTokenLimitErrorVisible(true);
  const handleIdleTimeoutErrorButtonClick = () => setIsIdleTimeoutErrorVisible(true);
  const handleOutOfScopeErrorButtonClick = () => setIsOutOfScopeErrorVisible(true);
  const handleStoreLimitErrorButtonClick = () => setIsStoreLimitErrorVisible(true);
  const handleSimilarityErrorButtonClick = () => setIsSimilarityErrorVisible(true);
  const handleSensitiveDataButtonClick = () => setIsSensitiveDataVisible(true);
  
  // 重試函數
  const handleRetry = () => {
    resetAllErrors();
    window.location.reload();
  };
  
  return {
    // 錯誤狀態
    isFrontendErrorVisible,
    isSystemErrorVisible,
    isKeywordErrorVisible,
    isQueryLimitErrorVisible,
    isTokenLimitErrorVisible,
    isIdleTimeoutErrorVisible,
    isOutOfScopeErrorVisible,
    isStoreLimitErrorVisible,
    isSimilarityErrorVisible,
    isSensitiveDataErrorVisible,
    showErrorModal,
    
    // 錯誤處理函數
    handleFrontendErrorButtonClick,
    handleSystemErrorButtonClick,
    handleKeywordErrorButtonClick,
    handleQueryLimitErrorButtonClick,
    handleTokenLimitErrorButtonClick,
    handleIdleTimeoutErrorButtonClick,
    handleOutOfScopeErrorButtonClick,
    handleStoreLimitErrorButtonClick,
    handleSimilarityErrorButtonClick,
    handleSensitiveDataButtonClick,
    
    // 重置和重試
    resetAllErrors,
    handleRetry
  };
}; 