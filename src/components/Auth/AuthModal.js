import React, { useRef, useEffect } from 'react';
import Modal from '../Modal';
import SignInUpForm from './SignInUpForm';
import { useAppContext } from '../../hooks/useAppContext';
import { useNavigate } from 'react-router-dom';

const AuthModal = () => {
  const { auth, toast } = useAppContext();
  const usernameRef = useRef(null);
  const { authModalType, closeAuthModal, setAuthModalType } = auth;
  const { showToast } = toast;
  const isOpen = !!authModalType;
  const navigate = useNavigate();
  const changeFormType = () => {
    if (authModalType) {
      setAuthModalType(authModalType === 'signin' ? 'signup' : 'signin');
    }
  };

  const onSuccess = (message) => {
    closeAuthModal();
    navigate('/');
    showToast(message, 'success');
  };

  const onError = (message) => {
    showToast(message, 'error');
  };

  useEffect(() => {
    if (isOpen) {
      usernameRef?.current?.focus();
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeAuthModal}
      closeOnOverlayClick={true}
    >
      <SignInUpForm
        formType={authModalType}
        changeFormType={changeFormType}
        onSuccess={onSuccess}
        onError={onError}
        usernameRef={usernameRef}
      />
    </Modal>
  );
};

export default AuthModal; 