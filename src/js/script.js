window.addEventListener('DOMContentLoaded', () => {

    const burger = (menuSelector) => {
        const menuElems = document.querySelectorAll(menuSelector);

        menuElems.forEach((menu) => {
            if (window.screen.availWidth >= 992) {
                menu.classList.remove('menu_vertical');
            } else {
                menu.classList.add('menu_vertical');
            }

            window.addEventListener('resize', () => {
                if (window.screen.availWidth >= 992) {
                    menu.classList.remove('menu_vertical');
                } else {
                    menu.classList.add('menu_vertical');
                }
            });
        });
    };

    burger('.header__wrapper .menu');
});