import { useState, useContext } from 'react';
import AuthContext from "./AuthContext";

export default function AuthRequired({ children }) {
  
  const { user, setUser } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();

    setUser(username);
  }

  if (!user) {
    return (
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    )
  }

  return children;
}
