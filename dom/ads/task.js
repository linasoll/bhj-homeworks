const rotators = document.querySelectorAll('.rotator__case');

let i = 0;
function change() {
    rotators[i].classList.remove('rotator__case_active')
    if (i < rotators.length - 1){
        rotators[i].nextElementSibling.classList.add('rotator__case_active');
        i++;
    } else {
        rotators[0].classList.add('rotator__case_active');
        i = 0;
    }
}

setInterval(change, 1000);