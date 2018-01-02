//given a number in base 10, print in base 10 the max number of consecutive 1s


function binaryOneCounter(n){
  let maxOnes = 0;
  while (n > 0) {
    let remainder = n%2;
    if (remainder === 1){
      maxOnes++
    } else if (remainder === 0) {
      maxOnes = 0
    }
    n = (n-remainder)/2
  }
  console.log(maxOnes)
  
}

binaryOneCounter(439);
binaryOneCounter(7);