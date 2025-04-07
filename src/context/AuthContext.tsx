
import React, { createContext, useContext, useState, useEffect } from 'react';

type UserRole = 'customer' | 'shop_owner' | null;

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  register: (name: string, email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('salon_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);
  
  const login = async (email: string, password: string, role: UserRole) => {
    setIsLoading(true);
    try {
      // This would be an API call in a real application
      // For now, we'll mock the login
      const mockUser: User = {
        id: Math.random().toString(36).substring(2, 9),
        name: email.split('@')[0],
        email,
        role
      };
      
      setUser(mockUser);
      localStorage.setItem('salon_user', JSON.stringify(mockUser));
      
      console.log('Logged in successfully', mockUser);
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  
  const register = async (name: string, email: string, password: string, role: UserRole) => {
    setIsLoading(true);
    try {
      // This would be an API call in a real application
      // For now, we'll mock the registration
      const mockUser: User = {
        id: Math.random().toString(36).substring(2, 9),
        name,
        email,
        role
      };
      
      setUser(mockUser);
      localStorage.setItem('salon_user', JSON.stringify(mockUser));
      
      console.log('Registered successfully', mockUser);
    } catch (error) {
      console.error('Registration failed', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem('salon_user');
  };
  
  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
