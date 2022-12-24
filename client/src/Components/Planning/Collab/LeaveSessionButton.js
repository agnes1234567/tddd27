import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SessionContext from "../../../Contexts/SessionContext";
import Button from "@material-ui/core/Button";
import useStyles from "../../../useStyles";

function LeaveSessionButton() {
  const classes = useStyles();
  const { setSession } = useContext(SessionContext);
  const navigate = useNavigate();

  const goBackHandler = () => {
    setSession("");
    navigate("/session");
  };

  return (
    <div className="collab-button">
      <Button className={classes.button} onClick={goBackHandler}>
        Lämna session
      </Button>
    </div>
  );
}

export default LeaveSessionButton;
