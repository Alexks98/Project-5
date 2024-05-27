document.getElementById("openChat").addEventListener("click", function() {
    document.getElementById("chatContainer").style.display = "flex";
    document.getElementById("openChat").style.display = "none";
});

document.getElementById("closeChat").addEventListener("click", function() {
    document.getElementById("chatContainer").style.display = "none";
    document.getElementById("openChat").style.display = "block";
});

document.getElementById("aiHelperButton").addEventListener("click", function() {
    addMessage("bot", "Hej! Mit navn er Simon, din personlige AI-hjælper. Hvad kan jeg hjælpe dig med i dag?");
    enableUserInput();
});

document.getElementById("seExpertButton").addEventListener("click", function() {
    addMessage("bot", "Hej! Jeg er Robert. Hvordan kan jeg hjælpe dig i dag?");
    enableUserInput();
});

function addMessage(sender, text) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message " + sender + "-message";
    messageDiv.textContent = text;
    document.getElementById("chatBody").appendChild(messageDiv);
    document.getElementById("chatBody").scrollTop = document.getElementById("chatBody").scrollHeight;
}

function enableUserInput() {
    document.getElementById("userInput").disabled = false;
    document.getElementById("sendButton").disabled = false;
}

document.getElementById("sendButton").addEventListener("click", function() {
    const userInput = document.getElementById("userInput");
    if (userInput.value.trim() !== "") {
        addMessage("user", userInput.value);
        userInput.value = "";
    }
});