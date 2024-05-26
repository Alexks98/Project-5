document.addEventListener("DOMContentLoaded", function() {
    // Mulighed array
    var userTypeOptions = ["Arkitekt","Building system integrator","DIY eller forhandler","E-handels pure player","El-distributør","Elektriker","Entreprenør","Husejer/forbruger","Husbyggerfirma/ejendomsudvikler", "Indretningsarkitekt","Ingeniør","Ingeniørarbejde, indkøb, bygge-og anlægsvirksomhed","Industrial system integrator","IT-distributør","IT-kanalpartner","Konsulent","Maskinbygger/OEM","Power system integrator","Slutbruger hos stort selskab","Slutbruger i små/mellemstore virksomheder","Software- ellerserviceudbyder","Solenergiinstallation","Studerende/jobsøgende","Tavlebygger"];

    // Find select element
    var userTypeSelect = document.getElementById("user-type");

    // Generer og tilføj option elementer ved hjælp af et loop
    for (let i = 0; i < userTypeOptions.length; i++) {
        var option = document.createElement("option");
        option.value = userTypeOptions[i].toLowerCase();
        option.textContent = userTypeOptions[i];
        userTypeSelect.appendChild(option);
    }

    var form = document.querySelector(".subscription-form");
    var popup = document.getElementById("thank-you-popup");
    var closeBtn = document.getElementById("close-popup");
    var popupMessage = document.getElementById("popup-message");

    // Sørg for, at pop-up boksen er skjult ved indlæsning af siden
    popup.style.display = "none";

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Forhindrer formularen i at blive sendt

        // Vis pop-up boksen med takke-beskeden
        let message = "Tak for din tilmelding!";
        popupMessage.textContent = message;
        popup.style.display = "flex";

        // Ryd inputfelterne efter indsendelse
        form.reset();
    });

    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
    });

    // Luk pop-up boksen, hvis man klikker uden for indholdet
    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});