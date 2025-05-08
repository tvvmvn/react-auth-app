import { useEffect, useState } from 'react';
import AuthContext from "./AuthContext";

export default function AuthProvider({ children }) {

  const initialUser = JSON.parse(localStorage.getItem("authUser"));
  const [user, setUser] = useState(initialUser);
  const value = { user, setUser };

  // synchronize storage
  useEffect(() => {
    if (user) {
      localStorage.setItem("authUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("authUser");
    }
  }, [user])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}