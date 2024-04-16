function pi(iterations) {
  var epoch = 0;
  var subtract = false;
  var a = 2, b = 3, c = 4;
  var pi = 3;
  while (epoch <= iterations) {
    if (subtract === true) {
      pi -= 4/(a*b*c);
      a = c;
      b = a+1;
      c = b+1;
      subtract = false;
      epoch++;
    } else {
      pi += 4/(a*b*c);
      a = c;
      b = a+1;
      c = b+1
      subtract = true;
      epoch++;
    }
  }
  console.clear();
  console.log(`Result: ${pi} in ${epoch} iterations.`);
}
