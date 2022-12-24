import React from "react";
import { useNavigate, useLocation } from "react-router";
import Button from "@material-ui/core/Button";
import useStyles from "../useStyles";

function SignInButton() {
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();

  const onClickHandler = () => {
    navigate("/login", { state: { path: location.pathname } });
  };

  return (
    <Button className={classes.button} onClick={onClickHandler}>
      Logga in
    </Button>
  );
}

export default SignInButton;
