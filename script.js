document.addEventListener('DOMContentLoaded', function() {
    const burgerOpen = document.querySelector('.burger');
    const burgerClose = document.querySelector('.burger_close');
    const navMobile = document.querySelector('.nav_mobile');

    // Функция для открытия/закрытия меню
    function toggleMenu() {
        navMobile.classList.toggle('active');
        
        // Переключаем видимость иконок
        if (navMobile.classList.contains('active')) {
            burgerOpen.style.display = 'none';
            burgerClose.style.display = 'block';
        } else {
            burgerOpen.style.display = 'block';
            burgerClose.style.display = 'none';
        }
    }

    // Слушатели кликов на иконки
    burgerOpen.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    burgerClose.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Закрытие меню при клике вне его области
    document.addEventListener('click', function(e) {
        if (navMobile.classList.contains('active')) {
            // Если кликнули не по меню и не по кнопкам бургера
            if (!navMobile.contains(e.target) && !burgerOpen.contains(e.target) && !burgerClose.contains(e.target)) {
                toggleMenu();
            }
        }
    });
});