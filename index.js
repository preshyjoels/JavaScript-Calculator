var userInput = prompt('Choose an Operation: \n 1 for Addition \n 2 for Subtraction \n 3 for Multiplication \n 4 for Division');

if (userInput == 1) {
    var firstinput = parseInt(prompt('First Number:'))
    var secondInput = parseInt(prompt('Second Number:'))
    document.write('For ', firstinput, ' + ', secondInput, '<br/>',' Your answer is ', + firstinput + secondInput);
} else if (userInput == 2) {
    var firstinput = parseInt(prompt('First Number:'))
    var secondInput = parseInt(prompt('Second Number:'))
    document.write('For ', firstinput, ' - ', secondInput, '<br/>',' Your answer is ', + firstinput - secondInput);
} else if (userInput == 3) {
    var firstinput = parseInt(prompt('First Number:'))
    var secondInput = parseInt(prompt('Second Number:'))
    document.write('For ', firstinput, ' * ', secondInput, '<br/>',' Your answer is ', + firstinput * secondInput);
} else if (userInput == 4) {
    var firstinput = parseInt(prompt('First Number:'))
    var secondInput = parseInt(prompt('Second Number:'))
    document.write('For ', firstinput, ' / ', secondInput, '<br/>',' Your answer is ', + firstinput / secondInput);
} else {
    alert('Your selection is not valid. \n\n hit F5 to restart')
}