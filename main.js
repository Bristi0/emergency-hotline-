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


