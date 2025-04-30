
const eventDate = new Date("2025-06-01T00:00:00").getTime();

function updateTimer() {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  if (timeLeft < 0) {
    document.getElementById("timer").innerHTML = "<h2>Event Started!</h2>";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, '0');
  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}


setInterval(updateTimer, 1000);
updateTimer(); 
