import "./App.css";
import Job from "./pages/job/Job";
import AddJob from "./pages/addJob/AddJob";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import JobDetails from "./components/jobDetails/JobDetails";
import React, {useState} from "react";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import AdminLogin from "./pages/adminLogin/AdminLogin";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const loginHandler = () => {
    setIsAdmin(true);
  };

  const viewSingleJobHandler = (job) => {
    
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/jobs" element={<Job isAdmin={isAdmin} />} viewJob={viewSingleJobHandler}  />
        <Route path="/addJob" element={<AddJob isAdmin={isAdmin} />} />
        <Route path="/profile" element={<Profile isAdmin={isAdmin} />} />
        <Route path="/jobDetails" element={<JobDetails isAdmin={isAdmin} />} />
        <Route
          path="/admin/login"
          element={<AdminLogin checkAdmin={loginHandler} />}
        />
      </Routes>
    </div>
  );
}
export default App;
