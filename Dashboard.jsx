import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import axios from 'axios';

const getRoleKey = (roleString) => {
  if (roleString.includes("Software Developer")) return "DEVELOPER";
  if (roleString.includes("HR Manager")) return "HR";
  if (roleString.includes("Sales/Marketing")) return "SALES";
  return "UNKNOWN";
};

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate(); // 2. Initialize useNavigate
  const userRole = location.state?.role || "Not Selected";
  const userName = "Anupam";

  const [modules, setModules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userRole && userRole !== "Not Selected") {
      const formattedRole = getRoleKey(userRole);
      axios.get(`http://localhost:8080/api/v1/modules?role=${formattedRole}`)
        .then(response => { setModules(response.data); setIsLoading(false); })
        .catch(error => { console.error(error); setError("Could not load modules."); setIsLoading(false); });
    } else { setIsLoading(false); setError("No role selected."); }
  }, [userRole]);

  // 3. Create a function to handle clicking the start button
  const handleStartModule = (module) => {
    navigate(`/module/${module.id}`, { state: { module: module } });
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Awarely Dashboard</h1>
        <div className="user-info">Welcome, {userName} ({userRole} Track)</div>
      </header>
      <main className="modules-grid">
        <h2>Your Learning Modules</h2>
        {isLoading && <p>Loading modules...</p>}
        {error && <p style={{color: 'red'}}>{error}</p>}
        {!isLoading && !error && modules.map(module => (
          <div key={module.id} className="module-card">
            <h3>{module.title}</h3>
            <p>{module.content}</p>
            {/* 4. Call our new function when the button is clicked */}
            <button onClick={() => handleStartModule(module)}>Start</button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Dashboard;