import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const DEFAULT_USERS = [
  {
    username: 'demo@example.com',
    password: 'password123',
  },
  {
    username: 'test@example.com',
    password: 'testpass',
  },
];

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authModalType, setAuthModalType] = useState(null);

  // Initialize default users in localStorage if they don't exist
  useEffect(() => {
    const existingUsers = localStorage.getItem('users');
    if (!existingUsers) {
      localStorage.setItem('users', JSON.stringify(DEFAULT_USERS));
    }
  }, []);

  // Check for existing user data on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const authenticateUser = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find(u => u.username === username && u.password === password);
    return foundUser;
  };

  const signup = (userData) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find(u => u.username === userData.username);
    if (existingUser) {
      return { success: false, message: 'Username already exists' };
    }
    setUser(userData);
    setIsAuthenticated(true);
    setAuthModalType(null);
    localStorage.setItem('user', JSON.stringify(userData));
    return { success: true, message: 'Signup successful' };
  };

  const login = (userData) => {  
    const user = authenticateUser(userData.username, userData.password);
    if (!user) {
      return { success: false, message: 'Invalid username or password' };
    }
    setUser(userData);
    setIsAuthenticated(true);
    setAuthModalType(null);
    localStorage.setItem('user', JSON.stringify(userData));
    return { success: true, message: 'Login successful' };
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  const openAuthModal = (type) => {
    setAuthModalType(type);
  };

  const closeAuthModal = () => {
    setAuthModalType(null);
  };

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    signup,
    authenticateUser,
    authModalType,
    openAuthModal,
    closeAuthModal,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext; 