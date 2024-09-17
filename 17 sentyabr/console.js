/////Destructing task

//////Task 1
/*
let numbers = [1, 2, 3, 4, 5]
const [first,second, ,fourth]=numbers
console.log(first);   
console.log(second);  
console.log(fourth);  
*/



///////Task 2
/*
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};   
const { firstName, lastName, age } = person;
console.log(firstName);
console.log(lastName);
console.log(age);
*/


///////Task 3
/*
const person = {
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 25
};
const { firstName, lastName, age } = person;  
function printPerson(person) {
    console.log(`${firstName} ${lastName} is ${age} years old.`);
}
printPerson(person); 
*/


//////Task 4
/*
const user = {
    id: 1,
    username: 'john_doe',
    email: 'john@example.com',
    details: {
      firstName: 'John',
      lastName: 'Doe',
      address: {
        city: 'New York',
        zipCode: '10001'
      }
    }
  };  
const { username, details: { firstName, address: { city } } } = user;  
console.log(username);  
console.log(firstName); 
console.log(city);
*/


////Task 5
/*
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const numbers =[...arr1, ...arr2]
console.log(numbers); 
const [first, ...restNumbers] = numbers
console.log(first)
console.log(restNumbers)
*/



/////Data transformation methods

//////Task 1
/*
const numbers = [1, 2, 3, 4, 5];
let doubleNumber = numbers.map(function(number) {
    return number * 2;
});
console.log(doubleNumber)
*/

//////Task 2
/*
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(number => number % 2 == 0);
console.log(evenNumbers)
*/


/////Task 3
/*
const users = [
    { id: 1, name: 'Alice', age: 28 },
    { id: 2, name: 'Bob', age: 32 },
    { id: 3, name: 'Charlie', age: 25 },
    { id: 4, name: 'David', age: 40 },
];
const namesOver30 = users.filter(user => user.age > 30).map(user => user.name);
console.log(namesOver30);
*/


////////Task 4
/*
const defaultSettings = { theme: 'light', fontSize: 16 };
const userSettings = { fontSize: 18, showSidebar: true };
const mergedSettings = { ...defaultSettings, ...userSettings };
console.log(mergedSettings);
*/

////////Task 5
/*
const numbers = [1, 2, 3, 4, 5,6];
const evenSumNumbers = numbers.filter(number => number % 2 == 0).map(function(number) {
    return number * 2;
});
let sum=0
for (let i = 0; i < evenSumNumbers.length;i++) {
    sum+=evenSumNumbers[i]
}
console.log(sum);
*/

//////Task 6
/*
const person = {
    name: 'Alice',
    address: {
      city: 'New York',
      zip: '10001',
    },
};
const { name, address: { city, zip } } = person;
console.log(name);  
console.log(city);  
console.log(zip);
*/