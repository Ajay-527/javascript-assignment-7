function replaceChart() {
  var str = document.getElementById("StrValue").value;
  document.getElementById("StrStatus").innerHTML = str.replace("a", "x");
}
