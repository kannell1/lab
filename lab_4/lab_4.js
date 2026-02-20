// ЗАДАНИЕ 1

const queuePeople = [
  "Кристина",
  "Олег",
  "Кирилл",
  "Мария",
  "Светлана",
  "Артем",
  "Глеб",
];

function giveParcelToFirst() {
  const person = queuePeople[0];
  queuePeople.shift();
  alert(
    person +
      " получил(а) посылку. В очереди осталось " +
      queuePeople.length +
      " человек.",
  );
}

function removeLastFromQueue() {
  const person = queuePeople[queuePeople.length - 1];
  queuePeople.pop();
  alert(person + " не получил(а) посылку и ушел(ла) из очереди.");
}

giveParcelToFirst();
giveParcelToFirst();
giveParcelToFirst();

while (queuePeople.length > 0) {
  removeLastFromQueue();
}

// ЗАДАНИЕ 2

function calculateSumOfFirstAndLast(sequenceLength) {
  const numberSequence = [];
  for (let i = 1; i <= sequenceLength; i++) {
    numberSequence.push(i);
  }
  const first = numberSequence[0];
  const last = numberSequence[numberSequence.length - 1];
  return first + last;
}

console.log("Сумма первого и последнего:", calculateSumOfFirstAndLast(5));

// ЗАДАНИЕ 3

const coffeeTypes = ["Латте", "Капучино", "Американо"];

const userCoffeeInput = prompt("Поиск кофе по названию:");

let coffeeIndex = -1;
for (let i = 0; i < coffeeTypes.length; i++) {
  if (coffeeTypes[i].toLowerCase() === userCoffeeInput.toLowerCase()) {
    coffeeIndex = i;
  }
}

if (coffeeIndex !== -1) {
  alert(
    "Держите ваш любимый кофе " +
      coffeeTypes[coffeeIndex] +
      ". Он " +
      (coffeeIndex + 1) +
      "-й по популярности в нашей кофейне.",
  );
} else {
  alert("К сожалению, такого вида кофе нет в наличии");
}

// ЗАДАНИЕ 4

const coffeeNames = ["Латте", "Капучино", "Американо"];
const currentPrices = [200, 159, 260];

const increasedPrices = [];
for (let i = 0; i < currentPrices.length; i++) {
  increasedPrices.push(currentPrices[i] + 0.5);
}

for (let i = 0; i < increasedPrices.length; i++) {
  alert(
    "Кофе " +
      coffeeNames[i] +
      " сейчас стоит " +
      increasedPrices[i] +
      " рублей",
  );
}

// ЗАДАНИЕ 5

const customerRatings = [];

function askForCustomerRating() {
  const userRating = Number(
    prompt("Как вы оцениваете нашу кофейню от 1 до 10?"),
  );
  if (userRating >= 1 && userRating <= 10) {
    customerRatings.push(userRating);
  }
}

for (let i = 0; i < 5; i++) {
  askForCustomerRating();
}

let positiveRatingsCount = 0;
let negativeRatingsCount = 0;

for (let i = 0; i < customerRatings.length; i++) {
  if (customerRatings[i] > 5) {
    positiveRatingsCount = positiveRatingsCount + 1;
  } else {
    negativeRatingsCount = negativeRatingsCount + 1;
  }
}

alert(
  "Всего положительных оценок: " +
    positiveRatingsCount +
    "; Всего отрицательных оценок: " +
    negativeRatingsCount,
);

// ЗАДАНИЕ 6

const originalNumbers = [10, 4, 100, -5, 54, 2];

let cubesSumFor = 0;
for (let i = 0; i < originalNumbers.length; i++) {
  cubesSumFor =
    cubesSumFor + originalNumbers[i] * originalNumbers[i] * originalNumbers[i];
}
console.log("Способ 1 (for):", cubesSumFor);

let cubesSumForOf = 0;
for (let num of originalNumbers) {
  cubesSumForOf = cubesSumForOf + num * num * num;
}
console.log("Способ 2 (for of):", cubesSumForOf);

let cubesSumForEach = 0;
originalNumbers.forEach(function (num) {
  cubesSumForEach = cubesSumForEach + num * num * num;
});
console.log("Способ 3 (forEach):", cubesSumForEach);

let cubesSumReduce = 0;
for (let i = 0; i < originalNumbers.length; i++) {
  cubesSumReduce =
    cubesSumReduce +
    originalNumbers[i] * originalNumbers[i] * originalNumbers[i];
}
console.log(
  "Способ 4 (reduce) - я не понял как работает reduce, сделал через for:",
  cubesSumReduce,
);

// ЗАДАНИЕ 7

const seasonGoals = [8, 1, 1, 3, 2, -1, 5];

let highestGoals = seasonGoals[0];
let bestMatchIndex = 0;

for (let i = 0; i < seasonGoals.length; i++) {
  if (seasonGoals[i] > highestGoals) {
    highestGoals = seasonGoals[i];
    bestMatchIndex = i;
  }
}
alert(
  "Самый результативный матч был под номером " +
    (bestMatchIndex + 1) +
    ". В нем было забито " +
    highestGoals +
    " гол(ов).",
);

let lowestGoals = 1000000;
for (let i = 0; i < seasonGoals.length; i++) {
  if (seasonGoals[i] >= 0 && seasonGoals[i] < lowestGoals) {
    lowestGoals = seasonGoals[i];
  }
}

