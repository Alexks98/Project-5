// javascript/supportdrop.js

document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const navLinks = document.getElementById('navLinks');
    const hamburgerMenu = document.getElementById('hamburgerMenu');

    // Variables and Event
    hamburgerMenu.addEventListener('click', toggleMenu);

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
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navLinks.contains(event.target) || hamburgerMenu.contains(event.target);
        if (!isClickInsideMenu) {
            navLinks.style.display = 'none';
        } 
    });

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