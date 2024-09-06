
# Battleship Game

Welcome to the **Battleship Game**. This project is an implementation of the classic Battleship game for web browsers using JavaScript, HTML, and CSS.

## Description

The game allows players to compete against each other or against the computer. Each player has a board where they place their ships, and the goal is to sink all of the opponent's ships. The game handles random ship placement, attacks, and game state visualization.

## Features

- Game Modes: Player vs Player and Player vs Computer.
- Random ship placement.
- Interactive interface with buttons to start the game, randomize ships, and start a new game.
- Turn indicator to show which player is currently playing.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/misafxd/project-battleship.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd project-battleship
   ```
3. **Install dependencies**: Make sure you have Node.js installed. Then, install the project dependencies using npm:
   ```bash
   npm install
   ```
4. **Build the project**: Use Webpack to bundle the project files:
   ```bash
   npm run build
   ```
5. **Open the dist/index.html file in a web browser**: The bundled game is ready to be played in any modern browser.

## Project Source Structure
- src/index.js: Entry point of the application where the game is initialized.
- src/game.js: Game logic, including initialization, event handling, and game state updates.
- src/ship.js: Implementation of the Ship class for the ships.
- src/player.js: Implementation of the Player class for the players.
- src/styles.css: The stylesheet for the game interface.

## Usage
### Select a game mode:
- Click "Player vs Player" to play against another player.
- Click "Player vs Computer" to play against the computer.
### Place the ships:
- Use the "Randomize" button to place ships randomly on the board.
### Start the game:
- Click "Start Game" to begin playing.
### Make attacks:
- Click on the opponent's board cells to attack.
### Restart the game:
- Click "New Game" to start a new game after the current game ends.

## ScreenShots

![image](https://github.com/user-attachments/assets/4c02db4d-22cf-4ce7-9ea3-edce55e56636)

![image](https://github.com/user-attachments/assets/688b77c2-df66-4331-afa3-4825faaeba9a)



## Enjoy playing Battleship!
