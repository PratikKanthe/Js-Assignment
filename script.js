//Write a function that takes in two parameters and returns their difference.
var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
console.log('Welcome ' + userName + '!');
function difference(a,b) {
  const sum = a-b;
  console.log(sum)
}

differenc(2,3)