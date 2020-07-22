"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var burger = function burger(menuSelector) {
    var menuElems = document.querySelectorAll(menuSelector);
    menuElems.forEach(function (menu) {
      if (window.screen.availWidth >= 992) {
        menu.classList.remove('menu_vertical');
      } else {
        menu.classList.add('menu_vertical');
      }

      window.addEventListener('resize', function () {
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