const prompt=require("prompt-sync")();


const a = []
const b= 5

for(let i = 0;i<=5;i++){
 i= prompt("Enter the values of array");
 i=Number.parseInt(i)
  a.push(i)
}
console.log(a)

for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    if (a[i] + a[j] == b) {
      console.log([a[i], a[j]]);
      console.log("Position of two numbers is",i,j)
    }
    
  }
}

