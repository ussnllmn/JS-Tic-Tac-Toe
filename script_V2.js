let xo;
let cell = ["", "", "", "", "", "", "", "", ""];
let disable = false;
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function println(id) {
  let result = document.getElementById("result");
  let id_now = id;

  if (id_now.innerHTML == "" && disable == false) {
    xo = !xo;
    if (xo == true) {
      cell[id.id] = "X";
      id_now.innerHTML = "X";
    } else {
      cell[id.id] = "O";
      id_now.innerHTML = "O";
    }

    if (score()) result.innerHTML = "Winner = ".concat(id_now.innerHTML);
    if (score() == false) result.innerHTML = "Draw";
  }
}

function score() {
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    const a = cell[winCondition[0]];
    const b = cell[winCondition[1]];
    const c = cell[winCondition[2]];

    if (a === "" || b === "" || c === "") continue;
    if (a === b && b === c) {
      disable = true;
      return true;
    }
    if (i == 7) return false;
  }
}
