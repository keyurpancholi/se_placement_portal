import "./App.css";
import Job from "./pages/job/Job";
import AddJob from "./pages/addJob/AddJob";
import { Routes, Route, useNavigate } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import JobDetails from "./components/jobDetails/JobDetails";
import React, {useState} from "react";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
// import Home from "./pages/Home/Home";
import AdminLogin from "./pages/adminLogin/AdminLogin";
import HomePage from "./pages/homepage/HomePage"


function App() {

  const navigate = useNavigate()
  const [isAdmin, setIsAdmin] = useState(false);

  const loginHandler = () => {
    setIsAdmin(true);
  };

  const logoutHandler = () => {
    navigate('/')
    setIsAdmin(false)    
  }



  return (
    <div className="App">
      <Routes>
        {/* <Route exact path="/" element={<Home />}></Route> */}
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/jobs" element={<Job isAdmin={isAdmin} />} isLogout={logoutHandler} />
        <Route path="/addJob" element={<AddJob isAdmin={isAdmin} isLogout={logoutHandler} />} />
        <Route path="/profile" element={<Profile isAdmin={isAdmin} isLogout={logoutHandler} />} />
        <Route path="/jobDetails/:jobId" element={<JobDetails isAdmin={isAdmin} isLogout={logoutHandler} />} />
        <Route
          path="/admin/login"
          element={<AdminLogin checkAdmin={loginHandler} />}
        />
      </Routes>
    </div>
  );
}
export default App;
