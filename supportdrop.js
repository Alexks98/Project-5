// supportdrop.js
document.addEventListener("DOMContentLoaded", function() {
    const supportHeaders = document.querySelectorAll('.support-option-header');
    
    supportHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('i.fas');

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            } else {
                document.querySelectorAll('.support-option-content').forEach(item => {
                    item.style.maxHeight = null;
                });
                document.querySelectorAll('.support-option-header i.fas').forEach(item => {
                    item.classList.remove('fa-chevron-up');
                    item.classList.add('fa-chevron-down');
                });

                content.style.maxHeight = content.scrollHeight + "px";
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        });
    });
});
