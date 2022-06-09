let xo;

function println(id) {
  var elem = document.getElementById("para");
  if (id == 1) elem.style.color = "red";
  if (id == 2) elem.style.color = "blue";
  xo = !xo;
  if (xo == true) document.getElementById(id).innerHTML = "X";
  else document.getElementById(id).innerHTML = "O";
}
// function write(id) {
//   round_count++;
//   if (game_over == 0) {
//     if (flag == 0) {
//       document.getElementById(id).innerHTML = "X";
//       document.getElementById(id).onclick = "";
//       result_list[id] = "X";
//       flag = 1;
//     } else {
//       document.getElementById(id).innerHTML = "O";
//       document.getElementById(id).onclick = "";
//       result_list[id] = "O";
//       flag = 0;
//     }
//   } else {
//     document.getElementById(id).onclick = "";
//   }
//   check_winner();
// }
