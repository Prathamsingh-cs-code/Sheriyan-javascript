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
// let arr = [1,2,3,4,5];
// let[a,b] = arr;
// console.log(a,b);
// let arr = [1,2,3,4,5];
// let [a, , , b] = arr;
// console.log(a,b);

// let arr = [1,2,3,4,5];
// arr.filter(function(num){
//   return val<3;
// })
// let arr = [1,2,3,4,5];
// for(let i = 0; i < 5; i++){
//     console.log(arr[i]);
// }
// let obj = {


//     name: "alok singh",
//     age: 20,
//     skills: ["javascript", "html", "css"],
// };
// let obj1 = new Object();
// let obj = {


//     name: "alok singh",
//     age: 20,
//     skills: ["javascript", "html", "css"],
//     social: {
//         media: {
//             facebook: "fb.com/aloksingh",
//             twitter: "twitter.com/aloksingh",
//         }
//     },
// };
// // obj.social.media.facebook.twitter
// // console.log(obj.social.media.twitter);
// obj.age;
// console.log(obj.age);
// function add(a , b){
//     return a + b;
// }
// console.log(add(5, 10));
// function addUnlimited(...numbers){
//     let sum = 0;
//     numbers.reduce((acc, val) => {
//         sum += val;
//     }, 0);
//     console.log(sum);
// }


// addUnlimited(1,2,3,4,5); // accumilator, current value

// function acds({name, age}){
//     console.log(name , age);
// }
// acds({name: "alok", age: 20});

// console.log(this); // object
// function alok(){
//     console.log(this); // undefined
// }
// alok();


// obj={
//     name: "alok singh",
//     age: 20,
//     skills: ["javascript", "html", "css"],
//     func: function(){
//         console.log(this);
//     },
//     func2: ()=>{
//         console.log(this);
//     }
// };
// obj.func();
// obj.func2();
// using map function
// let arr = [1,2,3,4,5];
// let newArr = arr.map((val) => val * val);
// console.log(newArr);
// // let filteredArr = arr.filter((val) => val > 2);

// let arr = [1,2,3,4,5];
// let newarr = arr.filter(function(val){
//    return val%2===0;
// });
// console.log(newarr);