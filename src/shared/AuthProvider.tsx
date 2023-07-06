import React, { createContext, useContext, useState } from "react";

import { useHttp } from "./Http/useHttp";
import CustomSnackBar from "./CustomSnackbar";

interface User {
  name?: string;
  password: string;
  email: string;
}

interface AuthContextProps {
  isLoggedIn: boolean;
  user: User | null;
  login: (userCredentials: User) => void;
  logout: () => void;
  register: (userCredentials: User) => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC<any> = ({ children }) => {
  const http = useHttp();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [open, setOpen] = React.useState(false);
  const [error, setError] = useState<undefined | string>(undefined)


  const register = async (userCredentials: User) => {
    try {
      await http.post("/api/v1/auth/signup", userCredentials);
    } catch (err: any) {
      //
      setError(err.response.data?.msg)
      setOpen(true)
    }
    setIsLoggedIn(true);
    setUser(userCredentials);
  };
  const login = async (userCredentials: User) => {
    try {
      await http.post("/api/v1/auth/signin", userCredentials);

      await http.get("/me");
    } catch (err: any) {
      setError(err.response.data?.msg)
      setOpen(true)

    }

    setIsLoggedIn(true);
    setUser(userCredentials);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const authContextValue: AuthContextProps = {
    isLoggedIn,
    user,
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      <CustomSnackBar message={error} open={open} severity="error" />
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
