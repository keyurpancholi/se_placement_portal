import './App.css';
import Job from './pages/job/Job';
import AddJob from './pages/addJob/AddJob';
import { Routes, Route } from "react-router-dom";
import Profile from './pages/profile/Profile';
import JobDetails from './components/jobDetails/JobDetails';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/jobs" element={<Job />}/>
      <Route path="/addJob" element={<AddJob />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/jobDetails" element={<JobDetails />}/>
     </Routes>
    </div>
  );
}

export default App;
