document.addEventListener("DOMContentLoaded", () => {
    let likeCount = 0;
    const likeDisplay = document.getElementById('likeCount');
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            likeCount++;
            likeDisplay.textContent = likeCount;
        });
    });
});



d
let coins = 100;
const coinDisplay = document.getElementById('coinCount');
const callHistory = document.getElementById('callHistory');

const callButtons = document.querySelectorAll('.call-btn');

callButtons.forEach(button => {
    button.addEventListener('click', () => {
        const service = button.getAttribute('data-service');
        const number = button.getAttribute('data-number');

        if (coins < 20) {
            alert("Not enough coins to make a call!");
            return;
        }

        // Show alert
        alert(`Calling ${service} at ${number}...`);

        // Deduct coins
        coins -= 20;
        coinDisplay.textContent = coins;

        // Add to call history
        const historyItem = document.createElement('div');
        historyItem.className = "border-b py-2 text-sm text-gray-700";
        historyItem.innerHTML = `<strong>${service}</strong> - ${number}`;
        callHistory.prepend(historyItem); // Add to top
    });
});
