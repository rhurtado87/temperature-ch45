//functions
let counter = 0;

//creating the function
function increase(){
    counter++;
    console.log(counter);
    document.getElementById("total").innerHTML=counter;
    if(counter==5){
        console.log("hi 5");
    }
    
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
// run a Multi by Three
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
//create a funtion to Contert Temperature C to F
function celsToFahr(){
    let temperature = parseInt(prompt('Enter temperature in Celsius'));
    let fahrenheit = (temperature * 9/5) + 32.;
    console.log(fahrenheit);
    document.getElementById("temp").innerHTML=fahrenheit;
}
