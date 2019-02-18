const Grid = () => {

    this.grid = []
    this.newGame()

}

Grid.TURN = 0;
Grid.X_WINS = 1;
Grid.O_WINS = 2;
Grid.TIE = 3;


Grid.prototype.newGame = () => {
  this.grid = [
                 [new Square(), new Square(), new Square()],
                 [new Square(), new Square(), new Square()], 
                 [new Square(), new Square(), new Square()]
               ];
};

Grid.prototype.setSquare = (row, column, squareState) => {
  if (row >= 0 && row <= 2 && column >= 0 && column <= 2) {
    this.grid[row][column].state = squareState;
    return squareState;
  } 
};

Grid.prototype.squareState = (row, column) => {
  if (row >= 0 && row <= 2 && column >= 0 && column <= 2) {
    return this.grid[row][column].state;
  }
};

Grid.prototype.empty = (row, column) => {
  if (row >= 0 && row <= 2 && column >= 0 && column <= 2) {
    return this.grid[row][column].empty();
  }
};

Grid.prototype.gridState = () => {
  const stateWins = (grid, state) => {
    for(let i = 0; i < 3; i++) {
      if (grid[i][0].state === state &&
          grid[i][1].state === state &&
          grid[i][2].state === state) {
        return true;
      }

      if (grid[0][i].state === state &&
          grid[1][i].state === state &&
          grid[2][i].state === state) {
        return true;
      }
    }

    if (grid[0][0].state === state &&
        grid[1][1].state === state &&
        grid[2][2].state === state) {
      return true;
    }

    if (grid[0][2].state === state &&
        grid[1][1].state === state &&
        grid[2][0].state === state) {
      return true;
    }

    return false;
  };

  const availableSquare = (grid) => {
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        if (grid[i][j].empty()) {
          return true;
        }
      }
    }

    return false;
  };

  if (stateWins(this.grid, Square.X)) {
    return Grid.X_WINS;
  }

  if (stateWins(this.grid, Square.O)) {
    return Grid.O_WINS;
  }

  if (availableSquare(this.grid)) {
    return Grid.PLAYING;
  }

  return Grid.TIE;
};