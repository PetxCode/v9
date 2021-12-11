import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./GlobalState";

const Private = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  return currentUser ? children : <Navigate to="/register" />;
};

export default Private;
