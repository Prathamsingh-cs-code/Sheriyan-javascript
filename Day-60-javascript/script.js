
// function salokkaadress(message, callback) {
//     // Simulate an asynchronous operation using setTimeout
//     setTimeout(function() {
//         callback({id : 1, text: message , username: "salokka"});
//     }, 1000);
// }

// salokkaadress("Hello World!" , function(message) {
//     console.log(message);

// });

// function afterdelay(time , callback) {
//     setTimeout(callback, time);
// }

// afterdelay(3000 , function() {
//     console.log("3 seconds have passed");
// });

// Q2


// function getUser(time , callback) {
// setTimeout(function() {
//     callback({id : 1, username: "salokka"});
//     callback()
//  }, 1000);
// }
// function getUserPosts(id , callback) {
// setTimeout(function() {
//     callback([{id: 1, title: "Post 1"}, {id: 2, title: "Post 2"}]);
// }, 2000);
// }


// getUser("aloksingh" , function(data) {
// getUserPosts(data.id, function(allposts) {
//     console.log(data.username,allposts);
// });
// });                    



// Q3




















// 
// how to give error in javascript

try{
    let a = 12;
    console.log(a.age);
}
catch(err){
    console.error(new Error("This is an error message")
);
}