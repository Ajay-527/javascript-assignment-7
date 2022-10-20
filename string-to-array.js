function strToArray() {
  var str = document.getElementById("StrValue").value;
  document.getElementById("ArrayElements").innerHTML = str.split(" ");
}
