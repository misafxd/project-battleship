import { Ship } from './ship';

export class GameBoard {
  constructor() {
    this.size = 10;
    this.board = this.createBoard();
    this.ships = [];
    this.missedAttacks = [];
  }

  createBoard() {
    return Array.from({ length: this.size }, () => Array(this.size).fill(null));
  }

  placeShip(x, y, ship, orientation) {
    if (orientation === 'horizontal') {
      if (y + ship.length > this.size) {
        throw new Error('Ship cannot be placed outside the board.');
      }
      for (let i = 0; i < ship.length; i++) {
        if (this.board[x][y + i] !== null) {
          throw new Error('Ship cannot be placed on top of another ship.');
        }
      }
      for (let i = 0; i < ship.length; i++) {
        this.board[x][y + i] = ship;
      }
      this.ships.push(ship);
    } else if (orientation === 'vertical') {
      if (x + ship.length > this.size) {
        throw new Error('Ship cannot be placed outside the board.');
      }
      for (let i = 0; i < ship.length; i++) {
        if (this.board[x + i][y] !== null) {
          throw new Error('Ship cannot be placed on top of another ship.');
        }
      }
      for (let i = 0; i < ship.length; i++) {
        this.board[x + i][y] = ship;
      }
      this.ships.push(ship);
    } else {
      throw new Error('Invalid orientation.');
    }
  }

  receiveAttack(x, y) {
    if (this.board[x][y] !== null) {
      this.board[x][y].hit();
      return true;
    } else {
      this.missedAttacks.push([x, y]);
      return false;
    }
  }
}