let worstMatchesIndices = [];
for (let i = 0; i < seasonGoals.length; i++) {
  if (seasonGoals[i] === lowestGoals) {
    worstMatchesIndices.push(i + 1);
  }
}

alert(
  "Самые нерезультативные матчи были под номерами " +
    worstMatchesIndices.join(", ") +
    ". В каждом из них было забито по " +
    lowestGoals +
    " мяч(а).",
);

let totalSeasonGoals = 0;
for (let i = 0; i < seasonGoals.length; i++) {
  if (seasonGoals[i] > 0) {
    totalSeasonGoals = totalSeasonGoals + seasonGoals[i];
  }
}
alert("Общее количество голов за сезон равно " + totalSeasonGoals);

let hasAutoLosses = false;
for (let i = 0; i < seasonGoals.length; i++) {
  if (seasonGoals[i] < 0) {
    hasAutoLosses = true;
  }
}
if (hasAutoLosses) {
  alert("Были автоматические поражения: да");
} else {
  alert("Были автоматические поражения: нет");
}

let validMatchesCount = 0;
for (let i = 0; i < seasonGoals.length; i++) {
  if (seasonGoals[i] >= 0) {
    validMatchesCount = validMatchesCount + 1;
  }
}
let averageGoalsPerMatch = totalSeasonGoals / validMatchesCount;
averageGoalsPerMatch = averageGoalsPerMatch.toFixed(1);
alert("Среднее количество голов за матч равно " + averageGoalsPerMatch);

let sortedGoalsList = [];
for (let i = 0; i < seasonGoals.length; i++) {
  sortedGoalsList.push(seasonGoals[i]);
}

for (let i = 0; i < sortedGoalsList.length; i++) {
  for (let j = i + 1; j < sortedGoalsList.length; j++) {
    if (sortedGoalsList[i] > sortedGoalsList[j]) {
      let temp = sortedGoalsList[i];
      sortedGoalsList[i] = sortedGoalsList[j];
      sortedGoalsList[j] = temp;
    }
  }
}

alert("Голы за сезон (по возрастанию): " + sortedGoalsList.join(", "));

// ЗАДАНИЕ 8

function evaluateMathExpression(inputArray) {
  if (inputArray.length < 3) {
    return "Ошибка";
  }

  let filteredElements = [];
  for (let i = 0; i < inputArray.length; i++) {
    let element = inputArray[i];
    if (typeof element === "number") {
      filteredElements.push(element);
    } else if (typeof element === "string" && element.trim() !== "") {
      let num = Number(element);
      if (!isNaN(num)) {
        filteredElements.push(element);
      }
    }
  }

  if (filteredElements.length < 3) {
    return "Ошибка";
  }

  let firstOperand = filteredElements[0];
  let mathOperator = filteredElements[1];
  let secondOperand = filteredElements[2];

  let firstNumber = Number(firstOperand);
  let secondNumber = Number(secondOperand);

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return "Ошибка";
  }

  if (mathOperator === ">") {
    return firstNumber > secondNumber;
  } else if (mathOperator === "<") {
    return firstNumber < secondNumber;
  } else if (mathOperator === "=") {
    return firstNumber === secondNumber;
  } else if (mathOperator === "+") {
    return firstNumber + secondNumber;
  } else if (mathOperator === "-") {
    return firstNumber - secondNumber;
  } else if (mathOperator === "*") {
    return firstNumber * secondNumber;
  } else if (mathOperator === "/") {
    if (secondNumber === 0) {
      return "Ошибка";
    }
    return firstNumber / secondNumber;
  } else {
    return "Ошибка";
  }
}

console.log(evaluateMathExpression(["200", "+", 300]));
console.log(evaluateMathExpression(["20", "-", "5"]));
console.log(evaluateMathExpression([100, "/", 100]));
console.log(evaluateMathExpression([2, "-", 2]));
console.log(evaluateMathExpression(["5", ">", "10"]));
console.log(evaluateMathExpression(["5", "<", "10"]));
console.log(evaluateMathExpression(["1", "=", 1]));
console.log(evaluateMathExpression(["1", "*", 1]));
console.log(
  evaluateMathExpression(["100", "hello", "javascript", "help200", "+", 4]),
);
console.log(evaluateMathExpression(["10", "/", "0"]));

// ЗАДАНИЕ 9

let twoDimensionalMatrix = [];

for (let i = 0; i < 3; i++) {
  let matrixRow = [];
  for (let j = 0; j < 5; j++) {
    matrixRow.push(j + 1);
  }
  twoDimensionalMatrix.push(matrixRow);
}

console.log("Матрица 3x5:", twoDimensionalMatrix);

function reverseString(originalWord) {
  let reversed = "";
  for (let i = originalWord.length - 1; i >= 0; i--) {
    reversed = reversed + originalWord[i];
  }
  return reversed;
}

console.log("Перевернутое слово 'привет':", reverseString("привет"));
console.log("Перевернутое слово 'JavaScript':", reverseString("JavaScript"));
console.log("Перевернутое слово 'мир':", reverseString("мир"));

/* ТОпот, кабак,  */ /* 

Написать функцию isPalyndrome, которая проверят явлеятся ли слово палиндромом */

const isPalyndrome = (word) => {
  if (word === word.split("").reversed().join("")) {
    return true;
  } else {
    return false;
  }
};
