// 1- Sum of numbers from 1 to n
// Using for loop

function sumUsingFor(n) {
  let sum = 0;
  for(;n >= 1 ; n--) {
    sum += n;
  }
  return sum;
}

// recursion

function sumToRecursion(n) {
  if(n === 1) {
    return n;
  } else {
    return n + sumToRecursion(n-1)
  }
}

// With Arithmetic Expression
function sumToExpression(n) {
  let sum = (n/2) * (2 + (n-1));
  return sum;
}

//console.log("Using For loop", sumUsingFor(5));
//console.log("Using Recursion", sumToRecursion(5))
//console.log("Using arithmetic expression", sumToExpression(5))


// Find factorial of a number
/*
  n! = n * (n - 1) * (n - 2) * ...*1
  1! = 1
  2! = 2 * 1 = 2
  3! = 3 * 2 * 1 = 6
  
  Hint: n! can be written as n * (n-1)! For instance: 3! = 3*2! = 3*2*1! = 6
  
  using a loop we will start from the number "n"
  we will subtract and multiply it with its previous value
  if after subtracting, the resulting value is less than 1 then we stop 
  
*/

function factorialRecursion(n, product = 1) {
  if(n === 1) {
    return product;
  } else {
    product *= n;
    return factorialRecursion(n-1, product)
  }
}

//console.log(factorialRecursion(4))

// fibonacci numbers

function fib(n) {
  let seq = [1];
  for(let i = 1; i < n; i++) {
    if(i === 1) {
      seq.push(i)
    } else {
      seq.push(seq[seq.length-2]+seq[seq.length-1]);
    }
  }
  console.log(seq)
  return seq[n]
}

//console.log(fib(4))


function fibRecursion(n, seq = [1, 1]) {
  if(seq.length === n) { // n=3 seq[1,1,2] 2 will be returned
    return seq[n-1]
  } else {
    return fibRecursion(n, seq[seq.length-2]+seq[seq.length-1])
  }
}
