# Angular Tic-Tac-Toe Game

A simple but elegant Tic-Tac-Toe game built with Angular.

## Features

- Responsive game board centered on the screen
- Clear X and O markers in black color
- Score tracking for both players and ties
- Reset game and score functionality
- Modern UI with smooth transitions

## Screenshots

- Game in action with player X and O
- Responsive layout that works on mobile and desktop

## How to Run

1. Clone this repository
2. Navigate to the project directory
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   ng serve
   ```
5. Open your browser and navigate to `http://localhost:4200/`

## How to Play

1. The game starts with player X
2. Players take turns clicking on the grid to place their mark
3. The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins
4. If all cells are filled and no player has won, the game ends in a tie
5. Use the "Reset Game" button to start a new game
6. Use the "Reset Scores" button to reset the scoreboard

## Technologies Used

- Angular 19
- TypeScript
- SCSS for styling
- RxJS for state management

## Project Structure

- `app.component`: Main application component
- `game-board.component`: Game board UI and game play interactions
- `score-board.component`: Score tracking and display
- `game.service`: Game logic, state management, and score tracking

Enjoy the game!
