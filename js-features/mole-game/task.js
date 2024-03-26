const score = document.getElementById('dead');
const lose = document.getElementById('lost');

getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i < 10; i++) {
    let hole = getHole(i);
    hole.addEventListener('click', function() {
        if (hole.classList.contains('hole_has-mole')) {
            score.textContent++;
            if (score.textContent === '10') {
                alert('Победа');
                score.textContent = '0';
                lose.textContent = '0';
            }
        } else {
            lose.textContent++;
            if (lose.textContent === '5') {
                alert('Поражение');
                score.textContent = '0';
                lose.textContent = '0';
            }
        } 
    })
}


