import React from 'react';
import SignUpForm from '../Auth/SignUpForm';


const SignUpPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
    <div className="w-full max-w-sm bg-white rounded-lg shadow p-8">
      <SignUpForm />
    </div>
  </div>
);

export default SignUpPage; 