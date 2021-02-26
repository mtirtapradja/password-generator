function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumbers() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 48);
}

function getRandomSymbols() {
  const symbol = "!@#$%^&*(){}[]=<>/,.|~?";
  return symbol[Math.floor(Math.random() * symbol.length) + 48];
}

// Communication with DOM
let answerEl = document.getElementById("answer");
let lengthEl = document.getElementById("length");
let numberEl = document.getElementById("number");
let lowerEl = document.getElementById("lower");
let upperEl = document.getElementById("upper");
let symbolEl = document.getElementById("symbol");
let copyEl = document.getElementById("copy");
let generateEl = document.getElementById("generate");

const randomFunc = {
  upper: getRandomUpperCase,
  lower: getRandomLowerCase,
  number: getRandomNumbers,
  symbol: getRandomSymbols,
};

// Generate event
generateEl.addEventListener("click", () => {
  const length = +length.value;
  const hasUpper = upperEl.checked;
  const hasLower = lowerEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;

  answerEl.innerText = generatePassword(
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol
  );
});

// Generate Password Function
function generatePassword(upper, lower, number, symbol) {
  let generatedPassword = "";

  const typesCount = upper + lower + number + symbol;

  console.log(typesCount);

  const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatePassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatePassword.slice(0, length);

  return finalPassword;
}
