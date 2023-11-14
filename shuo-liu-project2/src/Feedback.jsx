import React from 'react';

function Feedback({ feedback }) {
  return (
    <div>
      {feedback.map((f, idx) => (
        <span key={idx} style={{ backgroundColor: f.backgroundColor, color: 'black' }}>
          {f.letter.toUpperCase()}
        </span>
      ))}
    </div>
  );
}

export default Feedback;
