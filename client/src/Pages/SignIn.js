import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import AuthContext from "../Contexts/AuthContext";

function SignIn() {
  const { authenticated, setAuthenticated, msalInstance } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();

  const signInHandler = () => {
    msalInstance.loginPopup().then((loginResponse) => {
      const accountId = loginResponse.account.localAccountId;
      setAuthenticated(true);
      navigate(state?.path || "/");
    });
  };

  const signOutHandler = () => {
    msalInstance.logoutPopup().then(() => {
      setAuthenticated(false);
      navigate("/");
    });
  };

  useEffect(() => {
    if (authenticated) {
      signOutHandler(msalInstance, setAuthenticated);
    } else {
      signInHandler(msalInstance, setAuthenticated);
    }
  });

  return <div className="content"></div>;
}

export default SignIn;
