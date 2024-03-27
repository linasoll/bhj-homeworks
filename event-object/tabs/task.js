let tab = document.querySelectorAll('.tab');
let tabActive = document.querySelector('.tab_active');
let content = document.querySelectorAll('.tab__content');
let contentActive = document.querySelector('.tab__content_active');

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', toggleActive);
}

function toggleActive() {
    tabActive.classList.remove('tab_active');
    this.classList.add('tab_active');
    tabActive = this;
    let indexTab = [...tab].findIndex(elem => elem.classList.contains('tab_active'));
    let indexContent = [...content].findIndex(elem => elem.classList.contains('tab__content_active'));
    content[indexContent].classList.remove('tab__content_active');
    content[indexTab].classList.add('tab__content_active')
}