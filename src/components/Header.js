import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ showToast, isAuthenticated, user, openAuthModal, logout }) => {
  const handleLoginClick = () => {  
    openAuthModal('signin');
  };

  const handleLogoutClick = () => {
    logout();
    showToast('Logged out successfully', 'success');
  };

  return (
    <header className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full" />
            </div>
            <span className="font-semibold text-lg">foo-rum</span>
          </Link>
          
          {isAuthenticated ? (
            <div className="flex items-center space-x-2">
              <img src={`https://api.dicebear.com/7.x/identicon/svg?seed=${user.username}`} alt={user.username} className="w-8 h-8 rounded-full" />
              <button onClick={handleLogoutClick} className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={handleLoginClick}
              className="flex items-center space-x-1 px-4 py-2 text-gray-800 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              <span>Login</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h5a3 3 0 013 3v1" /></svg>
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