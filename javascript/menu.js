// javascript/supportdrop.js

document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const navLinks = document.getElementById('navLinks');
    const hamburgerMenu = document.getElementById('hamburgerMenu');

  // Function to show the menu
  function showMenu() {
    navLinks.style.display = 'flex';
}

// Function to hide the menu
function hideMenu() {
    navLinks.style.display = 'none';
}


    // Function to toggle menu visibility on click mobilversion
    function toggleMenu(event) {
        event.stopPropagation(); // Prevents the event from bubbling up
        if (navLinks.style.display === 'flex') {
            hideMenu();
        } else {
            showMenu();
        }
    }
    // Hide the menu when clicking outside of it
    function hideMenuOnClick(event) {
        const isClickInsideMenu = navLinks.contains(event.target) || hamburgerMenu.contains(event.target);
        if (!isClickInsideMenu) {
            hideMenu();
        }
    }

    
    // Check screen size and add/remove event listeners
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            hamburgerMenu.addEventListener('click', toggleMenu);
            document.addEventListener('click', hideMenuOnClick);
            navLinks.addEventListener('mouseleave', hideMenu); 
        } else {
            hamburgerMenu.removeEventListener('click', toggleMenu);
            document.removeEventListener('click', hideMenuOnClick);
            navLinks.removeEventListener('mouseleave', hideMenu);
            showMenu(); // Ensure menu is visible on larger screens
        }
    }
   
    // Initial check
    checkScreenSize();

    // Check screen size on resize
    window.addEventListener('resize', checkScreenSize);

    // Mouseover for showing menu
    hamburgerMenu.addEventListener('mouseover', showMenu);
    navLinks.addEventListener('mouseover', showMenu);
    

    // Sample debugging function
    function debugNav() {
        console.log('Nav Links:', navLinks);
        console.log('Hamburger Menu:', hamburgerMenu);
    }

    debugNav();

    // Example array and loop
    let menuItems = ['Produkter', 'Løsninger', 'Boligejeren', 'Support', 'Om Os'];
    for (let i = 0; i < menuItems.length; i++) {
        console.log(`Menu Item ${i + 1}: ${menuItems[i]}`);
    }
});