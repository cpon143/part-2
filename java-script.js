'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive : D`);

// const interface =audio;

/********************Function************************************************ */
//  calling   / running   /invoking

function name(){
    console.log('Md Mazharul Haque')
}

name();
name();
name();
name();

function fruitProcessor(apple,orange){
    console.log(apple,orange)
    console.log(`"Juice of ${apple} apple and ${orange} orange"`)
}

fruitProcessor(4,0)
fruitProcessor(4,5)
fruitProcessor(6,10)