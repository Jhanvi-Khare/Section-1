function filterEvenNumbers(arr) {
    return arr.filter(number => number % 2 === 0);
   }
   
   const originalArray = [1, 4, 7, 2, 9, 12];
   const evenNumbersArray = filterEvenNumbers(originalArray);
   console.log("Original array:", originalArray);
   console.log("Even numbers array:", evenNumbersArray);
   