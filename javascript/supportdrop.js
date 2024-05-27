// supportdrop.js
document.addEventListener("DOMContentLoaded", function() {
    const supportHeaders = document.querySelectorAll('.support-option-header');
    
    supportHeaders.forEach(header => {
        header.addEventListener('click', () => {
            let content = header.nextElementSibling;
            let arrow = header.querySelector('.arrow'); // Only select the arrow on the right

            console.log('Header clicked:', header);
            console.log('Content:', content);
            console.log('Arrow:', arrow);

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                arrow.classList.remove('rotate');
                console.log('Content hidden');
            } else {
                document.querySelectorAll('.support-option-content').forEach(item => {
                    item.style.maxHeight = null;
                });
                document.querySelectorAll('.support-option-header .arrow').forEach(item => {
                    item.classList.remove('rotate');
                });

                content.style.maxHeight = content.scrollHeight + "px";
                arrow.classList.add('rotate');
                console.log('Content shown:', content.style.maxHeight);
            }
        });
    });
});
