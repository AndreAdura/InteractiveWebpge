// GAME 1
function game1(){
	
	let name = document.getElementById('name').value;
	

	document.getElementById('hello').innerHTML = "Hello " + name + ", Nice work! Let's start!";

}

// GAME 2
function game2(){
	 let f = document.getElementById('insertF').value;
	 let c = (f - 32) / 1.8;
	document.getElementById('converted').innerHTML = c;
}

// GAME 4
function game4(){

let age = document.getElementById('age');
if(age < 0){
	alert("you’re kidding, right?");
} else if(age === 0){
	alert("oh Baby, how can you work with computer that early in life");
} else if (age === 100 ) {
	alert("you are too old to play !");
} else {
	alert("you’re good to go!");
}
}

// GAME 5
function game5(){

let number = document.getElementById('number');
let divisor = 2;


if (number < 2 ) {
	alert("It's not Prime")
} else if(number = 2){
	alert("Number is Prime")
} else if (number > 2) {

	let remainder = number % divisor
	if(remainder = 0){
		alert("It's not Prime")

	}else {
		divisor += 1
	}
		if (divisor === number) {
		alert("number is Prime")
	}

}







}





// if(number > 2)
// remainder = number % divisor

// if(remeinder = 0)
// print " it's not prime"
// number + = 1
// divisor = 2
// process again
 
//  else 
//  divisor + = 1
 
//  if(divisor = number)
//  print " it's prime"
//  divisor = 2
//  number + = 1 
//  process again 





