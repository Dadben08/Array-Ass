//Implementation of array on a simple HTML page
//You can create a random array, perform the learning outcomes (map, filter, forEach, splice, reduce) on the array, and console.log the result of the array manipulation

// Create an array
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Use map to create a new array with each number doubled
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);

// Use filter to create a new array with numbers greater than 3
const filteredNumbers = numbers.filter(number => number > 3);
console.log(filteredNumbers);

// Use forEach to log each number
//numbers.forEach(number => console.log(number));

// Use reduce to calculate the sum of all numbers
const sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum);

// Use splice to remove the second and third numbers
numbers.splice(2, 2);
console.log(numbers);