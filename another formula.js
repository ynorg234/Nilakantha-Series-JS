// Huge credits to BrolanJ for og code
// Get code here: https://github.com/BrolanJ/Bailey-Borwein-Plouffe/blob/master/BBP%20Formula.py
// fixed after inspecting code more
function Decimal(num) {return parseFloat(num);}
function sum(arr) {
  return arr.reduce(function(a, b) {return a+b;}, 0) // https://stackoverflow.com/questions/38203897/sum-function-in-javascript
}
function pi(iterations) {
var pi = 0;
var possible = Decimal(0);
var arr = []
  for (var k = 0; k <= iterations; k++) {
    possible = Decimal(Math.pow(1/Decimal(16), k) * (Decimal(4)/(8*k+1) - Decimal(2)/(8*k+4) - Decimal(1)/(8*k+5) - Decimal(1)/(8*k+5)));
    arr.push(possible);
  }
  pi = sum(arr);
  return pi;
}
