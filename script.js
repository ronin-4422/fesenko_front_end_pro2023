//1. Вивести в консоль в один рядок через кому числа від 10 до 20.
let firstOutput = '';
for (let i = 10; i <= 20; i++) {
  firstOutput += i + ', ';
}
console.log('----------------------1');
console.log(firstOutput.slice(0,-2));

//2.Вивести в консоль в один рядок через кому квадрати чисел від 10 до 20.
let secondOutput = '';
for (let i = 10; i <= 20; i++) {
    secondOutput += i * i + ',';
}
console.log('----------------------2')
console.log(secondOutput.slice(0,-2));

//3.Знайти добуток усіх цілих чисел від 15 до 35.
let thirdOutput = 1;
for (let i = 15; i <= 35; i++) {
    thirdOutput *= i;
}
console.log('----------------------3');
console.log(thirdOutput);

//4.Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let fourthOutput = 0;
for (let i = 1; i <= 500; i++) {
    fourthOutput += i;
}
const average = fourthOutput / 500;
console.log('----------------------4');
console.log(average);

//5.Вивести суму лише парних чисел в діапазоні від 30 до 80.
let fithOutput = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        fithOutput += i;
}
}
console.log('----------------------5');
console.log(fithOutput);

//6.Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let sixthOutput = '';
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    sixthOutput += i + ', ';
  }
}
console.log('----------------------6');
console.log(sixthOutput.slice(0, -2));

//7.Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
let seventhOutput = 18; //можно написать любое число
let isPrime = true;
for (let i = 2; i < seventhOutput; i++) {
    if (seventhOutput % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(seventhOutput + " является простым числом");
  } else {
    console.log(seventhOutput + " не является простым числом");
  }