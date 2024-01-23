function updateClock() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    var timeString = hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock').innerText = timeString;
}
// Update the clock every second
setInterval(updateClock, 1000);
// Initial update
updateClock();
