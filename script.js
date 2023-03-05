let userName = prompt('What is your name?');
let userSurname = prompt('What is your surname?');
let userAge = prompt('How old are you?');
let userCity = prompt('What city do you live in?');

let personAge = +userAge;


let user = {
    name: `${userName}`,
    surname: `${userSurname}`,
    age: `${userAge}`,
    city: `${userCity}`
}

let dataShare = confirm('Do you agree to share your personal data?');

dataShare ? console.log(`Name: ${user.name}, Surname:${user.surname}, Age:${user.age}, City:${user.city}`) : alert('The user forbade showing data'); 