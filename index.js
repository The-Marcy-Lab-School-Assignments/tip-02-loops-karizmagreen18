// Write a function that prints the first n square numbers and also calculates the sum of these numbers.
const printSquareNumbers = (n) => {
  //1*1=1 2*2=4 3*3=9 4*4=16 5*5=25, squaring numbers 1-5
  // how do we get all the numbers 1-N
  //how do we square those numbers
  //add all the square togther
  let total = 
  for (let i = 1; i <= n; i++)
    let sqr = i * i;
  console.log(sqr);
  //add sqr to a variable
  total += sqr
}
return total
printSquareNumbers(5);
//will print: 1, 4, 9, 16, 25
// Final output is: 55
