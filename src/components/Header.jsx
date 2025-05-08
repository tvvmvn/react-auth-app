import { Link } from "react-router"
import { useContext } from "react"
import AuthContext from "./AuthContext"

export default function Header() {

  const { user, setUser } = useContext(AuthContext);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>

      <p>Hello {user}!</p>
      <button onClick={() => setUser(null)}>Logout</button>
    </header>
  )
}