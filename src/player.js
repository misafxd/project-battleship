import { GameBoard } from './gameboard';
import { Ship } from './ship';

export class Player {
  constructor() {
    this.board = new GameBoard();
    this.ships = [];
  }
}
