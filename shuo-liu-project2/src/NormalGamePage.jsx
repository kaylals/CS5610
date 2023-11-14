import React, { useState, useEffect } from 'react';
import AttemptHistory from './AttemptHistory';
import InputForm from './InputForm';



function NormalGamePage({ wordList }) {
  const [targetWord, setTargetWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [attempts, setAttempts] = useState(6);
  const [feedback, setFeedback] = useState([]);
  const [gameStatus, setGameStatus] = useState('Normal Mode');
  const [attemptHistory, setAttemptHistory] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');


  useEffect(() => {
    const newTargetWord = wordList[Math.floor(Math.random() * wordList.length)];
    setTargetWord(newTargetWord);
  }, [wordList]);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.length !== 6) {
      setErrorMessage('Please enter a 6-letter word.'); 
      return;
    }
    setErrorMessage('');


    const newFeedback = userInput.split('').map((letter, index) => {
      if (targetWord[index] === letter) {
        return { letter, backgroundColor: 'green' };
      } else if (targetWord.includes(letter)) {
        return { letter, backgroundColor: 'yellow' };
      }
      return { letter, backgroundColor: 'grey' };
    });

    setFeedback(newFeedback);
    setAttemptHistory([...attemptHistory, newFeedback]);
    setUserInput('');
    const newAttempts = attempts - 1;
    setAttempts(newAttempts);

    if (userInput === targetWord) {
      setGameStatus('Congratulations! Would you like to try again?');
    } else if (newAttempts <= 0) {
        setGameStatus(`Game over! The word was ${targetWord}.`);
      }
    };


  const resetGame = () => {
    const newTargetWord = wordList[Math.floor(Math.random() * wordList.length)];
    setTargetWord(newTargetWord);
    setAttempts(6);
    setUserInput('');
    setFeedback([]);
    setAttemptHistory([]);
    setGameStatus('Normal Mode');
  };

  return (
    <div className="game-container">
      <h1>{gameStatus}</h1>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {gameStatus === 'Normal Mode' && <p>Attempts left: {attempts}</p>} 
      {gameStatus === 'Normal Mode' && (
        <InputForm 
          userInput={userInput} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit}
          maxLength={6} 
        />
      )}
      <AttemptHistory attemptHistory={attemptHistory} />
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}

export default NormalGamePage;
