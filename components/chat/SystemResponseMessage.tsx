import React, { useState, useEffect, useRef } from 'react';
import { formatCurrency } from '../../utils/formatters';
import TypingText from '../ui/TypingText';

interface SystemResponseMessageProps {
  // 消費資料相關屬性
  period?: string;
  storeName?: string;
  times?: number;
  amount?: number;
  noData?: boolean;
  isAmountSpecified?: boolean;
  amountCondition?: string;
  isHighest?: boolean;
  isCategory?: boolean;
  highestDate?: string;
  highestAmount?: number;
  hasChart?: boolean;
  multipleStores?: boolean;
  specialStore?: string;
  twoStoresInfo?: Array<{
    storeName: string;
    times: number;
    amount: number;
    highestDate: string;
    highestAmount: number;
  }>;

  // 純文本模式的屬性
  text?: string;
  typingSpeed?: number;
  isGreeting?: boolean;
  isLoading?: boolean;
  enableTyping?: boolean;
  className?: string;
  
  // 新增打字效果完成事件回調
  onTypingComplete?: () => void;
}

/**
 * 通用系統回覆消息組件
 * 支持純文本和消費數據格式
 */
const SystemResponseMessage: React.FC<SystemResponseMessageProps> = ({
  // 消費資料相關參數
  period = '',
  storeName = '',
  times = 0,
  amount = 0,
  noData = false,
  isAmountSpecified = false,
  amountCondition = '',
  isHighest = false,
  isCategory = false,
  highestDate = '',
  highestAmount = 0,
  hasChart = false,
  multipleStores = false,
  specialStore = '',
  twoStoresInfo = [],

  // 純文本模式參數
  text = '',
  typingSpeed = 60,
  isGreeting = false,
  isLoading = false,
  enableTyping = true,
  className = '',
  
  // 打字效果完成事件回調
  onTypingComplete
}) => {
  // 純文本模式
  if (text) {
    if (enableTyping) {
      return (
        <TypingText
          text={text}
          typingSpeed={typingSpeed}
          className={`u-text-base u-text-gray-900 u-break-words ${isGreeting ? 'u-text-xl' : ''} ${className}`}
          onTypingComplete={onTypingComplete}
        />
      );
    } else {
      // 不啟用打字效果時直接顯示文字
      return (
        <div className={`u-text-base u-text-gray-900 u-break-words ${isGreeting ? 'u-text-xl' : ''} ${className}`}>
          {text.split('\n').map((line, i, arr) => (
            <React.Fragment key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      );
    }
  }

  // 以下是消費記錄相關部分 - 生成對應的文字並使用打字效果
  
  let consumptionText = '';
  
  // 處理無數據情況
  if (noData) {
    consumptionText = '查無符合條件的消費，或消費明細尚未出帳。';
  }
  // 多家店鋪的消費記錄訊息格式
  else if (multipleStores && twoStoresInfo && twoStoresInfo.length > 0) {
    consumptionText = `${period} 期間：\n${twoStoresInfo.map(store => 
      `• 您在「${store.storeName}」的信用卡消費次數為 ${store.times} 次，總金額 (折合臺幣) 為 ${formatCurrency(store.amount)} 元。其中 ${store.highestDate} 的消費金額最高，共 ${formatCurrency(store.highestAmount)} 元。`
    ).join('\n')}`;
  }
  // 有折線圖的消費記錄訊息格式
  else if (hasChart && storeName === "消費總金額") {
    consumptionText = `${period} 期間：\n您的信用卡消費次數為 ${times} 次，總金額 (折合臺幣) 為 ${formatCurrency(amount)} 元。其中 ${highestDate} 的消費金額最高，共 ${formatCurrency(highestAmount)} 元。`;
  }
  // 最高額消費記錄的訊息格式
  else if (isHighest) {
    consumptionText = `${period.replace('~', '-')} 期間：\n您最高額的單筆消費為 ${highestDate} 在「${storeName}」所消費的金額 (折合臺幣) ${formatCurrency(highestAmount)} 元。`;
  }
  // 消費類別的訊息格式
  else if (isCategory) {
    consumptionText = `${period} 期間：\n您在「${storeName}」類別的信用卡消費次數為 ${times} 次，總金額 (折合臺幣) 為 ${formatCurrency(amount)} 元。`;
  }
  // 沒有特店的金額條件訊息格式（全部店家）
  else if (isAmountSpecified && amountCondition && storeName === "消費總金額" && !specialStore) {
    consumptionText = `${period} 期間：\n您的信用卡單筆消費金額${amountCondition}的筆數共 ${times} 筆，總金額 (折合臺幣) 為 ${formatCurrency(amount)} 元。`;
  }
  // 帶有金額條件和特店的訊息格式
  else if (isAmountSpecified && amountCondition) {
    const displayStore = specialStore || storeName;
    consumptionText = `${period} 期間：\n您在「${displayStore}」的信用卡單筆消費金額${amountCondition}的筆數共有 ${times} 筆，總金額 (折合臺幣) 為 ${formatCurrency(amount)} 元。`;
  }
  // 默認訊息格式
  else {
    const storeText = storeName !== "消費總金額" ? `在${storeName}` : '';
    consumptionText = `您於 ${period} ${storeText} 的信用卡消費次數為 ${times} 次，總金額 (折合臺幣) 為 ${formatCurrency(amount)} 元。`;
  }

  // 使用 TypingText 組件來顯示消費數據文字
  if (enableTyping) {
    return (
      <TypingText
        text={consumptionText}
        typingSpeed={typingSpeed}
        className={`u-text-base u-text-gray-900 u-break-words ${className}`}
        onTypingComplete={onTypingComplete}
      />
    );
  } else {
    // 不啟用打字效果時直接顯示文字
    return (
      <div className={`u-text-base u-text-gray-900 u-break-words ${className}`}>
        {consumptionText.split('\n').map((line, i, arr) => (
          <React.Fragment key={i}>
            {line}
            {i < arr.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    );
  }
};

export default SystemResponseMessage; 