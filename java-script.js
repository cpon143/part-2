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

// const calcAverageKoalas = (65, 54, 49) >= (65 + 54 + 49) / 3;
// const checkWinner = function(avgDolhins,avgKoalas){
//     x

/*
Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
*/
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27


// test1
/*const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

const scoreKoalas = calcAverage(44, 23, 71);
const scoreDolphins = calcAverage(65, 54, 49);

const checkwinner = function (scoreKoalas, scoreDolphins) {
    if (scoreKoalas > 2 * scoreDolphins) {
        const winner = `"Koalas win 🏆 (${scoreKoalas} vs. ${scoreDolphins})"`
        return winner;
    }
    else if (scoreDolphins > 2 * scoreKoalas) {
        const winner = `"Dolphins win 🏆 (${scoreDolphins} vs. ${scoreKoalas})"`
        return winner;
    }
    else {
        const winner = "No one can Win";
        return winner;
    }
}
const win=checkwinner(scoreKoalas,scoreDolphins);
console.log(win);*/


/**Test 2 */
/*const calcAverage = (a, b, c) => (a + b + c) / 3;
const scoreKoalas = calcAverage(23, 34 , 27);
const scoreDolphins = calcAverage(85, 54 , 41);

const checkwinner = function (scoreKoalas, scoreDolphins) {
    if (scoreKoalas > 2 * scoreDolphins) {
        const winner = `"Koalas win 🏆 (${scoreKoalas} vs. ${scoreDolphins})"`
        return winner;
    }
    else if (scoreDolphins > 2 * scoreKoalas) {
        const winner = `"Dolphins win 🏆 (${scoreDolphins} vs. ${scoreKoalas})"`
        return winner;
    }
    else {
        const winner = "No teams wins......";
        return winner;
    }
}
// const win=checkwinner(scoreKoalas,scoreDolphins);
console.log(checkwinner(scoreKoalas,scoreDolphins));
// by direct value
console.log(checkwinner(500,200));*/

/*************************************ARRAY**************************************** */

const friend1 = 'Manjit';
const friend2 = 'Shadab';
const friend3 = 'Vishal';
const friend4 = 'Munni';
const friends = ['Manjeet', 'Shadab', 'Vishal', 'Munni'];
console.log(friends);
console.log(friends[0]);
console.log(friends[3]);

const year = new Array(2002, 2003, 2000, 2005, 2022);
console.log(year);
console.log(friends.length);
console.log(friends[friends.length - 2]);
friends[3]='Sonu';
console.log(friends);