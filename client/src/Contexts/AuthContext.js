import { createContext, useState } from "react";
import { PublicClientApplication} from '@azure/msal-browser';

const msalConfig = {
  auth: {
    clientId: process.env.REACT_APP_CLIENT_ID,
    authority: "https://login.microsoftonline.com/common",
    knownAuthorities: [],
    redirectUri: "https://localhost:3000/",
    postLogoutRedirectUri: "https://localhost:3000/",
    navigateToLoginRequestUrl: true,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};


// Create an instance of PublicClientApplication
const msalInstance = new PublicClientApplication(msalConfig);

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{ authenticated, setAuthenticated, user, setUser, msalInstance }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
