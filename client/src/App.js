import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import Search from "./FutureWork/Search";
import Plan from "./Pages/Plan";
import SignIn from "./Pages/SignIn";
import Saved from "./FutureWork/Saved";
import CollabPlan from "./Pages/CollabPlan";
import ProtectedRoute from "./Pages/ProtectedRoutes";
import Navbar from "./Components/Navbar";
import CollabPlanComponent from "./Components/Planning/Collab/CollabPlanComponent";
import { SocketProvider } from './Contexts/SocketProvider';
import { AuthProvider } from "./Contexts/AuthContext";

import { SessionProvider } from "./Contexts/SessionContext";



function App() {

  return (
    <div className="App">
  <Router>
    <SocketProvider>
    <AuthProvider>
    <SessionProvider>
    <Navbar/>
    <div className="main">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route element={<ProtectedRoute />}>  
      <Route path="/plan" element={<Plan />}/> 
      <Route path="/session" element={<CollabPlan />}>
        <Route path=":id" element={<CollabPlanComponent />}/>
      </Route>
      <Route path="/search" element={<Search />} />
      <Route path="/saved" element={<Saved />}/> 
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </div>
    </SessionProvider>
    </AuthProvider>
    </SocketProvider>
  </Router>
  </div>
  );
}

export default App;

