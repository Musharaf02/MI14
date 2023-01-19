const prompt = require('prompt-sync')();

let num = Number(prompt("Enter the value ")) 

let result=0;

while(num>0){
    remainder = num%10
    result = result*10 + remainder
    num=Math.floor(num/10)
    
}

console.log("Reversed Number is: ",result)