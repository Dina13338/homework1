let x = 10;
if (x >= 0) {
    alert('число х положительное');
} else {
    alert('число х отрицательное')
}

let y = -10;
if (y >= 0) {
    alert('число y положительное');
} else {
    alert('число y отрицательное')
}


let z = 10;
if (z % 2 == 0) {
    alert('число z четное');
} else {
    alert('число z нечетное')
}


let n = 9;
if (n % 3 == 0) {
    alert('число n кратно 3');
} else {
    alert('число n не кратно 3')
}

let str = "Собака - лучший друг человека";
let Str = str.split('');
let s = "а";
if (Str.includes(s)) {
    alert ('Строка str содержит букву "а"')
} else {
    alert ('Строка str не содержит букву "а"')
}


let name = "Victor";
if (name === "") {
    alert ('Строка name пустая')
} else {
    alert ('Строка name не пустая')
}

let age = 54;
if (age >= 18 && age <= 60) {
    alert ('значение age находится в диапазоне от 18 до 60')
}else {
    alert ('значение age не находится в диапазоне от 18 до 60.')
}


let isAdmin;
if (isAdmin == true) {
    alert('значение isAdmin равно true');
} else {
    alert('значение isAdmin равно false')
}


let isMember;
if (isAdmin == false) {
    alert('значение isAdmin равно false');
} else {
    alert('значение isAdmin равно true')
}


let num = 2;
if (num != 0) {
    alert ('переменная num не равна 0')
} else {
    alert ('переменная num равна 0.')
}


let isValid;
if (isValid == true) {
    alert('значение isValid равно true');
} else {
    alert('значение isValid равно false')
}



let x = 2;
let y = 4;
if (x >= y) {
    alert('x больше либо равно y')
} else {
    alert ('х меньше у')
}


if (a !== b) {
    alert ('a не больше b')
}else {
    alert ('a больше b')
}


if (name === 'Alice' || name === 'Bob') {}

if (2000 < year < 2025) {}



let email = "starikova.dina@mail.ru";
let sEmail = email.split('');
let s = "@";
if (sEmail.includes(s)) {
    alert ('email содержит символ \'@\'')
} else {
    alert ('email не содержит символ \'@\'')
}



if (password.length >= 8) {
}

if (x !== y && y !== z) {

}


if (age > 0 && age <= 100) {}

if (isValid === false || isError === true) {}