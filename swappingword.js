function strWordSwap() {
  var str = document.getElementById("StrValue").value;
  document.getElementById("StrStatus").innerHTML = str
    .split(" ")
    .reverse()
    .join(" ");
}
