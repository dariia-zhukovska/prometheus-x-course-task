import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IAuthContext } from "../types";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const navigate = useNavigate();

  const logIn = (username: string) => {
    localStorage.setItem(`username`, username);
    setUsername(username);
    navigate("/book-list");
  };

  const logOut = () => {
    localStorage.removeItem("username");
    setUsername(null);
    navigate("/");
  };

  const authContextValue: IAuthContext = { username, logIn, logOut };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
