if (document.querySelector('.message-box') != null) {
    const messageBox = document.querySelector('.message-box');
    const closeButton = document.querySelector('.message-box .x');
    closeButton.addEventListener('click', () => {
        messageBox.style.display = 'none';
    });
}
else {

}