'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export type UserRole = 'user' | 'admin';

export interface User {
  id: string;
  name: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  login: (id: string, pw: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check local storage for persisted session
    const storedUser = localStorage.getItem('rminu_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (id: string, pw: string) => {
    // Mock Login Logic
    // Admin: admin / 1234
    // User: test / 1234
    
    if (id === 'admin' && pw === '1234') {
      const adminUser: User = { id: 'admin', name: 'Administrator', role: 'admin' };
      setUser(adminUser);
      localStorage.setItem('rminu_user', JSON.stringify(adminUser));
      return true;
    } 
    
    if (id === 'test' && pw === '1234') {
        const normalUser: User = { id: 'test', name: 'Test User', role: 'user' };
        setUser(normalUser);
        localStorage.setItem('rminu_user', JSON.stringify(normalUser));
        return true;
    }
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('rminu_user');
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
