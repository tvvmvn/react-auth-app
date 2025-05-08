import { useContext } from 'react';
import { Outlet, Navigate } from "react-router";
import AuthContext from "./AuthContext";

export default function AuthRequired() {
  
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace={true} />
  }

  return <Outlet />
}
