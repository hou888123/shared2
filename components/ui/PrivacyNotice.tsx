import React from 'react';

interface PrivacyNoticeProps {
  /**
   * 服務條款的連結
   */
  termsLink?: string;
  /**
   * 提醒事項的連結
   */
  noticeLink?: string;
  /**
   * 自定義樣式類名
   */
  className?: string;
  /**
   * 服務條款點擊事件處理函數
   */
  onTermsClick?: (e: React.MouseEvent) => void;
  /**
   * 提醒事項點擊事件處理函數
   */
  onNoticeClick?: (e: React.MouseEvent) => void;
}

/**
 * 隱私提醒元件，顯示隱私保護相關的提示文字和鏈接
 */
const PrivacyNotice: React.FC<PrivacyNoticeProps> = ({
  termsLink = '#',
  noticeLink = '#',
  className = '',
  onTermsClick,
  onNoticeClick
}) => {
  // 處理服務條款點擊
  const handleTermsClick = (e: React.MouseEvent) => {
    if (onTermsClick) {
      e.preventDefault();
      onTermsClick(e);
    }
  };

  // 處理提醒事項點擊
  const handleNoticeClick = (e: React.MouseEvent) => {
    if (onNoticeClick) {
      e.preventDefault();
      onNoticeClick(e);
    }
  };

  return (
    <div className={`u-text-xs u-text-gray-500 ${className}`}>
      請勿輸入個人隱私資料，相關規範詳見
      <a 
        href={termsLink} 
        className="u-text-blue-500 u-underline u-mx-1"
        target="_blank" 
        rel="noopener noreferrer"
        onClick={handleTermsClick}
      >
        服務條款
      </a> 
      與 
      <a 
        href={noticeLink} 
        className="u-text-blue-500 u-underline u-ml-1"
        target="_blank" 
        rel="noopener noreferrer"
        onClick={handleNoticeClick}
      >
        提醒事項
      </a>
      。
    </div>
  );
};

export default PrivacyNotice; 