// script.js
document.addEventListener("DOMContentLoaded", function() {
    const supportHeaders = document.querySelectorAll('.support-option-header');
    
    supportHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('i.fas');

            if (content.classList.contains('active')) {
                content.classList.remove('active');
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            } else {
                document.querySelectorAll('.support-option-content').forEach(item => {
                    item.classList.remove('active');
                });
                document.querySelectorAll('.support-option-header i.fas').forEach(item => {
                    item.classList.remove('fa-chevron-up');
                    item.classList.add('fa-chevron-down');
                });

                content.classList.add('active');
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        });
    });
});