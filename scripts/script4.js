//display while loop
let number=0;
console.log("------while loop-------");
while (number<=100){
    console.log(number);
    number=number+10;
}
//display numbers from 10 to 100; 10 by 10

let number2=10;
console.log("------while do-------");
do{
    console.log(number2);
    number2=number2+10;
    }
    while(number2<=100);

//display for loop

console.log("------for loop-------");
    for(let i=10; i<=100; i+=10){
    console.log(i);
    }

//Dispay Array
    let myArray = ["Ricardo","Geroge","Andrew","Daniel","James","Fernanda","Rami","Roneisha","Guillermo","Philp"];
    
    for(let i=0;i<myArray.length;i++){
        document.write(`
        <p>${myArray[i]} </p>
        `)
    }
    //the FizzBuzz 3 & 5
    console.log("------FizzBuzz-------");
    for (let i = 1; i <=100; i++) {
        if(i % 3===0 && i % 5===0){
            console.log("FizzBuzz");
        }else if (i % 3 ===0){
            console.log("Fizz");
        }else if (i % 5 ===0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
}
// from 1 to 10; the result of multiply by 3

function multiply(number){
    document.write(`----${number} --- ${number}`);
for(let i=1; i<=10; i++) {
    document.write(`<p>${i} x ${number} = ${i*number}</p>`)
}
}

multiply(1,"one");

multiply(2,"muit");