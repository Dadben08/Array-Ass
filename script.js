// Create an array
const numbers = [1, 2, 3, 4, 5];
console.log('Original Array:', numbers);

// Use map to create a new array with each number doubled
const doubledNumbers = numbers.map(number => number * 2);
console.log('Doubled Numbers:', doubledNumbers);

// Use filter to create a new array with numbers greater than 3
const filteredNumbers = numbers.filter(number => number > 3);
console.log('Filtered Numbers (greater than 3):', filteredNumbers);

// Use forEach to log each number
console.log('Logging each number:');
numbers.forEach(number => console.log(number));

// Use reduce to calculate the sum of all numbers
const sum = numbers.reduce((total, number) => total + number, 0);
console.log('Sum of Numbers:', sum);

// Use splice to remove the second and third numbers
numbers.splice(1, 2);
console.log('Array after splice:', numbers);
