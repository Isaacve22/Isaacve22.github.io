// Fecha de finalización de la cuenta regresiva
const endDate = new Date('2023-07-29T15:19:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = endDate - now;

  if (timeLeft <= 0) {
    // Mostrar el vídeo y el texto adicional cuando la cuenta regresiva ha terminado
    document.getElementById('countdown').style.display = 'none';
    document.getElementById('video-container').style.display = 'block';
    document.getElementById('text-container').style.display = 'block';
  } else {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = formatTime(days);
    document.getElementById('hours').innerText = formatTime(hours);
    document.getElementById('minutes').innerText = formatTime(minutes);
    document.getElementById('seconds').innerText = formatTime(seconds);
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Actualizar la cuenta regresiva cada segundo
setInterval(updateCountdown, 1000);
