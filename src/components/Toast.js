import React, { useEffect } from 'react';
import { useAppContext } from '../hooks/useAppContext';

const Toast = () => {
  const { toast } = useAppContext();
  const { toast: toastData, hideToast } = toast;

  useEffect(() => {
    if (toastData) {
      const timer = setTimeout(() => {
        hideToast();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [toastData, hideToast]);


  const bgColorClass = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500'
  }
  const bgColor = bgColorClass[toastData?.type] || 'bg-blue-500';

  return (
    <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${toastData
      ? 'translate-y-0 opacity-100'
      : 'translate-y-full opacity-0'
      }`}>
      {toastData && (
        <div className={`${bgColor} text-white px-4 py-2 rounded-md shadow-lg transform transition-all duration-300 ease-out`}>
          {toastData.message}
        </div>
      )}
    </div>
  );
};

export default Toast; 