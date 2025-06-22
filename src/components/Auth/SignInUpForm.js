import React, { useState } from 'react';
import { useAppContext } from '../../hooks/useAppContext';
import PropTypes from 'prop-types';


const SignInUpForm = ({ formType, changeFormType, onSuccess, onError }) => {
  const headerText = formType === 'signin' ? 'Sign In to Continue' : 'Sign Up to Continue';
  const subHeaderText = formType === 'signin' ? 'Sign in to access all features on this app' : 'Sign up to access all features on this app';
  const buttonText = formType === 'signin' ? 'Sign In' : 'Sign Up';
  const buttonLoadingText = formType === 'signin' ? 'Signing in...' : 'Signing up...';
  const alreadyHaveAccountText = formType === 'signin' ? 'Don\'t have an account?' : 'Already have an account?';
  const signUpText = formType === 'signin' ? 'Sign up' : 'Sign in';
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const { auth } = useAppContext();
  const { login, signup } = auth;


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const submitFunction = formType === 'signin' ? login : signup;
    try {
      const { success, message } = await submitFunction(formData);
      if (success) {
        onSuccess?.(message);
      } else {
        onError?.(message);
      }
    } catch (error) {
      onError?.('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };



  return (
    <div
      className={`p-2 bg-gray-200 rounded-2xl`}
    >
      <div className='bg-white rounded-2xl shadow w-full'>
        <div className='p-6'>
          <div className='flex flex-col justify-center items-center'>
            <div className='p-2 rounded-full bg-gray-100 rotate-180'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
              </svg>
            </div>
            <div className='text-lg font-semibold text-gray-900 mt-3'>
              {headerText}
            </div>
            <div className='text-xs text-gray-400'>
              {subHeaderText}
            </div>
          </div>

        </div>
        <div className='p-6'>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-xs font-semibold text-gray-700 mb-1">
                Email or Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full text-xs px-3 py-2 bg-gray-200 placeholder:text-gray-400 placeholder:text-xs rounded-md focus:outline-none focus:border-transparent"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-semibold text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full text-xs px-3 py-2 bg-gray-200 placeholder:text-gray-400 placeholder:text-xs rounded-md focus:outline-none focus:border-transparent"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? buttonLoadingText : buttonText}
            </button>
          </form>
        </div>
      </div>
      <div className="text-center p-2">
        <div className="text-xs text-gray-600 mt-2">
          {'  '}{alreadyHaveAccountText}
          <button
            type="button"
            onClick={changeFormType}
            className="text-indigo-600 font-medium"
          >
            {signUpText}
          </button>
        </div>
      </div>
    </div>
  );
};

SignInUpForm.propTypes = {
  formType: PropTypes.string.isRequired,
  changeFormType: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func
};

export default SignInUpForm; 