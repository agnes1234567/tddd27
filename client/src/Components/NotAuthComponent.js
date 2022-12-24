import React from "react";
import { useNavigate, useLocation } from "react-router";
import SignInButton from "./SignInButton";

function NotAuthComponent() {
  const location = useLocation();
  const navigate = useNavigate();
  const page = location.pathname.split("/")[1];

  return (
    <div className="content">
      <div className="center_text">
        {page === "plan" ? (
          <h3>
            Här kan du som inloggad användare planera en termin av din master.
          </h3>
        ) : page === "session" ? (
          <h3>
            Här kan du som inloggad användare planera en termin av din master
            tillsammans med dina vänner.
          </h3>
        ) : (
          <div></div>
        )}
        <div>
          <p>
            För att logga in på hemsidan krävs endast ett Microsoft-konto. Du
            kan använda ditt LiU-konto eller annat privat konto.
          </p>
          <SignInButton />
        </div>
      </div>
    </div>
  );
}

export default NotAuthComponent;
