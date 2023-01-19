const prompt = require('prompt-sync')();

let num = prompt("Enter the prime Number Range") 
num=Number.parseInt(num)  
for (let value = 2; value <= num; value++) {
    let notPrime = false;
    for (let i = 2; i<value; i++) {
        if (value%i==0) { 
            notPrime = true;
        } 
    }
    if (notPrime == false) {  
              console.log(value);
    }
}

