import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState();
  function handleSubmit (event) {
    event.preventDefault()
    console.log({ guess })
    setGuess(' ')
  }


  return <div>
    <form onSubmit={handleSubmit}
    className="guess-input-wrapper">
  <label htmlFor="guess-input">Enter guess:</label>
  <input id="guess-input" type="text" 
  required
  minLength={5}
  maxLength={5}
  value={guess}
  onChange={(event) => {
    const nextGuess = event.target.value.toUpperCase()
    setGuess(nextGuess);
  }}/>
</form></div>;
}

export default GuessInput;
