import React, { useState, useEffect } from 'react';
import AttemptHistory from './AttemptHistory';
import InputForm from './InputForm';



function HardGamePage({ wordList }) {
    const [targetWord, setTargetWord] = useState('');
    const [userInput, setUserInput] = useState('');
    const [attempts, setAttempts] = useState(5);
    const [feedback, setFeedback] = useState([]);
    const [gameStatus, setGameStatus] = useState('Hard Mode');
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
      if (userInput.length !== 7) {
        setErrorMessage('Please enter a 7-letter word.');
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
  
      setUserInput(''); 
    }
  
  
    const resetGame = () => {
      const newTargetWord = wordList[Math.floor(Math.random() * wordList.length)];
      setTargetWord(newTargetWord);
      setAttempts(5);
      setUserInput('');
      setFeedback([]);
      setAttemptHistory([]);
      setGameStatus('Hard Mode');
    };
  

    return (
      <div className="game-container">
        <h1>{gameStatus}</h1>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {gameStatus === 'Hard Mode' && <p>Attempts left: {attempts}</p>} 
        {gameStatus === 'Hard Mode' && (
          <InputForm 
          userInput={userInput} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit}
          maxLength={7} 
        />
        )}
        <AttemptHistory attemptHistory={attemptHistory} />
        <button onClick={resetGame}>Reset Game</button>
      </div>
    );
  }
  
  export default HardGamePage;
  