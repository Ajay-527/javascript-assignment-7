let stringValue = "";
function isLowercase() {
  var str = document.getElementById("StrValue").value;
  if (str[0].toLowerCase() === str[0]) {
    stringValue = true;
  } else {
    stringValue = false;
  }
  document.getElementById("StrStatus").innerHTML = stringValue;
}
