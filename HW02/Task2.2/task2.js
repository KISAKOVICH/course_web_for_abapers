function enterUsername() {
  let name = prompt("Please enter your name");
  if (name == null || name == "") {
    alert("Please, enter the username");
  } else {
    if (checkNumbers(name)) {
      name = reverseLetters(name);
    } else {
      name = changeUpperLowerCase(name);
    }
    document.getElementById('name').innerHTML =
      "Hello " + name + "!";
  }


  function checkNumbers(name) {
    return /\d/.test(name);
  }

  function reverseLetters(word) {
    return word.split("").reverse().join("");
  }

  function changeUpperLowerCase(word) {
    let newName = "";
    for (let i = 0; i < word.length; i++) {
      if (i % 2 == 0) {
        newName += name[i].toUpperCase();
      } else {
        newName += name[i].toLowerCase();
      }
    }
    return newName;
  }
}