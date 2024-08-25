// Variable Declarations and Assignments
let myName = "Pranathi Kundrapu";            
let myAge = 19;                     
let myCity = "Visakhapatnam";           
let isStudent = true;             
let emptyValue = null;              
let undefinedValue;                

// Additional Variable Declarations
let pi = 3.14159;                   
let greeting = "Hello, world!";     
let isSunny = true;                 
let favoriteNumber = 7;             

// Data Types: Printing the data type of each variable
console.log(typeof myName);         
console.log(typeof myAge);          
console.log(typeof myCity);         
console.log(typeof isStudent);      
console.log(typeof emptyValue);    
console.log(typeof undefinedValue); 
console.log(typeof pi);             
console.log(typeof greeting);     
console.log(typeof isSunny);        
console.log(typeof favoriteNumber); 

// Create a variable `mixedValue` and assign it a value that includes multiple data types
let mixedValue = "Age: " + myAge + ", Is Student: " + isStudent;

// Print the data type of `mixedValue`
console.log(typeof mixedValue);    

// Operators:

// Arithmetic Operations using variables
let a = 15;
let b = 4;

console.log(a + b);  
console.log(a - b);  
console.log(a * b);  
console.log(a / b);  
console.log(a % b);  
console.log(a ** b); 

// Comparison Operators
console.log(a == b);  
console.log(a != b);  
console.log(a > b);   
console.log(a < b);   
console.log(a >= b); 
console.log(a <= b);  

// Logical Operators
let x = 8;
let y = 12;

console.log(x > 5 && y < 15); 
console.log(x > 10 || y < 15); 
console.log(!(x > 10)); 

// Ternary Operator
let max = (a > b) ? a : b;
console.log(max); 

// Additional Tasks:

// 1. Create a variable `temperature` and assign it a temperature value in Fahrenheit.
let temperature = 68;

// 2. Convert the temperature to Celsius using the formula: Celsius = (Fahrenheit - 32) * 5/9.
let celsius = (temperature - 32) * 5 / 9;

// 3. Print the converted temperature.
console.log(celsius);  // 20

// 4. Create a variable `age` and assign it a value.
let age = 30;

// 5. Determine whether the person is a minor, an adult, or a senior citizen based on the age.
let category;
if (age < 18) {
    category = "Minor";
} else if (age >= 18 && age < 65) {
    category = "Adult";
} else {
    category = "Senior Citizen";
}

// 6. Print the appropriate message.
console.log(`The person is an ${category}`); 
