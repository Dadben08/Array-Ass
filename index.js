
//Variable Declaration
//Var use a variable to store a value and it uses a global scope it leaks out of the function
//let use a variable to store a value and it uses a local scope it does not leak out of the function
//const use a variable to store a value and it uses a local scope it does not leak out of the function
//let: allow us to reassign a value after declaring the varible
//const: does not allow us to reassign a value  after declaring the varible

//you can use Node terminal to run a js file and you can also make use of browser to run a js file in the console side
//For firefox uses spidermonkey while for chrome uses v8



//Basic primitive Data type
//Number
//let Age =30
//console.log(age);

// String
// let name ="Mary"
// console.log(name);

//Boolean
//let isMarried = true
//console.log(data);

//Null
//let data = null
//console.log(isMarried)

//underfined
//let Date;
//console.log(data);



//Non primitive Data types
//Arrays: They are use to hold multiple values
//const colours = ["white", "black", 'red', "blue"]
//console.log(colours.length) // Total number of item in an array

//index of an array is the position of the item inside the array
//NOTE: index starts from 0 

//example: 
//console.log(colours[2]) //possition of item in an array.
//colours.push("violet")

//console.log(colours);

// add from the front
//colours.unshift("purple")
//console.log(colours);


//to remove from array
//colours.shift()
//console.log(colours);

//colours.pop()
//console.log(colours);

//const person = {
//name: "John",
//age: 31,
//IsMarried: true,
//info: null,
//state: "Benin",
//Professions: {
    //jobtitle: "Software Engineer",
    //company: "Apple",
    //startdate: '20/5/2018',
    //endDate: "20/5/2020",

    //JD:{
       // task1: "build app",
        //task2: "Connect Database",
    //}
//}  
//}

//console.log(person.Professions.JD.task2 );


//const properties = [

    //"iphone",
   // 'shoes',
    //cars = ["Toyota camry", "lamborghini", benz =['G-wagon', "AMG", "Maybach"]],
    //houses = ["boungalow", "Penthouse", "Duplex"],
   // 'shops',
    //companies =["Google", "Facebook", "Twitter", "Gomycode"]
//

//console.log(properties[5]);
//console.log(properties[2][2][2]);
//console.log(properties[5][2]);
//console.log(properties[3][1]);

//Object is a collections of key value pairs
//const person = {
    //name: "John",
    //age: 31,
    //IsMarried: true,
    //info: null,
    //state: "Benin",
    //Professions: {
        //jobtitle: "Software Engineer",
        //company: "Apple",
        //startdate: '20/5/2018',
        //endDate: "20/5/2020",

        //JD:{
           // task1: "build app",
            //task2: "Connect Database",
        //}
    //}
//}

//console.log(person.Professions.JD.task2);




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