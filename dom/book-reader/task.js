let sizes = document.querySelectorAll('.font-size');
let sizeActive = document.querySelector('.font-size_active');
const book = document.getElementById('book');

for (let size of sizes) {
    size.addEventListener('click', toggleActive)
}

function toggleActive(e) {
    sizeActive.classList.remove('font-size_active');
    this.classList.add('font-size_active');
    sizeActive = this;
    
    if (this.getAttribute('data-size') === 'small'){
        book.classList.add('book_fs-small');
        book.classList.remove('book_fs-big');
        e.preventDefault();
    }

    if (this.getAttribute('data-size') === 'big'){
        book.classList.add('book_fs-big');
        book.classList.remove('book_fs-small');
        e.preventDefault();
    }
}