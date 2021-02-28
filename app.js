const generateBtn = document.querySelector(".submit-btn");
const questionModal = document.querySelector(".question-modal");
const answerModal = document.querySelector(".answer-modal");

questionModal.style.display = "block";
answerModal.style.display = "none";

generateBtn.addEventListener("click", () => {
  questionModal.style.display = "none";
  answerModal.style.display = "block";
});

// Communication with DOM
var answerEl = document.getElementById("myInput");
var lengthEl = document.getElementById("length");
var numberEl = document.getElementById("number");
var lowerEl = document.getElementById("lower");
var upperEl = document.getElementById("upper");
var symbolEl = document.getElementById("symbol");
var copyEl = document.getElementById("copy");
var generateEl = document.getElementById("generate");

const randomFunc = {
  upper: getRandomUpperCase,
  lower: getRandomLowerCase,
  number: getRandomNumbers,
  symbol: getRandomSymbols,
};

// Generate event
generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasUpper = upperEl.checked;
  const hasLower = lowerEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;

  answerEl.value = generatePassword(
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol,
    length
  );
});

// Generate Password Function
function generatePassword(upper, lower, number, symbol, length) {
  let generatedPassword = "";

  const typesCount = upper + lower + number + symbol;

  const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    console.log(i);
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      console.log(funcName);
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

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
  return symbol[Math.floor(Math.random() * symbol.length)];
}

// Copy function
function copyFucntion() {
  var copyText = document.getElementById("myInput");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");

  alert("Copied to Clipboard");
}
