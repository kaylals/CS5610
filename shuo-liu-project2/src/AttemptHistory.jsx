import React from 'react';
import Feedback from './Feedback'; 

function AttemptHistory({ attemptHistory }) {
  return (
    <div className="attempt-history">
      {attemptHistory.map((attempt, index) => (
        <Feedback key={index} feedback={attempt} />
      ))}
    </div>
  );
}

export default AttemptHistory;
