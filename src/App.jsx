import { BrowserRouter, Routes, Route, Link } from 'react-router';
import AuthProvider from "./components/AuthProvider";
import AuthRequired from "./components/AuthRequired";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Login from './pages/Login';
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<AuthRequired />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="posts" element={<Posts />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}