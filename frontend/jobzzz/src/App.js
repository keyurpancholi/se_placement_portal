import './App.css';
import Job from './pages/job/Job';
import AddJob from './pages/addJob/AddJob';
import { Routes, Route } from "react-router-dom";
import Profile from './pages/profile/Profile';
import JobDetails from './components/jobDetails/JobDetails';
import React from 'react';
import Signup from "./pages/Signup/Signup"
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/jobs" element={<Job />}/>
      <Route path="/addJob" element={<AddJob />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/jobDetails" element={<JobDetails />}/>
     </Routes>
    </div>
  )
}
export default App;
