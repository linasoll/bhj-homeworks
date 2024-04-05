document.addEventListener('scroll', onScroll)
    
function onScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(elem => {
        revealTop = elem.getBoundingClientRect().top;
        revealBottom = elem.getBoundingClientRect().bottom;
        if ((revealTop < window.innerHeight) && (revealBottom > window.innerHeight)) {
            elem.classList.add('reveal_active');
        }
    })
};