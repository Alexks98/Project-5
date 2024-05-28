// supportdrop.js

document.addEventListener("DOMContentLoaded", function() {
    const supportHeaders = document.querySelectorAll('.support-option-header'); //the variable ddeclared with a const to save the Node list of the header elemnts//

    // forEach funktion//
    // Loop (forEach)
    supportHeaders.forEach(header => {
        // Event//
        header.addEventListener('click', () => {
            let content = header.nextElementSibling; // Variable Scope (LET)sikrer at variablerne kun er tilgængelige inden for denne specifikke blok "click function"
            let arrow = header.querySelector('.arrow'); 

            //Fejlfinding: debuggng//
            console.log('Header clicked:', header);
            console.log('Content:', content);
            console.log('Arrow:', arrow);

            //if-else struktur//
            if (content.style.maxHeight) {
                content.style.maxHeight = null; // Operatorer = //
                arrow.classList.remove('rotate'); //Object: classlist, Method: remove//
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
