function strTrim() {
  var str = document.getElementById("StrValue").value;
  document.getElementById("StrStatus").innerHTML = str.replaceAll(" ", "");
}
