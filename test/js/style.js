var h = (new Date()).getHours();
var d = (new Date()).getDate();
var m = (new Date()).getMonth();
var header = document.getElementById("header");
var headline = document.getElementById("headline");
var sheadline = document.getElementById("sheadline");
var subheadline = document.getElementById("subheadline");
var ssubheadline = document.getElementById("ssubheadline");

// if (h >= 18) {
//     header.classList.add("dark");
// } else if (h <= 6) {
//   header.classList.add("dark");
// }
header.classList.add("dark");

if (m == 11) {
  if (d == 24 || d == 25 || d == 26) { //It is Christmas 
    headline.innerHTML = "Happy holidays from ClickMine";
    subheadline.innerHTML = "Why not join us and say hi";
  }
  if (d == 31) {
    headline.innerHTML = "Happy New years from ClickMine";
    subheadline.innerHTML = "New Years Eve";
  }
}
if (m == 0) {
  if(d == 1) {
    headline.innerHTML = "Happy New years from ClickMine";
    subheadline.innerHTML = "New Years Day"
  }
}

