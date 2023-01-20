const prompt = require('prompt-sync')();

let username = prompt("Create your the user name ")
let userpassword = prompt("Create your Password ")

let i , j
while(i!=username && j!= userpassword){
     i = prompt("Enter your User name ")
     j  = prompt ("Enter your Password ")

    if(i==username && j==userpassword){
        console.log("You are successfully login...")
    }
    else{
        console.log("Please try again")
    }
}