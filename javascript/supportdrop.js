// supportdrop.js

document.addEventListener("DOMContentLoaded", function() {
    const supportHeaders = document.querySelectorAll('.support-option-header'); //the variable ddeclared with a const to save the Node list of the header elemnts//
    //the nodelist (list of elements) is an ARRAY like and is iterated by forEach down//
    

    // forEach funktion til iteration over arrays// 
    // Loop (forEach): Iterer over hvert element i NodeList of supportHeaders//
    supportHeaders.forEach(header => {
        // Event: Denne funktion kører, når en header klikkes//
        header.addEventListener('click', () => {
            let content = header.nextElementSibling; // Variable Scope (LET)sikrer at variablerne kun er tilgængelige inden for denne specifikke blok "click function"
            let arrow = header.querySelector('.arrow'); 

            //Fejlfinding: debuggng//
            console.log('Header clicked:', header);
            console.log('Content:', content);
            console.log('Arrow:', arrow);

            //if-else struktur til at bestemme, om indholdet skal vises eller skjules
            if (content.style.maxHeight) {
                content.style.maxHeight = null; // Operatorer = til at nulstille maxHeight til ingen værdi (closed tap)//
                arrow.classList.remove('rotate'); //classlist is an object that can manipulae html with a method Remove//
                console.log('Content hidden');
            } else {
                // Kontrolstruktur (loops), DOM: Hvis indholdet er skjult, skjul alt andet indhold og roter alle pile tilbage//
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
