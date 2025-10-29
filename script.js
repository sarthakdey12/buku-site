// Simulate sending messages
document.getElementById('send-btn').addEventListener('click', () => {
    const input = document.getElementById('msg-input');
    const messages = document.querySelector('.messages');
    if (input.value.trim()) {
        const newMsg = document.createElement('div');
        newMsg.className = 'message';
        newMsg.innerHTML = `<strong>You:</strong> ${input.value}`;
        messages.appendChild(newMsg);
        input.value = '';
        messages.scrollTop = messages.scrollHeight; // Auto-scroll
    }
});

// Toggle channels (basic)
document.querySelectorAll('.channel').forEach(channel => {
    channel.addEventListener('click', () => {
        document.querySelectorAll('.channel').forEach(c => c.classList.remove('active'));
        channel.classList.add('active');
        alert(`Switched to ${channel.textContent}`); // Placeholder
    });
});
