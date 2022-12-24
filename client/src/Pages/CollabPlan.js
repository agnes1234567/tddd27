import React, { useEffect, useContext, useRef } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import SocketCotext from "../Contexts/SocketProvider";
import SessionContext from "../Contexts/SessionContext";
import JoinSessionInput from "../Components/Planning/Collab/JoinSessionInput";

function CollabPlan() {
  const { socket } = useContext(SocketCotext);
  const { session } = useContext(SessionContext);

  const navigate = useNavigate();
  const prevSession = useRef(session);

  const leaveCurrentSession = () => {
    if (prevSession.current !== "") {
      socket.emit("leave_session", { session: prevSession.current });
      console.log("Leaving: " + prevSession.current);
      prevSession.current = "";
    }
  };

  const joinSession = () => {
    console.log("Joining: " + session);
    socket.emit("join_session", { session });
    prevSession.current = session;
    navigate(`/session/${session}`);
  };

  useEffect(() => {
    leaveCurrentSession();
    if (session !== "") {
      joinSession();
    }
  }, [session]);

  useEffect(() => {
    if (session !== "") {
      navigate(`/session/${session}`, { replace: true });
    } else {
      leaveCurrentSession();
      navigate(`/session`, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {session ? (
        <>
          <Outlet />
        </>
      ) : (
        <JoinSessionInput />
      )}
    </>
  );
}
export default CollabPlan;
