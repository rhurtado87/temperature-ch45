//functions
let counter = 0;

//creating the function
function increase(){
    counter++;
    console.log(counter);
    
}
function decrease(){
    counter--;
    console.log(counter);
}

//2) call/run/execute the function
// sayHi();

function sayHi(){
    let userName=prompt("Enter your name:");

    console.log("Wecolme.... " +userName);
}

function multiByThree(){
    let number = prompt("Enter number:"); //get the number form a prompt
    let result = number*3; //mulite the number by 3
    console.log(result); //display the result on the console
    document.getElementById("total").innerHTML=result;
}
// create a funtion that adding up two number (get them from the prompt)
function addTwo(){

    let num1 = parseInt(prompt('Enter the first #'));
    let num2 = parseInt(prompt('Enter the second #'));
    //add two number
    let sum = num1 + num2;
    //display the sum
    console.log(`The sum of ${num1} and ${num2} is ${sum}`);
    document.getElementById("addtotal").innerHTML=sum;
    
}