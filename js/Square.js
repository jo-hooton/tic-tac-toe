const Square = () => {
    this.state = Square.EMPTY
  }
  
  Square.EMPTY = 0
  Square.X = 1
  Square.O = 2
  
  Square.prototype.x = () => {
    return this.state === Square.X
  };
  
  Square.prototype.o = () => {
    return this.state === Square.O
  };
  
  Square.prototype.empty = () => {
    return this.state === Square.EMPTY
  };
  
  Square.stateToString = (state) => {
    if (state === Square.X) {
      return "X";
    } else if (state === Square.O) {
      return "O";
    } else {
      return "";
    }
  };