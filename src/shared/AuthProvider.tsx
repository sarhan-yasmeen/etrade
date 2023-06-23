import React, { createContext, useContext, useState } from 'react';
import { useHttp } from './Http/useHttp';

interface User {
  name: string;
  email: string;
}

interface AuthContextProps {
  isLoggedIn: boolean;
  user: User | null;
  login: (userCredentials: User) => void;
  logout: () => void;
}

// Create the authentication context
export const AuthContext = createContext<AuthContextProps | any>(undefined);

// Create a provider component
export const AuthProvider: React.FC = (children: any) => {
  // Define the state variables
  const http = useHttp()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // Function to handle login
  const login = async (userCredentials: User) => {
    // Perform your authentication logic here

    try {
      await http.post('/signUp', userCredentials)
    } catch (err: any) {
      //
    }


    // Set the isLoggedIn state to true and store the user data
    setIsLoggedIn(true);
    setUser(userCredentials);
  };

  // Function to handle logout
  const logout = () => {
    // Perform your logout logic here
    // Set the isLoggedIn state to false and clear the user data
    setIsLoggedIn(false);
    setUser(null);
  };

  // Define the context value
  const authContextValue: AuthContextProps = {
    isLoggedIn,
    user,
    login,
    logout,
  };

  // Provide the context value to its children
  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};


export const useAuth = () => useContext(AuthContext)