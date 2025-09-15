import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  // The <Outlet> component renders the active route's element.
  // e.g., on "/", it renders <RoleSelection />, on "/dashboard", it renders <Dashboard />
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;