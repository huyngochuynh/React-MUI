import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const signOut = () => {
    setIsLoggedIn(false);
    setUsername("")
  }

  const signIn = () => {
    setIsLoggedIn(true);
    console.log(isLoggedIn)
  }

  const saveUserName = (name) => {
    setUsername(name);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, signOut, signIn, saveUserName }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };