function filterNumbers(arr) {
    return arr.filter(number => number >= 5);
  }
  
  
  const originalArray = [1, 3, 7, 2, 9];
  const newArray = filterNumbers(originalArray);
  console.log("Original array:", originalArray);
  console.log("New array (numbers >= 5):", newArray);
  