times = document.querySelector(".times")

setInterval(function(){
    var date = new Date();
    time = date.toLocaleTimeString();
    times.innerHTML = time;

},1000)

let year = new Date()
console.log(toString(year.getFullYear))
