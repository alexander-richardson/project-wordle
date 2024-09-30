import React from 'react';

function GuessInput({gameStatus, handleSubmitGuess}) {
  const [tentativeGuess, setTentativeGuess] = React.useState();
  function handleSubmit (event) {
    event.preventDefault()
    handleSubmitGuess(tentativeGuess)
    setTentativeGuess(' ')
  }


  return <div>
    <form onSubmit={handleSubmit}
    className="guess-input-wrapper">
  <label htmlFor="guess-input">Enter guess:</label>
  <input id="guess-input" type="text" 
  required
  disabled={gameStatus !== 'running'}
  minLength={5}
  maxLength={5}
  value={tentativeGuess}
  onChange={(event) => {
    const nextGuess = event.target.value.toUpperCase()
    setTentativeGuess(nextGuess);
  }}/>
</form></div>;
}

export default GuessInput;
