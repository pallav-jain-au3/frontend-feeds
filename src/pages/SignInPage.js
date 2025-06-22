import React from 'react';
import SignInForm from '../Auth/SignInForm';
import { Link } from 'react-router-dom';

const SignInPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
    <div className="w-full max-w-sm bg-white rounded-lg shadow p-8">
      <SignInForm />
    </div>
  </div>
);

export default SignInPage; 