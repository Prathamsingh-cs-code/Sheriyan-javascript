
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


