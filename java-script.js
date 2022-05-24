/*'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive : D`);*/

// const interface =audio;

/********************Function************************************************ */
//  calling   / running   /invoking

// function name() {
//     console.log('Md Mazharul Haque')
// }

// name();
// name();
// name();
// name();

// function fruitProcessor(apple, orange) {
//     console.log(apple, orange)
//     const juice = `Juice of ${apple} apple and ${orange} orange`;

//     return  juice;
// }

// const appleJuice=fruitProcessor(5,0);
// console.log(appleJuice);
// const appleOrangeJuice=fruitProcessor(5,6);
// console.log(appleOrangeJuice);

// function decleration

/*function calcAge(birthYear) {
    return 2022 - birthYear;
}
const age1 = calcAge(2002);
const age2 = calcAge(2020);
console.log(age1, age2);*/

// function expression

/*const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}*/

// Arrow function 

/*const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(2002);
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement
    return `${firstName} retires in ${retirement}`;
}
console.log(yearsUntilRetirement(2002,'Jonas'));
console.log(yearsUntilRetirement(1980,'Bobs'));*/

/**********Function calling other function********************************************** */

/*function cutFruitPicses(fruit) {
    return fruit * 4;   
}

function fruitProcessor(apples, oranges){
const applePicses = cutFruitPicses(apples);
const orangePicses = cutFruitPicses(oranges);
const juice = `juice of ${applePicses} picses apples and ${orangePicses} picese of orange juice`;
return juice;
}
console.log(fruitProcessor(4,5));*/

/********************Challenge1*******************/
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3,4,5));

// const calcAverageKoalas = (65, 54, 49) >= (65 + 54 + 49) / 3;
// const checkWinner = function(avgDolhins,avgKoalas){
//     x
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27


// test1

const aveKoalas=calcAverage(44,23,71);
const aveDolhins = calcAverage(65,54,49);
console.log(aveKoalas);
console.log(aveDolhins);

