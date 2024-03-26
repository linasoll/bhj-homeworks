const timeValue = document.getElementById('timer');

function countDown() {
timeValue.textContent--;
if (timer.textContent === '0') {
alert('Вы победили в конкурсе!');
clearInterval(intId);
}
}

let intId = setInterval(countDown, 300);
