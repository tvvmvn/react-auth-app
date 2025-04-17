import { BrowserRouter, Routes, Route, Link } from 'react-router';
import AuthProvider from "./auth/AuthProvider";
import AuthRequired from "./auth/AuthRequired";
import AuthStatus from "./auth/AuthStatus";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
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

        <AuthStatus />

        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="posts" element={<Posts />} />
          <Route path="post/:postId" element={
            <AuthRequired>
              <Post />
            </AuthRequired>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}