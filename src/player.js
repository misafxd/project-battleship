import { GameBoard } from './gameboard';
import { Ship } from './ship';

export class Player {
  constructor(name) {
    this.name = name;
    this.board = new GameBoard();
  }
}
