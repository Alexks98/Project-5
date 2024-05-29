// javascript/supportdrop.js

document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const navLinks = document.getElementById('navLinks');
    const hamburgerMenu = document.getElementById('hamburgerMenu');


    // Function to toggle menu visibility
    function toggleMenu(event) {
        event.stopPropagation(); // Prevents the event from bubbling up
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
        }
    }
    // Hide the menu when clicking outside of it
    function hideMenu(event) {
        const isClickInsideMenu = navLinks.contains(event.target) || hamburgerMenu.contains(event.target);
        if (!isClickInsideMenu) {
            navLinks.style.display = 'none';
        }
}

    // Check screen size and add/remove event listeners
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            hamburgerMenu.addEventListener('click', toggleMenu);
            document.addEventListener('click', hideMenu);
        } else {
            hamburgerMenu.removeEventListener('click', toggleMenu);
            document.removeEventListener('click', hideMenu);
            navLinks.style.display = ''; // Reset the display property
        }
    }

    // Initial check
    checkScreenSize();

    // Check screen size on resize
    window.addEventListener('resize', checkScreenSize);

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

    // Example usage of the object
    hamburgerMenu.addEventListener('mouseover', navConfig.showMenu);
    hamburgerMenu.addEventListener('mouseout', navConfig.hideMenu);
});