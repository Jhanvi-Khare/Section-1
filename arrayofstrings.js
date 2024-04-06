function filterShortStrings(arr) {
    return arr.filter(string => string.length <= 5);
  }
  

  const originalArray = ["hello", "world", "hi", "javascript", "123"];
  const shortStringsArray = filterShortStrings(originalArray);
  console.log("Original array:", originalArray);
  console.log("Strings of 5 or fewer characters:", shortStringsArray);
  