// Progress bar demo: pick a random percent when the button is clicked

// const btn = document.getElementById('randomize');
// const inner = document.querySelector('.inner');

// if (btn && inner) {
// 	btn.addEventListener('click', () => {
// 		// pick a random value 0..100
// 		const percent = Math.floor(Math.random() * 101);
// 		inner.style.width = percent + '%';
// 		// show the percentage inside the progress bar
// 		inner.textContent = percent + '%';
// 	});
// } else {
// 	// helpful message for debugging if elements are missing
// 	console.warn('randomize button or .inner element not found in DOM');
// }
var grow = 0
var btn = document.querySelector("button");
var h2 = document.querySelector("h2");
var inner = document.querySelector(".inner");
btn.addEventListener('click', function(){
   btn.style.pointerEvents = 'none';
   var num= 50+Math.floor(Math.random()*100);
console.log(num);

var int = setInterval(function(){
    grow++
    inner.style.width = grow + '%';
    h2.innerHTML = grow + '%';
  }, num);

  setTimeout(() => {
  clearInterval(int);
  btn.innerHTML = 'Download Complete';
  btn.style.opacity = '0.5';
  console.log('Download Complete', num/10, 'seconds');
}, num*100);
})


