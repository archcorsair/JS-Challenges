function firstFactorial(num) {
  if (num === 1 || num === 0) {
    return 1;
  }
  return num * firstFactorial(num - 1);
}
console.log(firstFactorial(8));
