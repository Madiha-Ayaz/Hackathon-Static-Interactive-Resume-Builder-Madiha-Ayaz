
const mobileMenu = document.getElementById('mobile-menu');
const desktopMenu = document.getElementById('desktop-menu');


function checkScreenSize() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 768) {
    
    mobileMenu?.classList.remove('hidden');
    desktopMenu?.classList.add('hidden');
  } else {
    // Show desktop menu for larger screens
    mobileMenu?.classList.add('hidden');
    desktopMenu?.classList.remove('hidden');
  }
}


window.addEventListener('load', checkScreenSize);

window.addEventListener('resize', checkScreenSize);
