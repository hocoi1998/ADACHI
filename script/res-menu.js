var icon = document.getElementById("res-icon");
var res = document.getElementById("res-menu");

icon.onclick = change;

function change() {
  res.classList.toggle("res__menu--active");
}