var num = "0123456789"
var upperCase = "ABCDEFGHIGKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghigklmnopqrstuvwxyz"
var specialChar = "!#$%&*"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// declare the function to generate the password
function generatePassword() {
  var passwordLength = prompt("Choose a number inbetween 8 - 128.")
  if (passwordLength >= 8 && passwordLength <= 128) {

    var passwordStr = ""

    var isLowerCase = confirm("Would you like lowercase letters?");
    var isUpperCase = confirm("Would you like uppercase letters?");
    var isNumeric = confirm("Would you like number in your password?");
    var isSpecialChar = confirm("Would you like special characters ?");
    for (var i = 0; i < passwordLength; i++) {


      if (isLowerCase && passwordStr.length <= passwordLength) {
        var position = Math.floor(Math.random() * 26);
        passwordStr += lowerCase.charAt(position)
      }
      if (isUpperCase && passwordStr.length <= passwordLength) {
        position = Math.floor(Math.random() * 26);
        passwordStr += upperCase.charAt(position);
      }
      if (isNumeric && passwordStr.length <= passwordLength) {
        position = Math.floor(Math.random() * 9);
        passwordStr += num.charAt(position);
      }
      if (isSpecialChar && passwordStr.length <= passwordLength) {
        position = Math.floor(Math.random() * 6);
        passwordStr += specialChar.charAt(position);
      }
    }



  } else {
    alert("Not a vaild answer!");
  }
  return passwordStr
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);