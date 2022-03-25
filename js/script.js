let container = document.querySelector('.container');
let card = document.querySelector('.content__card');
let content = document.querySelector('.content');
let icon = document.querySelector('.content__icon');
let iconHeader = document.querySelector('.card__header__icon');

container.addEventListener('mouseover', () =>{
    card.classList.add('activeCard');
    content.classList.add('activeContent');
    container.classList.add('activeContainer');
    icon.classList.add('activeIcon');
    iconHeader.classList.add('activeIconHeader');
});


container.addEventListener('mouseout', () =>{
    card.classList.remove('activeCard');
    icon.classList.remove('activeIcon')
    content.classList.remove('activeContent');
    container.classList.remove('activeContainer');
    iconHeader.classList.remove('activeIconHeader');

});
