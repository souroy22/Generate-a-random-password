function generatePassword() {
  var inputField = document.getElementById("password");
  var punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  inputField.value =
    Math.random().toString(36).slice(2) +
    punctuation.charAt(
      Math.ceil(punctuation.length * Math.random() * Math.random())
    ) +
    Math.random().toString(36).toUpperCase().slice(2);
}
function copyFn() {
  /* Get the text field */
  var copyText = document.getElementById("password");
  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}
