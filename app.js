function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}

// Login
function validateForm() {
  var email = document.getElementById("email").value;

  if (email.trim() === "") {
    alert("Please enter your email.");
    event.preventDefault();
  }
}

// Sign Up
function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email.trim() === "") {
    alert("Please enter your email.");
    event.preventDefault();
  }

  // Check password strength
  checkPasswordStrength(password);
}

function checkPasswordStrength(password) {
  var hasLetters = /[a-zA-Z]/.test(password);
  var hasNumbers = /\d/.test(password);

  if (hasLetters && !hasNumbers) {
    alert("Password is weak (only letters).");
  } else if (!hasLetters && hasNumbers) {
    alert("Password is medium (only numbers).");
  } else if (hasLetters && hasNumbers) {
    alert("Password is strong (letters and numbers).");
  } else {
    alert("Password is weak (no letters or numbers).");
  }
}
