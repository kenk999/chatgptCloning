import React from 'react';
import { useNavigate } from 'react-router-dom';
import './comingSoon.css';

const ComingSoon = () => {
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="comingSoon">
      <div className="comingSoonContainer">
        <div className="comingSoonContent">
          <div className="comingSoonIcon">🚀</div>
          <h1 className="comingSoonTitle">Coming Soon!</h1>
          <p className="comingSoonMessage">
            Casca AI Pro is under development. Stay tuned!
          </p>
          <p className="comingSoonSubMessage">
            I am working hard to bring you premium AI features like unlimited chats, 
            priority support, advanced models, and much more amazing capabilities.
          </p>
          <div className="features">
            <div className="feature">⚡ Unlimited Chats</div>
            <div className="feature">🎯 Priority Support</div>
            <div className="feature">🧠 Advanced AI Models</div>
            <div className="feature">📊 Analytics Dashboard</div>
          </div>
          <button 
            className="backToDashboardButton" 
            onClick={handleBackToDashboard}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
