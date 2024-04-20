document.querySelector('.burger').addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.toggle('active');
    document.querySelector('.nav_mobile').classList.toggle('active');
    document.querySelector('.burger_close').classList.toggle('active');
    document.querySelector('.burger').classList.toggle('ne_active');
});

document.addEventListener('click', function(e) {
    const nav = document.querySelector('nav');
    if (!nav.contains(e.target) && !document.querySelector('.burger').contains(e.target)) {
        nav.classList.remove('active');
        document.querySelector('.burger').classList.remove('active');
        document.querySelector('.burger').classList.remove('ne_active');
        document.querySelector('.nav_mobile').classList.remove('active');
        document.querySelector('.burger_close').classList.remove('active');

    }
});