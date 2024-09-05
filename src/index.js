import { Ship } from './ship';
import { Player } from './player';
import './styles.css';

const Game = function () {
  let player1;
  let player2;
  let currentPlayer;
  let gameMode;
  let gameStatus = true;
  let name1;
  let name2;
  const container = document.querySelector('.message-section');
  const board1 = document.querySelector('.game-board-1');
  const board2 = document.querySelector('.game-board-2');
  const turn = document.querySelector('.turn-indicator');
  const message = document.querySelector('.game-message');
  const newGameButton = document.createElement('button');
  newGameButton.textContent = 'New Game';
  newGameButton.id = 'new-game';

  const Ships = [
    {
      name: 'Carrier',
      size: 4,
      quantity: 1,
    },
    {
      name: 'Battleship',
      size: 3,
      quantity: 2,
    },
    {
      name: 'Cruiser',
      size: 2,
      quantity: 3,
    },
    {
      name: 'Submarine',
      size: 1,
      quantity: 4,
    },
  ];

  const newGame = () => {
    name1 = document.querySelector('.player-name-1').textContent;
    player1 = new Player(name1);
    if (gameMode === 'player-vs-computer') {
      player2 = new Player('Computer');
    } else {
      name2 = document.querySelector('.player-name-2');
      player2 = new Player('Player 2');
    }
    currentPlayer = player1;

    setShips(player1);
    setShips(player2);
    showGameboard();

    newGameButton.remove();
    if (message.firstChild) {
      message.firstChild.remove();
    }
  };

  const setShips = (player) => {
    Ships.forEach((shipType) => {
      for (let i = 0; i < shipType.quantity; i++) {
        let placed = false;
        while (!placed) {
          try {
            const x = Math.floor(Math.random() * 10);
            const y = Math.floor(Math.random() * 10);
            const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
            player.board.placeShip(x, y, new Ship(shipType.size), orientation);
            placed = true;
          } catch (error) {}
        }
      }
    });
  };

  const switchPlayer = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    if (
      gameMode === 'player-vs-computer' &&
      currentPlayer === player2 &&
      gameStatus
    ) {
      setTimeout(computerTurn, 500);
    }
    showturn();
  };

  const showturn = () => {
    turn.textContent = `${currentPlayer.name} turn`;
    updateBoardInteractivity();
  };

  const createCell = (type, row, col) => {
    const cell = document.createElement('button');
    cell.classList.add('board-cell');
    cell.dataset.row = row;
    cell.dataset.col = col;
    cell.dataset.attacked = 'false';
    if (type === 'empty') {
      cell.classList.add('cell-empty');
    } else if (type === 'ship') {
      cell.classList.add('cell-ship');
    }
    cell.addEventListener('click', attackHandler);

    return cell;
  };

  const renderBoard = (board, container) => {
    container.innerHTML = '';
    board.board.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        const cellType = cell !== null ? 'ship' : 'empty';
        const cellElement = createCell(cellType, rowIndex, cellIndex);
        container.appendChild(cellElement);
      });
    });
  };

  const showGameboard = () => {
    renderBoard(player1.board, board1);
    renderBoard(player2.board, board2);
    showturn();
  };

  const computerTurn = () => {
    const availableCells = Array.from(
      board1.querySelectorAll('.board-cell'),
    ).filter((cell) => cell.dataset.attacked === 'false');

    if (availableCells.length === 0) {
      return;
    }

    const randomCell =
      availableCells[Math.floor(Math.random() * availableCells.length)];
    const row = randomCell.dataset.row;
    const col = randomCell.dataset.col;

    attackCell(row, col);
  };

  const attackCell = (row, col) => {
    const cell = board1.querySelector(
      `.board-cell[data-row="${row}"][data-col="${col}"]`,
    );

    if (cell.dataset.attacked === 'true') {
      return;
    }

    if (cell.classList.contains('cell-ship')) {
      cell.classList.remove('cell-ship');
      cell.classList.add('cell-hit');
    } else if (cell.classList.contains('cell-empty')) {
      cell.classList.remove('cell-empty');
      cell.classList.add('cell-miss');
    }

    cell.dataset.attacked = 'true';
    switchPlayer();
    currentPlayer.board.receiveAttack(row, col);
    showWinner();
  };

  const attackHandler = (event) => {
    const cell = event.currentTarget;
    if (cell.dataset.attacked === 'true') {
      return;
    }
    const row = cell.dataset.row;
    const col = cell.dataset.col;

    if (cell.classList.contains('cell-ship')) {
      cell.classList.remove('cell-ship');
      cell.classList.add('cell-hit');
    } else if (cell.classList.contains('cell-empty')) {
      cell.classList.remove('cell-empty');
      cell.classList.add('cell-miss');
    }

    cell.dataset.attacked = 'true';
    switchPlayer();
    currentPlayer.board.receiveAttack(row, col);
    showWinner();
  };

  const showWinner = () => {
    if (currentPlayer.board.allSunk()) {
      switchPlayer();
      message.textContent = `${currentPlayer.name} wins`;
      turn.textContent = '';
      newGameButton.style.display = 'block';

      gameStatus = false;
      newGameButton.addEventListener('click', init);
      container.appendChild(newGameButton);
    }
  };

  const updateBoardInteractivity = () => {
    if (currentPlayer === player1) {
      board1
        .querySelectorAll('.board-cell')
        .forEach((cell) => (cell.disabled = true));
      board2
        .querySelectorAll('.board-cell')
        .forEach((cell) => (cell.disabled = false));
    } else {
      board2
        .querySelectorAll('.board-cell')
        .forEach((cell) => (cell.disabled = true));
      board1
        .querySelectorAll('.board-cell')
        .forEach((cell) => (cell.disabled = false));
    }
  };

  const init = () => {
    const selection = document.querySelector('.mode-selection');
    selection.style.display = 'block';
    newGameButton.style.display = 'none';
    message.textContent = '';
    board1.innerHTML = '';
    board2.innerHTML = '';
    document
      .getElementById('player-vs-player')
      .addEventListener('click', () => {
        gameMode = 'player-vs-player';
        newGame();
        selection.style.display = 'none';
      });
    document
      .getElementById('player-vs-computer')
      .addEventListener('click', () => {
        gameMode = 'player-vs-computer';
        newGame();
        selection.style.display = 'none';
      });
  };

  return {
    init,
  };
};

const game = Game();

game.init();
