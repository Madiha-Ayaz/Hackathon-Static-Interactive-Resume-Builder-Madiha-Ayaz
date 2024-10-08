"use strict";
const mobileMenu = document.getElementById('mobile-menu');
const desktopMenu = document.getElementById('desktop-menu');
function checkScreenSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
        mobileMenu === null || mobileMenu === void 0 ? void 0 : mobileMenu.classList.remove('hidden');
        desktopMenu === null || desktopMenu === void 0 ? void 0 : desktopMenu.classList.add('hidden');
    }
    else {
        // Show desktop menu for larger screens
        mobileMenu === null || mobileMenu === void 0 ? void 0 : mobileMenu.classList.add('hidden');
        desktopMenu === null || desktopMenu === void 0 ? void 0 : desktopMenu.classList.remove('hidden');
    }
}
window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);
