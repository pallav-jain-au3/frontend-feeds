import React from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import { ToastProvider } from '../contexts/ToastContext';
import { FeedProvider } from '../contexts/FeedContext';

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>
        <FeedProvider>
          {children}
        </FeedProvider>
      </ToastProvider>
    </AuthProvider>
  );
}; 

export default AppProvider;