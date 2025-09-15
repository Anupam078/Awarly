import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ModuleView = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get the module data we passed from the dashboard
  const { module } = location.state || {};

  // If for some reason there's no module, provide a fallback
  if (!module) {
    return (
      <div className="module-view-container">
        <h1>Module not found</h1>
        <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
      </div>
    );
  }

  // Handler for the phishing game buttons
  const handlePhishChoice = (isPhish) => {
    if (isPhish) {
      alert("Correct! This was a phishing attempt. You spotted it!");
    } else {
      alert("Incorrect. This email was safe. Let's review the signs...");
    }
    navigate('/dashboard'); // Go back to the dashboard after the alert
  };

  return (
    <div className="module-view-container">
      <h1>{module.title}</h1>

      {/* We will render different content based on the module type */}
      {module.moduleType === 'PHISHING_GAME' && (
        <div className="phishing-game">
          <p><strong>Instructions:</strong> Read the email below. Is it a legitimate email or a phishing attempt?</p>
          <div className="email-simulation">
            <pre>{module.content}</pre>
          </div>
          <div className="phishing-choices">
            <button className="safe-button" onClick={() => handlePhishChoice(false)}>Looks Safe</button>
            <button className="phish-button" onClick={() => handlePhishChoice(true)}>Report Phish</button>
          </div>
        </div>
      )}

      {module.moduleType === 'QUIZ' && (
         <div className="quiz-container">
            <p><strong>Quiz Instructions:</strong> Read the content below and prepare for questions.</p>
            <div className="quiz-content">
                <p>{module.content}</p>
            </div>
            <button onClick={() => navigate('/dashboard')}>Complete</button>
         </div>
      )}
    </div>
  );
};

export default ModuleView;