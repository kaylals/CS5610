import React, { useState } from 'react';
import Box from './Box';
import Header from './Header';

export default function BoxHandler() {
  const [blackOutState, setBlackOutState] = useState([false, false, false, false]);

  const reverseIsBlackedOut = (index) => {
    setBlackOutState(currentState =>
      currentState.map((state, i) => (i === index ? !state : state)),
    );
  };

  const count = blackOutState.filter(Boolean).length;

  return (
    <div>
        <Header count={count} />
      <div className="box-container">
        {blackOutState.map((isBlack, index) => (
          <Box
            key={index}
            isBlack={isBlack}
            onClick={() => reverseIsBlackedOut(index)}
          />
        ))}
      </div>
    </div>
  );
}