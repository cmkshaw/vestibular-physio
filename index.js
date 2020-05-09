const btnStartTimer = document.getElementById('s1-timer');
const buttons = document.querySelectorAll('.button');

btnStartTimer.addEventListener('click', function (event) {
    setTimeout(setTimer, 60000);
    btnStartTimer.innerHTML = 'In Progress';
});

function setTimer() {
    alert("All done.");
    btnStartTimer.innerHTML = 'Set Timer';
}

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        animateObject(this);
    });
});

function animateObject(button) {
    button.nextElementSibling.classList.add('animate');
}
