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

//debugging and objects and variable scope (global scope)
const user = {
    name: "Thomas",
    role: "user"
};
console.log(`User name: ${user.name}, User role: ${user.role}`);

//an array and variable scope (global scope)
const automatedMessages = [
    "Hej! Vi er her for at hjælpe dig dag.",
    "Kunne du tænke dig at chatte med vores AI-hjælper eller en SE-ekspert?",
    "Klik på en af knapperne nedenfor for at starte."
];

// Loop within a function
function displayAutomatedMessages() {
    for (const message of automatedMessages) {
        addMessage("bot", message);
    }
}


document.getElementById('openChat').addEventListener('click', function() {
    console.log("Open button clicked");
    const chatContainer = document.getElementById('chatContainer');
    chatContainer.style.display = 'flex';
    setTimeout(() => {
        chatContainer.classList.add('active');
        console.log("Chat container activated");
    }, 10); // give some time for the transition
    this.style.display = 'none';
    console.log("Open button hidden");
});

document.getElementById('closeChat').addEventListener('click', function() {
    console.log("Close button clicked");
    const chatContainer = document.getElementById('chatContainer');
    chatContainer.classList.remove('active');
    setTimeout(() => {
        chatContainer.style.display = 'none';
        document.getElementById('openChat').style.display = 'flex';
        console.log("Chat container hidden and open button displayed");
    }, 1); //the lower the number the faster the transition
});
