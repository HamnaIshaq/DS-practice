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

//Given a multi-dimensional integer array, return the total number of integers stored inside this array

//let seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7

//let seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
//console.log("seven", seven)

function totalIntegers(arr, total = 0) {
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      total = totalIntegers(arr[i], total);
    }
    else {
      typeof arr[i] === "number" ? total += 1 : ""   
    }
  }
  return total;
}


/*
Binary Search
this only works for a sorted array

if we want to find the number 7 in the array
arr = [1,2,3,4,5,6,7,8,9,10]

find n=7

then we will do the following

loop (recursive process)
  find the mid element of the array
  is the mid element < n
  if yes --> this means that n is not present in the LEFT side of the array (arr    is sorted)
    make a new array with elements that are only present with the mid element and     RIGHT side of array
  if no --> this means that n is not present in the RIGHT side of the array
    make a new array with elements that are only present with the mid element and     LEFT side of array
until base case 
  array is only 1 element then this element is the 1 we wanted to find
*/
arr = [1,2,3,4,5,  6,7,8,9,10]
//n=7
function binarySearch(arr, n, start = 0, end = arr.length-1) { 
  const midIndex = Math.ceil((start + end)/2);
  if(arr[midIndex] === n) {
    return midIndex
  } else {
    if(arr[midIndex] < n) {
      return binarySearch(arr, n, midIndex, end)
    } else {
      return binarySearch(arr, n, start, midIndex)
    }
  }
}

//console.log(binarySearch(arr, 7))



