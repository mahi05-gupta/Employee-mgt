import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const location = useLocation();

  console.log("TOKEN CHECK:", token); // DEBUG

  if (!token) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
}