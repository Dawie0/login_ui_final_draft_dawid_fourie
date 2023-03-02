const bars = document.querySelector("#bars"),
  strengthDiv = document.querySelector("#strength"),
  passwordInput = document.querySelector("#password-signup");

const strength = {
  1: "weak",
  2: "medium",
  3: "strong",
};

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

const getStrength = (password) => {
  let strengthValue = {
    upper: false,
    numbers: false,
    lower: false,
  };

  return getIndicator(password, strengthValue);
};

const handleChange = () => {
  let { value: password } = passwordInput;

  console.log(password);

  const strengthText = getStrength(password);

  bars.classList = "";

  if (strengthText) {
    strengthDiv.innerText = `${strengthText} Password`;
    bars.classList.add(strengthText);
  } else {
    strengthDiv.innerText = "";
  }
};


let userName = document.querySelector("#username-signup");
let userPassword = document.querySelector("#password-signup");
let logThatConsoleBaby = () => {
  console.log(userName.value);
  console.log(userPassword.value);
  document.location='index.html'
}
console.log(userName);
console.log(userPassword);

let checkUsername = () => {
  let cUsername = document.querySelector("#username");
  if (cUsername === userName) {
    console.log("username Match");
  }
  else {
    console.log("No match");
    console.log("username = ", userName.value);
    console.log("typed username = ", cUsername.value);
  }
}