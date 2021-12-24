const newYear = new Date('Jan 1, 2022 00:00:00').getTime();

var countdownInterval = setInterval(() => {
    countdownFunction();
}, 1000);


function countdownFunction() {
    let currentDate =  new Date().getTime();
    let timeLeft = newYear - currentDate;

    let second = 1000;
    let minute = 60 * second;
    let hour = 60 * minute;
    let day = 24 * hour;

    
    let dayLeft = addZero(Math.floor(timeLeft / day), 3)
    let hourLeft = addZero(Math.floor((timeLeft % day) / hour), 2)
    let minuteLeft = addZero(Math.floor((timeLeft % hour) / minute), 2)
    let secondLeft = addZero(Math.floor((timeLeft % minute) / second), 2)

    function addZero (num, count) {
        return num.toString().padStart(count, "0");
    }

    document.getElementById("countdown").innerHTML = dayLeft + ":" + hourLeft + ":" + minuteLeft + ":" + secondLeft;

    if (timeLeft <= 1000) {
        setTimeout(() => {  document.getElementById("nyt1").src = "./images/nyt_on.png"; }, 250);
        setTimeout(() => {  document.getElementById("nyt2").src = "./images/nyt_on.png"; }, 500);
        setTimeout(() => {  document.getElementById("nyt3").src = "./images/nyt_on.png"; }, 750);
        setTimeout(() => {  document.getElementById("nyt4").src = "./images/nyt_on.png"; }, 1000);
        setTimeout(() => {  document.getElementById("nyt5").src = "./images/nyt_on.png"; }, 1250);
        timeLeft == 0;
        clearInterval(countdownInterval);
        $(document).ready(function() {
            $(".main").fireworks({
                opacity: 0.9,
            })
        })
    }
}

