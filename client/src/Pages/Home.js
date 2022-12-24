import React, { useContext } from "react";
import SignInButton from "../Components/SignInButton";
import AuthContext from "../Contexts/AuthContext";

function Home() {
  const { authenticated } = useContext(AuthContext);
  return (
    <div className="content">
      <div className="center_text">
      <h1>Hej och välkommen till studieinfo 2.0!</h1>
      <>
        {authenticated ? (
          <div></div>
        ) : (
          <div>
            <h2>
              För att planera din master behöver du logga in med ett
              Microsoft-konto (Exempelvis ditt LiU-konto).
            </h2>
            <SignInButton />
          </div>
        )}
      </>
      </div>
    </div>
  );
}

export default Home;
