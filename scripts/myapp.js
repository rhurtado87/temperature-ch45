//DB information
let userDB = "Ricardo";
let passDB = "Test1234";

function login(){
    let userName=prompt("Enter you username");
    let userPassword = prompt("Enter you password");
    console.log(userName, userPassword);

    if(userName === userDB){
        console.log("Welcome to the Canvas");
        document.getElementById("notification").innerHTML=
        "<p class='alert-welcome'>Welcome to the canvas</p>";
    }else{
        console.log("inavlid username or password")
        document.getElementById("notification").innerHTML=
        "<p class='alert-error'>Invalid username or password</p>";
    }

}