// Huge credits to BrolanJ for original code
// Get code here: https://github.com/BrolanJ/Bailey-Borwein-Plouffe/blob/master/BBP%20Formula.py
// this code is broken pls fix
function Decimal(num) {return parseFloat(num);}
function pi(iterations) {
var pi = 0;
  for (var k = 0; k <= iterations; k++) {
    pi = Math.pow(1/Decimal(16), k) * (Decimal(4)/(8*k+1) - Decimal(2)/(8*k+4) - Decimal(1)/(8*k+5) - Decimal(1)/(8*k+5));
  }
  return pi;
}
