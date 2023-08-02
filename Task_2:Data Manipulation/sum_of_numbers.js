function sumArrayNumbers(arr) {
    //Validation check
    if (!Array.isArray(arr)) {
      throw new Error('Input should be an array');
    }
  
    let sum = 0;
    for (const num of arr) {
      if (Number.isInteger(num)) {
        sum += num;
      } else {
        throw new Error('Array should contain only integers');
      }
    }
  
    return sum;
}

const numbers = [1, 2, 3, 4, 5];
const sum = sumArrayNumbers(numbers);
console.log(sum); // Output: 15
  
  
  
  
  
  