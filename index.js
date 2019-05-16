var btnStartTimer = document.getElementById('s1-timer');
var buttons = document.querySelectorAll('.button');

btnStartTimer.addEventListener('click', function (event) {
   setTimeout(startTimer, 60000);
});

function startTimer() {
    alert("All done.");
}

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        animateObject(this);
    });
});

function animateObject(button) {
    button.nextElementSibling.classList.add('animate');
}
