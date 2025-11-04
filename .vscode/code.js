let age = prompt("Enter your age");
if(age === null){
   console.error("user cancelled the prompt");
}
else if(age.trim() === ""){
    console.warn("user did not enter any value");
}
else{
    age = Number(age.trim());
    if(isNaN(age)){
        console.error("invalid age entered");
    }
    else{
        console.log("valid age entered");
    }
}