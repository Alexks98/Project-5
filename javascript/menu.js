document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const navLinks = document.getElementById('navLinks');
    const hamburgerMenu = document.getElementById('hamburgerMenu');

    // Object to manage menu state and actions
    const menuManager = {
        navLinks,
        hamburgerMenu,
        isMenuVisible: false, // A state to track menu visibility

        showMenu() {
            this.navLinks.style.display = 'flex';
            this.isMenuVisible = true;
        },
        hideMenu() {
            this.navLinks.style.display = 'none';
            this.isMenuVisible = false;
        },
        toggleMenu(event) {
            event.stopPropagation(); // Prevents the event from bubbling up
            this.isMenuVisible ? this.hideMenu() : this.showMenu(); // Using ternary operator
        },
        hideMenuOnClick(event) {
            const isClickInsideMenu = this.navLinks.contains(event.target) || this.hamburgerMenu.contains(event.target);
            if (!isClickInsideMenu) {
                this.hideMenu();
            }
        },
        checkScreenSize() {
            if (window.innerWidth <= 768) {
                this.hamburgerMenu.addEventListener('click', this.toggleMenu.bind(this));
                document.addEventListener('click', this.hideMenuOnClick.bind(this));
                this.navLinks.removeEventListener('mouseleave', this.hideMenu.bind(this));
            } else {
                this.hamburgerMenu.removeEventListener('click', this.toggleMenu.bind(this));
                document.removeEventListener('click', this.hideMenuOnClick.bind(this));
                this.navLinks.removeEventListener('mouseleave', this.hideMenu.bind(this));
                this.showMenu(); // Ensure menu is visible on larger screens
            }
        }
    };

    // Initial check
    menuManager.checkScreenSize();

    // Check screen size on resize
    window.addEventListener('resize', menuManager.checkScreenSize.bind(menuManager));
  
    // Sample debugging function
    function debugNav() {
        console.log('Nav Links:', menuManager.navLinks);
        console.log('Hamburger Menu:', menuManager.hamburgerMenu);
    }

    debugNav();

    // Example array and loop
    let menuItems = ['Produkter', 'Løsninger', 'Boligejeren', 'Support', 'Om Os'];
    for (let i = 0; i < menuItems.length; i++) {
        console.log(`Menu Item ${i + 1}: ${menuItems[i]}`);
    }
});
