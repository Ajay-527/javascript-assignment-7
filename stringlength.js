let stringValue = "";
function strLength() {
  var str = document.getElementById("StrValue").value;
  if (str.length > 4) {
    stringValue = str.slice(0, 4).concat("...");
  } else {
    stringValue = str;
  }
  document.getElementById("StrStatus").innerHTML = stringValue;
}
