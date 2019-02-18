const game = new Game();


// let turn = 'x'
// let winner = false
// let gridEntries = []


const clearGrid = () => {
    squares = document.querySelectorAll('.x-o')
    squares.innerHTML = "<div class ='x-o'></div>"
}

const setMessage = message => {
    document.getElementById("message").innerHTML = message
}

document.getElementById("new-game").addEventListener("click", () => {
    game.reset();
    clearGrid();
});

document.getElementById("grid").addEventListener("click", event => {
    if (event.target.classList.contains("square")) {
      squareInfo = event.target.id.split("_");
      row = Number(squareInfo[0]);
      col = Number(squareInfo[1]);
      const value = game.takeTurn(row, col)
      if (value !== "No Win") {
        let stateValue = Square.stateToString(value);
        event.target.innerHTML = `<span class=${stateValue}>${stateValue}</span>`;
      }
      const state = game.winner();

      if (state === Grid.X_WINS) {
        setMessage("X Wins")
      } else if (state === Grid.O_WINS) {
        setMessage("O Wins");
      } else if (state === Grid.DRsAW) {
        setMessage("Draw");
      }
    }
  })


// takeTurn = (id) => {
//     const square = document.getElementById(id)
//     if(turn == 'x') {
//         square.innerHTML = "<div class ='x-o'>X</div>"
//         square.parentElement.onclick = null
//         turn = 'o'
//     } else if(turn == 'o') {
//         square.innerHTML = "<div class ='x-o'>0</div>"
//         square.parentElement.onclick = null
//         turn = 'x'
//     }
// }

//     makeEntry()
//     winningResult(turn)
//     if(winner) {
//         turn == 'x' ? winningPlayer = 'O' : winningPlayer = 'X'
//         message.innerHTML = ("<h2>Player " + winningPlayer + " wins!</h2>")
//     }

// }

// makeEntry = () => {
//     gridEntries = []
//     for(let i = 1; i <= 9; i++) {
//         square = document.getElementById(i)
//         if(square.innerText) {
//            gridEntries.push(square.innerText)
//         } else {
//            gridEntries.push(null)
//         }
//     }
// }

// winningResult = () => {
//     gridEntries[0] === gridEntries[1] === gridEntries[2] !== "" ||
//     gridEntries[0] === gridEntries[3] === gridEntries[6] !== "" ||
//     gridEntries[0] === gridEntries[4] === gridEntries[8] !== "" ||
//     gridEntries[1] === gridEntries[4] === gridEntries[7] !== "" ||
//     gridEntries[2] === gridEntries[4] === gridEntries[6] !== "" ||
//     gridEntries[2] === gridEntries[5] === gridEntries[8] !== "" ||
//     gridEntries[3] === gridEntries[4] === gridEntries[5] !== "" ||
//     gridEntries[6] === gridEntries[7] === gridEntries[8]
//     {
//        winner = true
//     } 
// }






// init = () => {
//     clearGrid()
//     turn = 'x'
// }

