import { Ship } from './ship';
import { GameBoard } from './gameboard';
import { Player } from './player';
import './styles.css';

const Game = function () {
  const player1 = new Player();
  const player2 = new Player();
  const boards = document.querySelector('.boards-container');
  const board = document.querySelector('.game-board');

  const createCell = (type) => {
    const cell = document.createElement('button');
    cell.classList.add('board-cell');
    if (type === 'empty') {
      cell.classList.add('cell-empty');
    } else if (type === 'ship') {
      cell.classList.add('cell-ship');
    }

    return cell;
  };

  const showGameboard = () => {
    for (let row = 0; row < player1.board.size; row++) {
      for (let col = 0; col < player1.board.size; col++) {
        const cellType =
          player1.board.board[row][col] !== null ? 'ship' : 'empty';
        const cell = createCell(cellType);
        board.appendChild(cell);
      }
    }
  };

  return {
    showGameboard,
  };
};

const game = Game();
game.showGameboard();
