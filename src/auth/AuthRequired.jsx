import { useContext } from 'react';
import AuthContext from "./AuthContext";

export default function AuthRequired({ children }) {
  
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <p>Login first</p>
    )
  }

  return children;
}
