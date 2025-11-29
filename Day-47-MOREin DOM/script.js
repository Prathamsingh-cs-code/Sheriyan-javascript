// var arr = [10,20,30,40]
// sum = 0
// arr.forEach(function (elem) {
//     sum = sum + elem
  
// });
//   console.log(sum)
const users = [
  {
    fullName: "Aarav Sharma",
    image: "https://media.istockphoto.com/id/1218551459/photo/a-nice-teenage-boy-in-headphones-uses-the-laptop-and-learns-at-the-desk-in-his-room-he-takes.jpg?s=612x612&w=0&k=20&c=akVDqy1c_HR4WhEntexKgDLtY0SeobYz1Z6_9wKW9v8=",
    profession: "Full Stack Developer",
    description: "Passionate about building scalable web applications and exploring new technologies.",
    tags: ["JavaScript", "Node.js", "React", "MongoDB"]
  },
  {
    fullName: "Riya Verma",
    image: "https://media.istockphoto.com/id/1311163042/photo/teenage-girl-with-wireless-headphones-using-laptop-for-studying-at-home.jpg?s=612x612&w=0&k=20&c=Y4GLvrU9JfUrDHDY-v8JAtTiW0BaNso8nQBbju_Mnjk=",
    profession: "UI/UX Designer",
    description: "Creative designer focused on crafting user-friendly interfaces and smooth user experiences.",
    tags: ["Figma", "Product Design", "Wireframing"]
  },
  {
    fullName: "Vikram Singh",
    image: "https://media.istockphoto.com/id/2152196154/photo/teenage-boy-sitting-at-desk-in-bedroom-at-home-doing-homework-streaming-music-to-headphones.jpg?s=612x612&w=0&k=20&c=VxArgfX1jBtEvh7pSjsXOeKVLi5IEClqhesMiuGIjKM=",
    profession: "Data Analyst",
    description: "Loves discovering insights from large datasets and creating impactful visualizations.",
    tags: ["Python", "Pandas", "Power BI", "SQL"]
  },
  {
    fullName: "Neha Patel",
    image: "https://media.istockphoto.com/id/1297741073/photo/asian-girl-student-video-conference-e-learning-with-teacher-on-laptop-computer-in-living-room.jpg?s=612x612&w=0&k=20&c=CImhlc6tP2eXLheoICq3Z8QaM2bCxGaDOzyPuskM6qk=",
    profession: "Mobile App Developer",
    description: "Specializes in building fast and user-friendly Android apps.",
    tags: ["Kotlin", "Android Studio", "Firebase"]
  },
  {
    fullName: "Kabir Mehta",
    image: "https://media.istockphoto.com/id/1980152647/photo/teenage-boy-using-laptop-with-headphones.jpg?s=612x612&w=0&k=20&c=VWpRg2AgThpDqK_EGsFo39p__YzeOubUQI6oJYQgS5Y=",
    profession: "Cybersecurity Engineer",
    description: "Focused on protecting systems, performing vulnerability assessments, and securing networks.",
    tags: ["Ethical Hacking", "Networking", "Linux", "Security Tools"]
  }
];
var sum = ''
users.forEach(function(elem){
  sum = sum + `<div class="card">
    <img src="${elem.image}" alt="${elem.fullName}">
    <h3>${elem.fullName}</h3>
    <h4>${elem.profession}</h4>
    <p>${elem.description}</p>
    <div class="tags">${elem.tags.join(', ')}</div>
  </div>`;
})
 console.log(sum);

 var main = document.querySelector('main')
 main.innerHTML = sum