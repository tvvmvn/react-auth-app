import { Link } from "react-router";

export default function Posts() {
  return (
    <>
      <h1>Posts</h1>
      <ul>
        <li>
          <Link to="/post/p0">Post 1</Link>
        </li>
        <li>
          <Link to="/post/p1">Post 2</Link>
        </li>
      </ul>
    </>
  )
}