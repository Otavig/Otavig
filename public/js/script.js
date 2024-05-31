document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu');
    const menuMobile = document.getElementById('menu-mobile');
    const overlayMenu = document.getElementById('overlay-menu');
    const btnFechar = document.querySelector('.btn-fechar');

    btnMenu.addEventListener('click', () => {
        menuMobile.style.display = 'block';
        overlayMenu.style.display = 'block';
    });

    btnFechar.addEventListener('click', () => {
        menuMobile.style.display = 'none';
        overlayMenu.style.display = 'none';
    });

    overlayMenu.addEventListener('click', () => {
        menuMobile.style.display = 'none';
        overlayMenu.style.display = 'none';
    });
});


// var onda1 = document.getElementById('onda1')
// var onda2 = document.getElementById('onda2')
// var onda3 = document.getElementById('onda3')
// var onda4 = document.getElementById('onda4')

// window.addEventListener('scroll', function(){
//     var rolagemPos = window.scrollY

//     onda1.style.backgroundPositionX = 400 + rolagemPos * 4 + 'px';
//     onda2.style.backgroundPositionX = 300 + rolagemPos * -4 + 'px';
//     onda3.style.backgroundPositionX = 200 + rolagemPos * 2 + 'px';
//     onda4.style.backgroundPositionX = 100 + rolagemPos * -2 + 'px';
// })
