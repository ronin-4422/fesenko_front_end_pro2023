const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      array.splice(i, 1);
      i--;
    }
  }
}
removeElement(array, 3);
console.log('----------1');
console.log(array);

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
  let key = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    key += characters[randomIndex];
  }
  return key;
}
const key = generateKey(10, characters);
console.log('----------2');
console.log(key);

function removeChars(str, chars) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!chars.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}
console.log('----------3');
console.log(removeChars("hello world", ['l', 'd']));

function createSum() {
  let sum = 0;
  return function(num) {
    sum += num;
    return sum;
  };
}

const sum = createSum();

console.log('----------4');
console.log(sum(3)); 
console.log(sum(5)); 
console.log(sum(20)); 
