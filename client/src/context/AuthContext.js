import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosConfig';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: null, isLoggedIn: false });
  const [token, setToken] = useState(localStorage.getItem('token') || sessionStorage.getItem('token') || '');
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setAuth({ token, isLoggedIn: true });
      fetchUserData(token);
    } else {
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
    }
  }, [token]);

  const fetchUserData = async (token) => {
    try {
      const response = await axiosInstance.get('/dashboard', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data', error);
      if (error.response && error.response.status === 401) {
        // Token is invalid or expired
        logout();
      }
    }
  };

  const login = (token, rememberMe) => {
    if (rememberMe) {
      localStorage.setItem('token', token);
    } else {
      sessionStorage.setItem('token', token);
    }
    setAuth({ token, isLoggedIn: true });
    setToken(token);  // Update state with the new token
  };

  const logout = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    setAuth({ token: null, isLoggedIn: false });
    setToken('');  // Clear token from state
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, token, setToken, userData }}>
      {children}
    </AuthContext.Provider>
  );
};
