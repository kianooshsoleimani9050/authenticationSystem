import { Routes, Route, Navigate } from "react-router-dom";
import { useUserAuthenticateState } from "../../hooks/useUserAuthenticate";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import UserDetail from "../pages/UserDetail";
import PrivateRoute from "./PrivateRoute";
const RoutesList = () => {
  const isUserAuthenticated = useUserAuthenticateState();
  return (
    <Routes>
      <Route
        path="/sign-in"
        element={isUserAuthenticated ? <Navigate to="/" /> : <SignIn />}
      />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/user/:id"
        element={
          <PrivateRoute>
            <UserDetail />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default RoutesList;
