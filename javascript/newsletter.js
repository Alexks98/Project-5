document.addEventListener("DOMContentLoaded", function() {
    // Håndter formularindsendelse
    var form = document.querySelector(".subscription-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Forhindre faktisk indsendelse

        let email = document.getElementById("email").value;
        let userType = document.getElementById("user-type").value;

        if (email && userType) {
            // Vis tak-besked i en pop-up boks
            showThankYouPopup(email, userType);
            
            // Nulstil formularen efter indsendelse
            form.reset();
        }
    });

    // Funktion til at vise tak-besked i en pop-up boks
    function showThankYouPopup(email, userType) {
        var popup = document.getElementById("thank-you-popup");
        var popupMessage = document.getElementById("popup-message");
        popupMessage.textContent = `Tak for din tilmelding til vores nyhedsbrev med email: ${email} som ${userType}!`;
        popup.style.display = "block";

        var closeBtn = document.getElementById("close-popup");
        closeBtn.addEventListener("click", function() {
            popup.style.display = "none";
        });
    }
});