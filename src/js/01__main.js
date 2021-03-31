const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.nav');
if (iconMenu) {
    
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

if (menuBody) {
    menuBody.addEventListener("click", function (e) {
        document.body.classList.remove('_lock');
        menuBody.classList.remove('_active');
        iconMenu.classList.remove('_active');
    });
}