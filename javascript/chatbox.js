document.addEventListener("DOMContentLoaded", function() {
    const chatboxToggle = document.querySelector('.chatbox-toggle');
    const chatboxContent = document.querySelector('.chatbox-content');
    const chatboxClose = document.querySelector('.chatbox-close');
    const chatMessages = document.querySelector('.chatbox-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');

    const automatedMessages = [
        "Hej! Vi er her for at hjælpe dig dag. Kunne du tænke dig at chatte med vores:",
    ];

    const chatOptions = document.createElement('div');
    chatOptions.classList.add('chatbox-choice');
    chatOptions.innerHTML = `
        <button class="chat-option" id="ai-help">AI Hjælp</button>
        <button class="chat-option" id="se-expert">SE Ekspert</button>
    `;

    let currentMessageIndex = 0;

    chatboxToggle.addEventListener('click', function() {
        chatboxContent.style.display = 'flex';
        displayAutomatedMessage();
    });

    chatboxClose.addEventListener('click', function() {
        chatboxContent.style.display = 'none';
        chatMessages.innerHTML = '';  // Clear previous messages
    });

    document.getElementById('ai-help').addEventListener('click', function() {
        currentMessageIndex = 1;
        displayAutomatedMessage();
    });

    document.getElementById('se-expert').addEventListener('click', function() {
        currentMessageIndex = 2;
        displayAutomatedMessage();
    });

    chatSend.addEventListener('click', function() {
        const message = chatInput.value.trim();
        if (message) {
            displayUserMessage(message);
            chatInput.value = '';
        }
    });

    chatInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            chatSend.click();
        }
    });

    function displayAutomatedMessage() {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', 'automated-message');
        messageElement.textContent = automatedMessages[currentMessageIndex];
        chatMessages.appendChild(messageElement);

        if (currentMessageIndex === 0) {
            chatMessages.appendChild(chatOptions);
        }
    }

    function displayUserMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', 'user-message');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
    }
});
