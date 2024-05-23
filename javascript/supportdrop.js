// supportdrop.js
document.addEventListener("DOMContentLoaded", function() {
    const supportHeaders = document.querySelectorAll('.support-option-header');
    
    supportHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const arrow = header.querySelector('.arrow'); // Only select the arrow on the right

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                arrow.classList.remove('rotate');
            } else {
                document.querySelectorAll('.support-option-content').forEach(item => {
                    item.style.maxHeight = null;
                });
                document.querySelectorAll('.support-option-header .arrow').forEach(item => {
                    item.classList.remove('rotate');
                });

                content.style.maxHeight = content.scrollHeight + "px";
                arrow.classList.add('rotate');
            }
        });
    });
});
