import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppProvider from './providers/AppProvider';
import Header from './components/Header';
import FeedPage from './pages/FeedPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import AuthModal from './Auth/AuthModal';
import Toast from './components/Toast';
import { useAppContext } from './hooks/useAppContext';

function AppContent() {
  const { auth, toast } = useAppContext();
  const { isAuthenticated, openAuthModal, logout, user } = auth;
  const { showToast } = toast;

  return (
    <Router>
      <Header showToast={showToast} isAuthenticated={isAuthenticated} user={user} openAuthModal={openAuthModal} logout={logout} />
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <AuthModal />
      <Toast />
    </Router>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
