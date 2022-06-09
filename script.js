let xo;
let cell = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let disable = false;

function println(id) {
  let result = document.getElementById("result");
  let id_now = document.getElementById(id);

  if (id_now.innerHTML == "" && disable == false) {
    xo = !xo;
    if (xo == true) {
      cell[id] = 1;
      id_now.innerHTML = "X";
    } else {
      cell[id] = -1;
      id_now.innerHTML = "O";
    }
    if (score()) result.innerHTML = "Winner = ".concat(id_now.innerHTML);
    if (score() == 3) result.innerHTML = "Draw";
  }
}

function score() {
  if (
    check_winner(0, 1, 2) ||
    check_winner(3, 4, 5) ||
    check_winner(6, 7, 8) ||
    check_winner(0, 3, 6) ||
    check_winner(1, 4, 7) ||
    check_winner(2, 5, 8) ||
    check_winner(0, 4, 8) ||
    check_winner(2, 4, 6)
  ) {
    disable = true;
    return true;
  }
  const check_zero = (x) => x != 0;
  if (cell.every(check_zero)) {
    disable = true;
    return 3;
  }
}
function check_winner(d1, d2, d3) {
  let value = cell[d1] + cell[d2] + cell[d3];
  if (value == 3 || value == -3) {
    return true;
  }
}
