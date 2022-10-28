import './App.css';
import React from 'react';
import {Route, Routes} from "react-router-dom"
import Signup from "./pages/Signup/Signup"
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
