import React from 'react';

import {NUM_OF_GUESSES_ALLOWED} from '../../constants'
import { range } from '../../utils';

import Guess from '../Guess';

function GuessResults({guesses, answer }) {
return <div>
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num )=> (
        <Guess key = {num} value={guesses[num]} answer={answer} />
      ))}</div>
  </div>;
}

export default GuessResults;
