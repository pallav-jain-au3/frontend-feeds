import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ showToast, isAuthenticated, user, openAuthModal, logout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup';

  const handleLoginClick = () => {
    navigate('/signin');
  };

  const handleLogoutClick = () => {
    logout();
    showToast('Logged out successfully', 'success');
  };

  return (
    <header className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center justify-end space-x-2">
            <div className="w-5 h-4 border-2 bg-white border border-gray-900 rounded-full flex items-center justify-end pr-1">
              <div className='bg-gray-900 w-1 h-0.5'></div>
            </div>
            <span className="font-semibold text-xs">foo-rum</span>
          </Link>

          {isAuthenticated ? (
            <div className="flex items-center space-x-2">
              <button onClick={handleLogoutClick} className="text-xs font-medium text-gray-600 hover:text-gray-900">
                Logout
              </button>
            </div>
          ) : isAuthPage ? (
            <Link
              to="/"
              className="flex items-center space-x-1 px-4 py-2 text-gray-800 rounded-md text-xs font-medium"
            >
              <span>Back to Home</span>
            </Link>
          ) : (
            <button
              onClick={handleLoginClick}
              className="flex items-center space-x-1 px-4 py-2 text-gray-800 rounded-md text-xs font-medium"
            >
              <span>Login</span>
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h5a3 3 0 013 3v1" /></svg>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  showToast: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.shape({
    username: PropTypes.string,
    avatar: PropTypes.string,
  }),
  openAuthModal: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Header; 