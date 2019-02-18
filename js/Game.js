const Game = (playerX = "X", playerO = "O") => {
    this.grid = new Grid();
    this.playerX = new Player(Square.X, playerX);
    this.playerO = new Player(Square.O, playerO);
    this.turn = this.playerX;
  }
  
  Game.prototype.takeTurn = (row, column) => {
  
    if (this.grid.empty(row, column) &&
        this.grid.setSquare(row, column, this.turn.squareState) !== undefined) {
      const currentState = this.turn.squareState;
      this.changeTurn();
      return currentState;
    }
  
    return "No Wins";
  };
  
  Game.prototype.changeTurn = () => {
    if (this.turn === this.playerX) {
      this.turn = this.playerO;
    } else {
      this.turn = this.playerX;
    }
  };
  
  Game.prototype.winner = () => {
    return this.grid.gridState();
  };
  
  Game.prototype.reset = () => {
    this.turn = this.playerX;
    this.grid.reset();
  };
