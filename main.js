/* Using DOM to set variables to reference the strength progress bar, strength text as well as the password input field*/
const bars = document.querySelector("#bars"),
  strengthDiv = document.querySelector("#strength"),
  passwordInput = document.querySelector("#password-signup");

/* Setting an object to reference index later */
const strength = {
  1: "weak",
  2: "medium",
  3: "strong",
};

/* Function to get strength indication (number between 0-3) and reference strength object above (0 means none) */
const getIndicator = (password, strengthValue) => {
  for (let index = 0; index < password.length; index++) {
    let char = password.charCodeAt(index);
    if (!strengthValue.upper && char >= 65 && char <= 90) {
      strengthValue.upper = true;
    } else if (!strengthValue.numbers && char >= 48 && char <= 57) {
      strengthValue.numbers = true;
    } else if (!strengthValue.lower && char >= 97 && char <= 122) {
      strengthValue.lower = true;
    }
  }

  let strengthIndicator = 0;

  for (let metric in strengthValue) {
    if (strengthValue[metric] === true) {
      strengthIndicator++;
    }
  }

  return strength[strengthIndicator] ?? "";
};

/* function setting default values to false and calling above function to update values as they change */
const getStrength = (password) => {
  let strengthValue = {
    upper: false,
    numbers: false,
    lower: false,
  };

  return getIndicator(password, strengthValue);
};

/* Function to handle real time change when something is added to password input, adds text to a div saying the password is strong, medium or weak,
 adjusts the class of the bars div to update the progress bar */
const handleChange = () => {
  let { value: password } = passwordInput;

  const strengthText = getStrength(password);

  bars.classList = "";

  if (strengthText) {
    strengthDiv.innerText = `${strengthText} Password`;
    bars.classList.add(strengthText);
  } else {
    strengthDiv.innerText = "";
  }
};

/*  */
const changePage = (page) => {
  document.location = `${page}.html`
}