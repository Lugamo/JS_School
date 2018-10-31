// Create a countdown process

// Set the seconds to add
const time = 300;

// The Countdown will calculate de differencie between actual date and the future date
let futureDate = new Date();
futureDate = futureDate.setSeconds(futureDate.getSeconds() + time);

const countDown = setInterval(() => {
  const actualDate = new Date();
  const distance = futureDate - actualDate.getTime();

  // Time calculations for minutes and seconds
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if (distance > 0) {
    // Display the result in the element
    if (minutes < 10 && seconds < 10) {
      document.getElementById('finalCountdown').innerHTML = `0${minutes}:0${seconds}`;
    } else if (minutes > 10 && seconds < 10) {
      document.getElementById('finalCountdown').innerHTML = `${minutes}:${seconds}`;
    } else if (minutes < 10 && seconds > 10) {
      document.getElementById('finalCountdown').innerHTML = `0${minutes}:${seconds}`;
    } else {
      document.getElementById('finalCountdown').innerHTML = `${minutes}:${seconds}`;
    }
  } else {
    clearInterval(countDown);
    document.getElementById('finalCountdown').innerHTML = 'End';
  }
}, 1000);
