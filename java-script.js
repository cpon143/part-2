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

// const friend1 = 'Manjit';
// const friend2 = 'Shadab';
// const friend3 = 'Vishal';
// const friend4 = 'Munni';
// const friends = ['Manjeet', 'Shadab', 'Vishal', 'Munni', 'Mazharul'];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends[3]);

// const year = new Array(2002, 2003, 2000, 2005, 2022);
// console.log(year);
// console.log(friends.length);
// console.log(friends[friends.length - 2]);
// friends[3] = 'Sonu';
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Manjeet', 2022 - 2002, friends];
// console.log(jonas);
// console.log(jonas.length);

/*************Some basic operation of array*****************/

// Insertion an element in array from end 
// const friends = ['Manjeet','Shadab', 'Vishal', 'Vivek'];
// console.log(friends);
// friends.push('Mazharul');

// insertion an element in array from first 
// const friends = ['Manjeet', 'Shadab', 'Vishal', 'Vivek'];
// const newLength = friends.unshift('Haque');
// console.log(friends);
// console.log(newLength);

// removed an element of array from last
// const remove = friends.pop();
// console.log(friends);

// removed an element of arry from start
// const newLength = friends.shift();
// console.log(friends);
// console.log(friends.indexOf('Mazharul'));
// console.log(friends.indexOf('Manjeet'));
// console.log(friends.includes('Mazharul'));
// console.log(friends.includes('Manjeet'));

// friends.push(23);
// console.log(friends);

// if (friends.includes('Vishal')) {
//     console.log('You have a friend called Vishal');
// }

/****************part 2 test 2 */
/*
  Steven is still building his tip calculator, using the same rules as before: Tip 15% of
  the bill if the bill value is between 50 and 300, and if the value is different, the tip is
  20%.

  Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
  the corresponding tip, calculated based on the rules above (you can check out
  the code from first tip calculator challenge if you need to). Use the function
  type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
  below
3. Create an array 'tips' containing the tip value for each bill, calculated from
  the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
  Test data: 125, 555 and 44
  Hint: Remember that an array needs a value in each position, and that value can
  actually be the returned value of a function! So you can just call a function as array
  values (so don't store the tip values in separate variables first, but right in the n
 */
/*const calcTip = function (bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const bonus = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])];
const bonus = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, bonus);
*/

/*****************Objects advanced version of array********** */
/************It's array************ */
// const jomas = [
//     'Shadab',
//     'Hussain',
//     2022 - 2002,
//     ['Vishal', 'Shadab', 'Manjeet']
// ]

/************It's objects************ */
/*const johan = {
    firstName: 'Mazharul',
    lastName: 'Haque',
    age: 2022 - 2002,
    friends: ['Vishal', 'Shadab', 'Manjeet'],
}
console.log(johan);
console.log(johan.lastName);
console.log(johan['lastName']);

const nameKey = 'Name';
console.log(johan['first' + nameKey]);
console.log(johan['last' + nameKey]);

const intrestedIn = prompt('What do you want to know about John ? choose between firstName, lastName, age and friends');
if (johan[intrestedIn]){
    console.log(johan[intrestedIn]);
}
else{
    console.log('Wrong request ! choose between firstName, lastName, age and friends')
}

johan.location='Isuapur';
johan['instagram']='@md_mazharul_haque';
console.log(johan);
console.log(`${johan.firstName} has ${johan.friends.length} friends and his best friend is called ${johan.friends[0]}`);
*/

/*const johan = {
    firstName: 'Mazharul',
    lastName: 'Haque',
    birthYear: 2002,
    job: 'teacher',
    friends: ['Vishal', 'Shadab', 'Manjeet'],
    hasDriverLicense: true,

    // calcAge: function () {
    //     // console.log(this);
    //     return 2022 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.age}-year old ${johan.job} and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license .`
    }
}
console.log(johan.calcAge());

console.log(johan.age);
console.log(johan.age);
console.log(johan.age);
console.log(johan.getSummary());


// console.log(`${johan.firstName} is a ${johan.calcAge(this.age)} old ${johan.job}, and he has a driver's license`)
*/


/*const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }

};
const johan = {
    fullName: 'johan Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};


// Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
mark.calcBMI();
johan.calcBMI();
console.log(mark.bmi, johan.bmi)
console.log(`"${johan.fullName}'s BMI (${johan.bmi}) is ${(johan.bmi >= mark.bmi) ? 'higher' : 'lower'} than ${mark.fullName}'s BMI (${mark.bmi})"`)

if(johan.bmi>mark.bmi){
    console.log(`"${johan.fullName}'s BMI (${johan.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})"`)
}
else{  
    console.log(`"${mark.fullName}'s BMI (${mark.bmi}) is higher than ${johan.fullName}'s BMI (${johan.bmi})"`)
}*/

/*******************for loop*********************** */
const johan = [
    'Shadab',
    'Hussain',
    'teacher',
    2022 - 2002,
    true,
    ['Vishal', 'Shadab', 'Manjeet'],
]

const types = [];

// console.log(johan[0]);
// console.log(johan[0]);
// ......
// console.log(johan[0]);

// for (let i = 0; i < johan.length; i++) {

//     console.log(johan[i], typeof johan[i]);

//     // types[i]=typeof johan[i];
//     types.push(typeof johan[i]);122
// }
// console.log(types);

const years = [1999, 2002, 2003, 2006, 2001];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// Break and continue

console.log('---------Only String---------');
for (let i = 0; i < johan.length; i++) {
    if (typeof johan[i] !== 'string') continue;

    console.log(johan[i], typeof johan[i]);
}
console.log('---------Break with number---------');
for (let i = 0; i < johan.length; i++) {
    if (typeof johan[i] == 'number') break;

    console.log(johan[i], typeof johan[i]);
}