document.addEventListener("DOMContentLoaded", function() {
    const chatboxToggle = document.querySelector('.chatbox-toggle');
    const chatboxContent = document.querySelector('.chatbox-content');
    const chatboxClose = document.querySelector('.chatbox-close');

    chatboxToggle.addEventListener('click', function() {
        chatboxContent.style.display = 'flex';
    });

    chatboxClose.addEventListener('click', function() {
        chatboxContent.style.display = 'none';
    });

    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatMessages = document.querySelector('.chatbox-messages');

    chatSend.addEventListener('click', function() {
        const message = chatInput.value.trim();
        if (message) {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            chatMessages.appendChild(messageElement);
            chatInput.value = '';
        }
    });

    chatInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            chatSend.click();
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const chatboxToggle = document.querySelector('.chatbox-toggle');
    const chatboxContent = document.querySelector('.chatbox-content');
    const chatboxClose = document.querySelector('.chatbox-close');

    chatboxToggle.addEventListener('click', function() {
        chatboxContent.style.display = 'flex';
    });

    chatboxClose.addEventListener('click', function() {
        chatboxContent.style.display = 'none';
    });

    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatMessages = document.querySelector('.chatbox-messages');

    chatSend.addEventListener('click', function() {
        const message = chatInput.value.trim();
        if (message) {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            chatMessages.appendChild(messageElement);
            chatInput.value = '';
        }
    });

    chatInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            chatSend.click();
        }
    });
});