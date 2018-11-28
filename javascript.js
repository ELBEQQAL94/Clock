// Get Element From DOM
const clock = document.querySelector('.clock');

function getClock() {
    // Get Current Date
let nowTime = new Date();

// Get Hour
let hours = nowTime.getHours();
// Get Minutes
let minutes = nowTime.getMinutes();
// Get Seconds
let Seconds = nowTime.getSeconds();
if(Seconds < 10 ) {
    Seconds = '0' + Seconds;
}
if(hours < 10 ) {
    hours = '0' + Seconds;
}
if(minutes < 10 ) {
    minutes = '0' + Seconds;
}
    clock.innerHTML = `${hours}:${minutes}:${Seconds}`;
    
}
setInterval(getClock, 100);