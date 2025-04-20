import { useContext } from 'react';
import AuthContext from "./AuthContext";

export default function AuthStatus() {

  const { user, setUser } = useContext(AuthContext);
  
  return user ? (
    <p>
      Hi, {user}! {" "}
      <button onClick={() => setUser(null)}>Log out</button>
    </p>
  ) : (
    <p>Not logged in</p>
  )
}