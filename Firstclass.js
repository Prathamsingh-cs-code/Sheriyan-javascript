// console.log("hello world");
// alert("hello world");

    // console.log("hello world");

    // let age = prompt("20");
    // console.log(age + 5);
    // let msg = 'alok singh';
    // msg.slice(0,4);
   
// let name = "alok singh";
// console.log(`hey ${name}, how are you?`);
// let skill = ["javascript", "json", "html", "css"];
// console.log(typeof skill);


// let x = 10;
// if(x > 5 && x < 15 && x===10){
//     console.log("x is 10");
// }
// else
// {
//     console.log("x is not 10");
// }
// for(let i=0; i<=20; i++){
//     if(i%2===0){
//         console.log(`${i}-even`);
//     }
//     else{
//         console.log(`${i}-odd`);
//     }
// }
// koi prompt jo string mai hai usako number mai convert karne ka tarika
// let num = prompt("Enter a number");
// num = parseInt(num);
// console.log(typeof num); 
// let age = prompt("Enter your age");
// if(age === null){
//     console.log("user cancelled the prompt");
// }
//  let age = prompt("Enter your age");
//  if(age === null){
//     console.error("user cancelled the prompt");
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
//     console.log("valid age entered");
// }
// }   
// Example: simple password check (kept for reference)
const correctpassword = "admin123";

/**
 * Autofill the sample form in `index.html`.
 * This is the "form completing" function the user asked to implement.
 * Behavior:
 *  - Finds inputs by id `name`, `email`, `password` and fills them with sample values.
 *  - If form or inputs are missing, it logs a helpful error.
 */
function autoFillForm(){
    const form = document.getElementById('userForm');
    if(!form){
        console.error('Form element with id "userForm" not found.');
        return;
    }

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if(!nameInput || !emailInput || !passwordInput){
        console.error('One or more form inputs (name, email, password) are missing.');
        return;
    }

    // Sample values - choose whatever is appropriate for your app
    nameInput.value = 'Pratham Singh';
    emailInput.value = 'pratham@example.com';
    passwordInput.value = 'SecretPass123!';

    console.log('Form auto-filled. Review values and submit if OK.');
}

// Expose to global scope so button onclick can call it when loaded via <script>
window.autoFillForm = autoFillForm;