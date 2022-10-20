function upperCase() {
  var str = document.getElementById("Uppercase").value;
  document.getElementById("UpperStatus").innerHTML = str.toUpperCase();
}

function firstCharUpperCase() {
  var str = document.getElementById("Firstchar").value;
  document.getElementById("FirstcharStatus").innerHTML = str.replace(
    str[0],
    str[0].toUpperCase()
  );
}

function lowerCaseCovertion() {
  var str = document.getElementById("Lowercase").value;
  document.getElementById("Lowercasestatus").innerHTML = str.toLowerCase();
}

function twoHalvesAndSwap() {
  var str = document.getElementById("str").value;
  let arrString = str.replaceAll(" ", "").split("");
  var revword = "";
  for (let i = 0; i <= arrString.length / 2; i++) {
    let a = arrString.pop();
    revword = revword.concat(a);
  }
  document.getElementById("TwoHalvesAndSwap").innerHTML =
    revword.split("").reverse().join("") + arrString.join("");
}

function countOfCharter() {
  var str = document.getElementById("stringValue").value.toLowerCase();
  var searchchar = document.getElementById("SearchChar").value.toLowerCase();
  var count = 0;
  const arraystring = str.replaceAll(" ", "").split("");
  for (let i = 0; i < arraystring.length; i++) {
    if (searchchar === arraystring[i]) {
      count++;
    }
  }
  document.getElementById("Lowercasestatus").innerHTML = str.toLowerCase();
}

function reversString() {
  var str = document.getElementById("RevStringValue").value;
  document.getElementById("reverStringStatus").innerHTML = str
    .split(" ")
    .reverse()
    .join(" ");
}
