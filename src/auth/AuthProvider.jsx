import { useState } from 'react';
import AuthContext from "./AuthContext";

export default function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const value = { user, setUser };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}