function maxSubArraySum(a) {
    let maxSum = 0;
    let currentSum = 0;
    
    for (let i = 0; i < a.length; i++) {
      currentSum = currentSum + a[i];
      
      if (currentSum > maxSum) {
        maxSum = currentSum;
      } else {
        currentSum = 0;
      }
    }
    
    return maxSum;
  }
  
  const a = [-2, -3, 4, -1, -2, 1, 5, -3];
  console.log("Maximum contiguous sum is " + maxSubArraySum(a));