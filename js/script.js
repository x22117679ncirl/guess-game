/* Mario Petrizzelli
Guess Game
25 11 2022
*/

let array = [];
var count = 0;
function createArray() {
    // Creates an array of 5 random number 1-10
    for (i = 0; i < 5; i++) {
        array[i] = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    }
    // document.getElementById("debug").innerHTML = ("This array was created on load of the page: " + array.toString());
}

function play() {
    var num;
    num = parseInt(prompt("Please insert a number, between 1-10, that you think is within the created array", "1-10"));

    // Counts how many times user's number appeared in the array
    for (j = 0; j < array.length; j++) {
        if (num == array[j]) {
            count++;
        }
    }

    // Shows the created array and the choice of the player
    document.getElementById("main").innerHTML = ("The created array was: " + array.toString());
    document.getElementById("choice").innerHTML = ("You choose: " + num + " and it appeared " + + count + " times within the array");

    // Ouput if the player won or lost (found the number within the array)
    if (count <= 0) {
        document.getElementById("result").innerHTML = ("You lost!");
    } else {
        document.getElementById("result").innerHTML = ("You won!");
    }

}

function reset() {
    // Reloads the page/game (each reload creates a new array)
    location.reload();
}
