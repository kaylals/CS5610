function InputForm({ userInput, handleChange, handleSubmit, maxLength }) {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          maxLength={maxLength} 
          autoFocus
        />
        <button type="submit">Guess</button>
      </form>
    );
  }
  
  export default InputForm;
  