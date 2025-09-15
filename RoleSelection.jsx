import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ROLES = ["Software Developer", "HR Manager", "Sales/Marketing Professional"];

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedRole) {
      // Navigate to the dashboard AND pass the selected role in the "state"
      navigate('/dashboard', { state: { role: selectedRole } });
    }
  };

  return (
    <div className="role-selection-container">
      <h1>Select Your Role</h1>
      <p>Choose your job function to get personalized security training.</p>
      <div className="role-buttons">
        {ROLES.map((role) => (
          <button
            key={role}
            className={`role-button ${selectedRole === role ? 'selected' : ''}`}
            onClick={() => setSelectedRole(role)}
          >
            {role}
          </button>
        ))}
      </div>
      <button className="continue-button" disabled={!selectedRole} onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

export default RoleSelection;