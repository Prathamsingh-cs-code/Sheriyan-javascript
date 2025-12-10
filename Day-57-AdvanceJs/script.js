// let obj = {
//     name: "Gaurav",
//     age: 21,
//     greet: function(){
//         console.log(`Hello, My name is ${this.name} and I am ${this.age} years old.`)
//     }
// };
// console.log(obj)

// class sketch{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
// }
// let alok = new sketch("Gaurav", 21)
// console.log(alok)

class alok{
    constructor(){
        this.name = "Gaurav";
        this.age = 21;
    }
}
new alok()


// Most Important!

// global -> window -> this
// function -> window -> this
// es5 -> function -> this = object
// es6 -> function -> this = window
// es5 funtion inside function -> this = object
// let obj = {
//     name: "Gaurav",
//     age: 21,
//     fun: function(){
//         function innerFun(){
//             console.log(this)
//         }
//         innerFun()
//     }
// };
// obj.fun()
// es6 function inside object -> this = window
// es6 function inside function -> this = window

// let obj = {
//     name: "Gaurav",
//     age: 21,
// };
// function fun(){
//     console.log(this)
// }
// fun.call(obj) // this = obj