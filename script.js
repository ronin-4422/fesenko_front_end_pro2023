//1. Знайти суму та кількість позитивних елементів.
const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 

let sumPositive = 0;
let countPositive = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    sumPositive += array[i];
    countPositive++;
  }
}

console.log('------------------1');
console.log('Сума позитивних елементів:', sumPositive);
console.log('Кількість позитивних елементів:', countPositive);

//2. Знайти мінімальний елемент масиву та його порядковий номер.
let min = array[0];
let minIndex = 0;

for (let i = 1; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i]
    minIndex = i
  }
}

console.log('------------------2');
console.log("Мінімальний елемент:", min);
console.log("Його порядковий номер:", minIndex);

//3. Знайти максимальний елемент масиву та його порядковий номер.
let max = array[0];
let maxIndex = 0;

for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i]
    maxIndex = i
  }
}

console.log('------------------3');
console.log("Максімальний елемент:", max);
console.log("Його порядковий номер:", maxIndex);

//4. Визначити кількість негативних елементів.
let negativeCount = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    negativeCount++;
  }
}

console.log('------------------4');
console.log("Кількість негативних елементів:", negativeCount);

//5. Знайти кількість непарних позитивних елементів.
let oddPositiveCount = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 !== 0) {
    oddPositiveCount++;
  }
}

console.log('------------------5');
console.log("Кількість непарних позитивних елементів:", oddPositiveCount);

//6. Знайти кількість парних позитивних елементів.
let sumEvenPositive = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 !== 0) {
    sumEvenPositive++;
  }
}
console.log('------------------6');
console.log("Кількість парних позитивних елементів: " + sumEvenPositive);

//7. Знайти суму парних позитивних елементів.
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 === 0) {
    sumEvenPositive += array[i];
  }
}

console.log('------------------7');
console.log("Сума парних позитивних елементів: " + sumEvenPositive);

//8. Знайти суму непарних позитивних елементів.
let sumOddPositive = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 !== 0) {
    sumOddPositive += array[i];
  }
}

console.log('------------------8');
console.log("Сума непарних позитивних елементів: " + sumOddPositive);

//9. Знайти добуток позитивних елементів.
let arrayPositive = 1;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    arrayPositive *= array[i];
  }
}

console.log('------------------9');
console.log("Добуток позитивних елементів: " + arrayPositive);

//10. Знайти найбільший серед елементів масиву, остальні обнулити.
for (let i = 0; i < array.length; i++) {
  if (array[i] !== max) {
    array[i] = 0;
  }
}

console.log('------------------10');
console.log("Масив з обнуленими елементами, крім максимального: " + array);


