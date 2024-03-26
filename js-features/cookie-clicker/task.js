const clickerCounter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

function clicker() {
    clickerCounter.textContent++;
    let num = Number(clickerCounter.textContent);
    if (num % 2 === 0) {
        cookie.width = '200'
    } else {
    cookie.width = '250';
    }
}

cookie.addEventListener('click', clicker);