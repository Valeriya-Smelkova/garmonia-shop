const likeButtons = document.querySelectorAll('.like');
likeButtons.forEach (likeButton => {
    likeButton.addEventListener('click', (likeButton) => {
        likeButton.target.classList.toggle('like_liked');
    });
})