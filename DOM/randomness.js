// randomness.js — small utilities for generating random values
// Provides helper functions and example usage. Intended for browser/dev console.

/** Return a floating point number x where 0 <= x < 1 */
function random(){
    return Math.random();
}

/** Return a floating point number 0 <= x < 100 */
function random0to100(){
    return Math.random() * 100;
}

/** Return an integer between 0 and 99 (inclusive) */
function randomInt0to99(){
    return Math.floor(Math.random() * 100);
}

/** Return an integer between 1 and 100 (inclusive) */
function randomInt1to100(){
    return Math.floor(Math.random() * 100) + 1;
}

/**
 * Return an integer between min and max (inclusive).
 * Example: randomInt(10,20) returns integer in [10,20]
 */
function randomInt(min, max){
    if(typeof min !== 'number' || typeof max !== 'number'){
        throw new TypeError('randomInt expects numeric min and max');
    }
    if(min > max) [min, max] = [max, min];
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example console outputs — useful for manual verification in devtools
console.log('Random Value [0,1):', random());
console.log('Random Value [0,100):', random0to100());
console.log('Random Int [0,99]:', randomInt0to99());
console.log('Random Int [1,100]:', randomInt1to100());
console.log('Random Int [10,20]:', randomInt(10,20));

// Expose helpers to the global/window scope for quick use in browser console
if(typeof window !== 'undefined'){
    window.random = random;
    window.random0to100 = random0to100;
    window.randomInt0to99 = randomInt0to99;
    window.randomInt1to100 = randomInt1to100;
    window.randomInt = randomInt;
}

// Also export for module environments (node/ESM)
if(typeof module !== 'undefined' && module.exports){
    module.exports = { random, random0to100, randomInt0to99, randomInt1to100, randomInt };
}

    