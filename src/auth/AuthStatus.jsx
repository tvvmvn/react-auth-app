import { useState, useContext } from 'react';
import AuthContext from "./AuthContext";

export default function AuthStatus() {

  const { user, setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();

    setUser(username);
  }

  return user ? (
    <p>
      Hi, {user}! {" "}
      <button onClick={() => setUser(null)}>Log out</button>
    </p>
  ) : (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  )
}