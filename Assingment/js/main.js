// GAME 1
function game1() {

    let name = document.getElementById('name').value;


    document.getElementById('hello').innerHTML = "Hello " + name + ", Nice work! Let's start!";

}

// GAME 2
function game2() {
    let f = document.getElementById('insertF').value;
    let c = (f - 32) / 1.8;
    document.getElementById('converted').innerHTML = c + ("Celsius");
}

//GAME 3

let option1 = document.getElementsByClassName("a1q1");

option1[0].addEventListener("click", function() {
    alert('Wrong Answer');
});

option1[1].addEventListener("click", function() {
    alert('Wrong Answer');
});

option1[2].addEventListener("click", function() {
    alert('Right Answer!!! _|,,|');
});

option1[3].addEventListener("click", function() {
    alert('Wrong Answer');
});

//QUESTION 2

let option2 = document.getElementsByClassName("a2q2");

option2[0].addEventListener("click", function() {
    alert('Wrong Answer');
});

option2[1].addEventListener("click", function() {
    alert('Wrong Answer');
});

option2[2].addEventListener("click", function() {
    alert('Right Answer!!! _|,,|');
});

option2[3].addEventListener("click", function() {
    alert('Wrong Answer, but he IS the night');
})
// GAME 4
let button4 = document.getElementById('submit4');
button4.addEventListener('click', game4)

function game4() {

    let age = document.getElementById('age').value;
    if (age < 0) {
        alert("you're kidding, right?");
    } else if (age == 0) {
        alert("oh Baby, how can you work with computer that early in life");
    } else if (age == 100) {
        alert("you are too old to play !");
    } else {
        alert("you're good to go!");
    }
}

// GAME 5
function game5() {

    let number = document.getElementById('number').value;
    let divisor = 2;
    let remainder = number % divisor;


    if (number < 2) {
        alert("It's not Prime")
    } else if (number == 2) {
        alert("Number is Prime")
    } else if (number > 2) {
        for (divisor = 2; divisor = number ; divisor += 1) {
            if (remainder == 0) {
                alert("It's not Prime")
                 else if (divisor == number) {
                alert("number is Prime")
            }
        
            }
        }

    }
}
