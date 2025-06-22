import React from 'react';
import Modal from '../components/Modal';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import { useAppContext } from '../hooks/useAppContext';

const AuthModal = () => {
  const { auth } = useAppContext();
  const { authModalType, closeAuthModal } = auth;
  const isOpen = !!authModalType;
  const title = authModalType === 'signin' ? 'Sign In' : 'Sign Up';

  return (
    <Modal
      title={title}
      isOpen={isOpen}
      onClose={closeAuthModal}
      size="md"
      closeOnOverlayClick={true}
    >
      {authModalType === 'signin' ? <SignInForm /> : <SignUpForm />}
    </Modal>
  );
};

export default AuthModal; 