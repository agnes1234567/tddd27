import { Button, Input } from "@material-ui/core";
import React, { useContext, useState, useEffect } from "react";
import SessionContext from "../../../Contexts/SessionContext";
import useStyles from "../../../useStyles";

function JoinSessionInput() {
  const classes = useStyles();
  const { setSession } = useContext(SessionContext);

  const [showInputBox, setShowInputBox] = useState(false);
  const [input, setInput] = useState("");
  const [joinButtonPressed, setJoinButtonPressed] = useState(false);

  const handleInputChange = (event) => {
    if (event.target.value !== "") {
      setInput(event.target.value);
    }
  };

  const joinSessionHandler = () => {
    setJoinButtonPressed(true);
  };

  useEffect(() => {
    if (input !== "") {
      setSession(input);
    }
  }, [joinButtonPressed]);

  const joinOptHandler = () => {
    setShowInputBox(true);
  };

  return (
    <div className="content">
      <div className="center_text">
        {showInputBox ? (
          <div>
            <h3>Välj ett rum att gå med i:</h3>
            <div className="join_session">
          <Input className={classes.input} onChange={handleInputChange}></Input>
          <Button className={classes.button} onClick={joinSessionHandler}>Gå med</Button>
        </div></div>     
        ) : (
          <div className="options">
            <div>
              <Button className={classes.button}  onClick={joinOptHandler}>Gå med i session</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default JoinSessionInput;
