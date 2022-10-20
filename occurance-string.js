function occuranceOfString() {
  var str = document.getElementById("StrValue").value;
  var word = document.getElementById("SearchWord").value;

  const eachword = str.split(" ");
  let count = 0;
  for (let i = 0; i < eachword.length; i++) {
    if (word === eachword[i]) {
      count++;
    }
  }

  document.getElementById("ArrayElements").innerHTML = count;
}
