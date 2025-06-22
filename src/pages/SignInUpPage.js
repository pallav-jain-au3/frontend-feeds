import React, { useEffect } from 'react';
import SignInUpForm from '../components/Auth/SignInUpForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';

const SignInUpPage = () => {
  const location = useLocation();
  const formType = location.pathname.includes('signin') ? 'signin' : 'signup';
  const navigate = useNavigate();
  const { auth, toast } = useAppContext();
  const { isAuthenticated } = auth;
  const { showToast } = toast;

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const changeFormType = () => {
    if (formType === 'signin') {
      navigate('/signup');
    } else {
      navigate('/signin');
    }
  };

  const onSuccess = (message) => {
    navigate('/');
    showToast(message, 'success');
  };

  const onError = (message) => {
    showToast(message, 'error');
  };

  return (
    <div className="min-h-screen bg-white grid place-items-center">
      <div className='w-full max-w-md px-4'>
        <SignInUpForm formType={formType} changeFormType={changeFormType} onSuccess={onSuccess} onError={onError} />
      </div>
    </div>
  );
};

export default SignInUpPage; 