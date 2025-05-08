import { useContext, useState } from "react";
import AuthContext from "../components/AuthContext";
import { useNavigate } from "react-router";

export default function Login() {
  
  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
    
  function handleSubmit(e) {
    e.preventDefault();

    setUser(username);

    navigate("/")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label htmlFor="username">Username</label> {" "}
      <input
        id="username"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />
      <p>
        <button type="submit" disabled={!username.trim()}>
          Login
        </button>
      </p>
    </form>
  )
}