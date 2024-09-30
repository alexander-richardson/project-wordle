# Word Game - Wordle Clone

## Project Overview

This project is a Wordle clone, where users have 6 attempts to guess a 5-letter word. As in the original Wordle game, users receive feedback after each guess, helping them determine which letters are correct, misplaced, or incorrect.

### Key Features:
- **6 Guess Limit**: Users can guess a 5-letter word within 6 attempts.
- **Color-coded Feedback**: Each letter's background changes color to indicate its correctness:
  - **Green** for correct letters in the right spot.
  - **Yellow** for correct letters in the wrong spot.
  - **Gray** for incorrect letters.
  
The project was built as part of the _Joy of React_ course, and it allowed me to practice several fundamental concepts in React.

## What I Learned

During this project, I solidified my understanding of several important React concepts:
1. **Component Design**: I created reusable components like `GuessInput` for submitting guesses and `Keyboard` for user interactions.
2. **State Management**: Handling state with `useState` was crucial, especially for tracking guesses, feedback, and the game’s status.
3. **Event Handling**: Implementing controlled input for handling guesses gave me hands-on experience in form management in React.
4. **Conditional Rendering**: I used conditional rendering to show different UI elements based on game outcomes (win/lose) and the number of guesses left.
5. **Handling Game Restart**: I added a "Restart Game" button, allowing users to reset the game and start fresh, reinforcing how to manage complex state changes in React.
   
## Getting Started

This project uses [Parcel](https://parceljs.org/), a modern JavaScript build tool, to streamline development. To run the project locally:
1. Install the necessary dependencies with `npm install`.
2. Start the development server with `npm start`.

For detailed instructions, refer to the [Joy of React local development guide](https://courses.joshwcomeau.com/joy-of-react/project-wordle/03-dev-server).

## Acknowledgements

This project was completed as part of the **Joy of React** course by Josh W. Comeau. The course provided excellent guidance and hands-on exercises that helped deepen my understanding of React.

If you're interested in React and want to improve your skills, I highly recommend checking out the course: [Joy of React](https://courses.joshwcomeau.com/joy-of-react/).
