var noOfButtons = document.querySelectorAll('.drum').length;

// this was used to play sounds when a button is clicked by the mouse
for (var i = 0; i < noOfButtons; i++) {
    // this adds a listener to each button when the program starts
    document.querySelectorAll('.drum')[i].addEventListener('click', handleClick);
    function handleClick() {
        var buttonInnerHTML = this.innerHTML.toLowerCase();
        hitTheDrums(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }
}

// this adds a listener to the whole document and plays the sound when a key is pressed on the keyboard
document.addEventListener('keypress', function (event) {
    hitTheDrums(event.key.toLowerCase())
    buttonAnimation(event.key.toLowerCase());
});

function hitTheDrums(key) {
    switch (key) {
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function () {
        activeButton.classList.remove('pressed');
    }, 100);
}
