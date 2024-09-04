import { Ship } from './ship';
import { GameBoard } from './gameboard';
import { Player } from './player';

describe('Ship methods', () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(5);
  });

  describe('hit()', () => {
    it('should increase the hit count by 1 each time it is called', () => {
      ship.hit();
      expect(ship.hits).toBe(1);
      ship.hit();
      expect(ship.hits).toBe(2);
    });
  });

  describe('isSunk()', () => {
    beforeEach(() => {
      ship = new Ship(3);
    });

    it('should return false if the ship is not sunk', () => {
      ship.hit();
      expect(ship.isSunk()).toBeFalsy();
      ship.hit();
      expect(ship.isSunk()).toBeFalsy();
    });

    it('should return true if the ship is sunk', () => {
      ship.hit();
      ship.hit();
      ship.hit();
      expect(ship.isSunk()).toBeTruthy();
    });
  });
});

describe('Gameboard methods', () => {
  let gameboard;
  let ship;

  beforeEach(() => {
    gameboard = new GameBoard();
    ship = new Ship(5);
  });

  test(' should be able to place ships at horizontal coordinates', () => {
    gameboard.placeShip(2, 1, ship, 'horizontal');
    for (let i = 0; i < ship.length; i++) {
      expect(gameboard.board[2][1 + i]).toBe(ship);
    }
  });

  test('should be able to place ships at vertical coordinates', () => {
    gameboard.placeShip(4, 3, ship, 'vertical');
    for (let i = 0; i < ship.length; i++) {
      expect(gameboard.board[4 + i][3]).toBe(ship);
    }
  });

  test('should throw an error when it tries to place a ship outside the board', () => {
    expect(() => {
      gameboard.placeShip(0, 9, ship, 'horizontal');
    }).toThrow(Error);
  });

  test('should push a ship into ships when it is placed', () => {
    gameboard.placeShip(0, 0, ship, 'horizontal');
    let gameboardShips = gameboard.ships.length;
    expect(gameboardShips).toBe(1);
    let ship2 = new Ship(3);
    gameboard.placeShip(3, 0, ship2, 'horizontal');
    gameboardShips = gameboard.ships.length;
    expect(gameboardShips).toBe(2);
  });

  test('should call the hot method on the correct ship if the attack hits', () => {
    const hitSpy = jest.spyOn(ship, 'hit');
    gameboard.placeShip(0, 0, ship, 'horizontal');
    gameboard.receiveAttack(0, 1);
    expect(hitSpy).toHaveBeenCalled();
    expect(ship.hits).toBe(1);
  });

  test('should track if the attack fails', () => {
    gameboard.placeShip(0, 0, ship, 'horizontal');
    expect(gameboard.receiveAttack(1, 1)).toBeFalsy();
    expect(gameboard.missedAttacks).toHaveLength(1);
  });

  test('should calculates if a ship is sunk based on its length and hits', () => {
    gameboard.placeShip(0, 0, ship, 'horizontal');
    gameboard.receiveAttack(0, 0);
    expect(ship.isSunk()).toBeFalsy();
    gameboard.receiveAttack(0, 1);
    expect(ship.isSunk()).toBeFalsy();
    gameboard.receiveAttack(0, 2);
    expect(ship.isSunk()).toBeFalsy();
    gameboard.receiveAttack(0, 3);
    expect(ship.isSunk()).toBeFalsy();
    gameboard.receiveAttack(0, 4);
    expect(ship.isSunk).toBeTruthy();
  });
});

describe('Player methods', () => {
  let player1;
  beforeEach(() => {
    player1 = new Player();
  });

  test('each player should contain its own gameboard', () => {
    expect(player1).toHaveProperty('board');
  });
});
