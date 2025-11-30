var body = document.body
var h2 = document.querySelector('h2')


body.addEventListener('keydown', function(dets){
h2.innerHTML = dets.code
})