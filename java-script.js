/*'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive : D`);*/

// const interface =audio;

/********************Function************************************************ */
//  calling   / running   /invoking

function name() {
    console.log('Md Mazharul Haque')
}

name();
name();
name();
name();

function fruitProcessor(apple, orange) {
    console.log(apple, orange)
    const juice = `Juice of ${apple} apple and ${orange} orange`;

    return  juice;
}

const appleJuice=fruitProcessor(5,0);
console.log(appleJuice);
const appleOrangeJuice=fruitProcessor(5,6);
console.log(appleOrangeJuice);