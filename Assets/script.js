// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input!
function generatePassword() {
  var passwordArray = []
  var result = ""
  var letters = "abcdefghijklmnopqrstuvwxyz"
  var numbers = [1,2,3,4,5,6,7,8,9,0]
  var char = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  const passwordLength = prompt("What is the password length? min:8 max:128")
  if (passwordLength == null || isNaN(passwordLength)) {
    alert("Your password does not meet parameters");
    return "";
  };
  if (passwordLength < 8 || passwordLength >128) {
    alert("Your password does not meet parameters");
    return "";
  };
  const lower = confirm("Do you want to include lower case letters?");
  if (lower == true) {
    var lCase = letters.split("");
    passwordArray = passwordArray.concat(lCase);
  };
  const upper = confirm("Do you want to include upper case letters?");
  if (upper == true) {
    var uppCase = letters.toUpperCase().split("");
    passwordArray = passwordArray.concat(uppCase);
  };
  const numb = confirm("Do you want to include numbers?");
  if (numb == true) {
    passwordArray = passwordArray.concat(numbers);
  };
  const spChar = confirm("Do you want to include special characters?");
  if (spChar == true) {
    var specialCharacters = char.split("");
    passwordArray = passwordArray.concat(specialCharacters);
  };
  for (var i = 0; i < passwordLength; i++) {
    result += passwordArray[Math.floor(Math.random() * passwordArray.length)];
  };
  if (passwordArray.length == 0) {
    alert("You need to select at least one of the criteria to generate a password.")
    return ""
  }
    console.log(result)
    console.log(passwordArray)
  return result
};
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);










