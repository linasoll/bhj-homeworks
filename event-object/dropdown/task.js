const value = document.querySelector('.dropdown__value');
value.addEventListener('click', openList);

function openList (){
    document.querySelector('.dropdown__list').classList.add('dropdown__list_active')  
}

function closeList (){
    document.querySelector('.dropdown__list').classList.remove('dropdown__list_active')  
}

const arr = Array.from(document.querySelectorAll('.dropdown__item'));
arr.forEach((item, index) => {
    item.onclick = () => {
        closeList();
        value.textContent = arr[index].textContent;
        return false;
}
})