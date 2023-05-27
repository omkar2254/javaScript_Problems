function missingNum(arr) {
    
    let low = 0;
    let high = arr.length - 1;
    
    
    
    while (low <= high) {
      const mid = ((low + high) / 2);
      console.log("mid: ", mid, "value: ", arr[mid])
      console.log("High: ", high, "Low: ", low)
      
      
      if (arr[mid] - mid !== 1) {
        high = mid - 1;
      }
      
      else {
        low = mid + 1;
      }
    }
    
    
    return low + 1;
  }
  
  
  const arr = [1, 2, 3, 5, 6, 7, 8];
  const missingNumber = missingNum(arr);
  console.log("Missing number:", missingNumber);