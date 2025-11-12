// let age = prompt("Enter your age");
// if(age === null){
//    console.error("user cancelled the prompt");
// }
// else if(age.trim() === ""){
//     console.warn("user did not enter any value");
// }
// else{
//     age = Number(age.trim());
//     if(isNaN(age)){
//         console.error("invalid age entered");
//     }
//     else{
//         console.log("valid age entered");
//     }
// }
// for(let i = 1; i <= 10; i++){
//     console.log(`5 * ${i} = ${5 * i}`);
// }
 

// let counter = 0;
// for(let i = 1; i <= 20; i++){
//     if(counter === 3) break
//     if(i % 2 !== 0){
//         console.log(i);
//         counter++;
//     }
// }
// console.log(`Total odd numbers between 1 and 20: ${counter}`);

// function factorial(n){
//     if(n===1) return 1;
//     return n * factorial(n-1);
// }
// console.log(factorial(5));
// function fibonacci(n){
//     if(n===0) return 0;
//     if(n===1) return 1;
//     return fibonacci(n-1) + fibonacci(n-2);
// }
// console.log(fibonacci(7));
let arr = [1,2,3,4,5];
let[a,b] = arr;
console.log(a,b);