import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import AuthContext from "../Contexts/AuthContext";
import NotAuthComponent from "../Components/NotAuthComponent";

function ProtectedRoutes() {
  const { authenticated} =
    useContext(AuthContext);

  return (
        <>{authenticated ? <Outlet /> : <NotAuthComponent />}</>
  );
}

export default ProtectedRoutes;
