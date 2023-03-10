let getFirstUserNumber = prompt('Write a number:',100); // || 0
let getSecondUserNumber = prompt('Write a number:',60); // || 22
let getThirdUserNumber;
let getFourthUserNumber;

if (getFirstUserNumber === '') {
    getFirstUserNumber = 0
} 

if (getSecondUserNumber === '') {
    getSecondUserNumber = 22
}

if (getFirstUserNumber && getSecondUserNumber) {
    getThirdUserNumber = 80
} else if(getFirstUserNumber == false || getSecondUserNumber == false) {
    getThirdUserNumber = 40
}

let object = {};

if (getFirstUserNumber >= 90) {
    object.size = 'big'
} else if (getFirstUserNumber >= 40) {
    object.size = 'small'
} else {
    object.size = 'medium'
}

switch (object.size) {
    case 'big':
        getFourthUserNumber = 1000;
        break;
    case 'medium':
        getFourthUserNumber = 100;
        break;
    case 'small':
        getFourthUserNumber = 10;
        break;
    default:
        alert('Error!');
}
const multiplyUserNumbers = getFirstUserNumber * 
getSecondUserNumber * 
getThirdUserNumber * 
getFourthUserNumber;

const multiplyResult = multiplyUserNumbers;

if (multiplyResult / 2 && multiplyResult !== 0) {
    console.log('Your homework is done, dude!');
} else  if (getSecondUserNumber > 50){
    alert(getSecondUserNumber)
}

console.log(parseInt(getFirstUserNumber));
console.log(parseInt(getSecondUserNumber));
console.log(parseInt(getThirdUserNumber));
console.log(object);
console.log(parseInt(getFourthUserNumber));
console.log(multiplyResult);