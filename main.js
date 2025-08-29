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




document.addEventListener("DOMContentLoaded", () => {
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

            alert(`Calling ${service} at ${number}...`);

            // Deduct coins
            coins -= 20;
            coinDisplay.textContent = coins;

            // Generate current time
            const timeNow = new Date().toLocaleTimeString(); // e.g. 11:36:58 AM

            // Create call history item with timestamp
            const historyItem = document.createElement('div');
            historyItem.className = "bg-white p-3 rounded shadow border text-sm text-gray-700";

            historyItem.innerHTML = `
                <div class="font-semibold">${service}</div>
                <div>${number}</div>
                <div class="text-xs text-gray-400 text-right">${timeNow}</div>
            `;

            // Add to top of history
            callHistory.prepend(historyItem);
        });
    });



    document.getElementById('clearHistory').addEventListener('click', () => {
        callHistory.innerHTML = '';
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(button => {
        let copyCount = 0;

        button.addEventListener('click', () => {
            const card = button.closest('.bg-white');
            const numberElem = card.querySelector('.hotline-number');

            if (numberElem) {
                const numberToCopy = numberElem.textContent.trim();

                navigator.clipboard.writeText(numberToCopy)
                    .then(() => {
                        copyCount++;
                        alert(`Number ${numberToCopy} copied to clipboard!\nCopied ${copyCount} times.`);
                    })
                    .catch(err => {
                        alert("Failed to copy!");
                        console.error(err);
                    });
            }
        });
    });
});


