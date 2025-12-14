

// async function getWeather(city) {
//     try {
//         let apiKey = '147f7a8acccacd49dc451bae8e769474';
//         let row = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
//         let real = await row.json();
//         if(real.main.temp > 40){
//             console.warn("hot");
//         }
//         else if(real.main.temp < 0){
//             console.warn("cold");
//         }
//     }
//     catch(error){
//         console.log("city not found");
//     }
// }
// getWeather("London");


// Array of 10 users
const users = [
  "user1@gmail.com",
  "user2@gmail.com",
  "user3@gmail.com",
  "user4@gmail.com",
  "user5@gmail.com",
  "user6@gmail.com",
  "user7@gmail.com",
  "user8@gmail.com",
  "user9@gmail.com",
  "user10@gmail.com",
];

// Function to send email (Promise)
function sendEmail(email) {
  return new Promise((resolve, reject) => {
    console.log(`📤 Sending email to ${email}...`);

    // Random result: 0, 1, or 2
    const result = Math.floor(Math.random() * 3);

    setTimeout(() => {
      if (result === 0) {
        resolve(`✅ Email sent successfully to ${email}`);
      } else if (result === 1) {
        reject(`❌ Failed to send email to ${email}`);
      } else {
        console.log(`⏳ Still sending email to ${email}...`);
        resolve(`📨 Email finally sent to ${email}`);
      }
    }, 1000); // async delay
  });
}

// Async function to send emails to all users
async function sendAllEmails() {
  for (let user of users) {
    try {
      const response = await sendEmail(user);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  console.log("📌 Email sending process completed");
}

// Call function
sendAllEmails();




