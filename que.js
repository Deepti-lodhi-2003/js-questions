// *************************************** JS QUESTIONS SOLVE *********************************************

// 1 - Sum of two integers
// let a = 15;
// let b = 20;
// console.log(a + b); 



// 2- Print the message along with values and sum
// 	Ex - The sum of 45 & 12  = 57
// let a  = 10;
// let b = 15;
// let sum = a + b ; 
// console.log(' The sum of '  + a +  ' and ' + b + ' is ' + sum);  



// 3- Accept two integers from user and print the sum
// 	Ex - The sum of 45 & 12 = 57
// let a = +prompt("Enter first number");
// let b = +prompt("Enter second number");
// alert(a + b);



// 4- Accept the User's name, age and print in following manner
// 	Ex - Hello Shery, you are 12 years old.
// let name = "Deep";
// let age = 12;
// console.log(`Hello ${name}, you are ${age} years old.`);



// 5- Solve Increment & decrement operator questions on
	// https://javaconceptoftheday.com/quiz-on-increment-and-decrement-operators/

//Increment
// let a = 3;
// // let b = ++a; //pre-Increment 
// let b = a++ // post- increment
// console.log(b , a);

//decrement
// let a = 10;
// // let b = --a;  //pre-decrement
// let b = a--;  //post-decrement
// console.log(a, b)  ;



// 6- Accept two numbers from user and swap their values
//                 Part 2 - Swap without using third variable

// let num1 = 10;
//   let num2 = 20;
//  console.log(`swap their values = num1 = ${num1} , num2 = ${num2}`);

// Part 2 - Swap without using third variable
// let tem = 10;
//  let num1 = 20;
//   let num2 = tem;
//  console.log(`Swap without using third variable = num1 = ${num1}, num2 = ${num2}`);



// 7 - Accept the marks of Robert in three subjects Maths, Computer, English respectively (each out of 100 ), 
// Write a program to calculate his total marks and percentage marks.

// let maths = 90;
// let computer = 80;
// let english = 70;
// let total = maths + computer + english;
// let percentage = (total / 300) * 100;
// console.log(`Total marks = ${total}`);
// console.log(`Percentage = ${percentage}%`);



// ************************************** With FORMULA'S **************************************

// 8 - Accept the length and width of a rectangle. Calculate & print the area and perimeter.

// Perimeter - Total length around a closed figure
// Area - Total region enclosed by a plane figure
// larger side -> Length   // rectangle area formula ->  l*w
// smaller side -> Width   // rectangle perimeter formula ->  2*(l+w)

// let length = 30;
// let width = 20;  
// let area = length * width;
// let perimeter = 2 * (length + width);
// console.log(`Area of rectangle = ${area}`); 
// console.log(`Perimeter of rectangle = ${perimeter}`); 



// 9 - Write a program to accept temperature in Fahrenheit & convert into Celsius. (Look for the formula on internet)
// Convert temperature from Fahrenheit to Celsius is ->  Celsius = (Fahrenheit - 32) * 5/9

// let fahrenheit = 100;
// let celsius = (fahrenheit - 32) * 5 / 9;
// console.log(`Temperature in Celsius = ${celsius}`);  // 37.777777777



// 10 - Accept the Principle amount, time & rate of interest and calculate the Simple Interest
// Formula of Simple Interest = (P * R * T) / 100

// let p = 200;  // Principle amount
// let r = 10;   // Rate of interest
// let t = 5;    // Time   
// let s = (p * r * t) / 100;
// console.log(`Simple Interest = ${s}`);  // 1000



// 11 - Accept the three sides of triangle and calculate the area using herons formula.
var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var s = (side1 + side2 + side3) / 2;  //semiPerimeter formula ->  (a+b+c)/2
var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
console.log(area);

// ***************************** pattern **********************************
// 56- Right Triangle - Star
// 	*
// 	* *
// 	* * *
// 	* * * *
// 	* * * * *
for(j=0; j<5; j++){
	let pattern = "";
	for(i=0; i<5; i++){
		pattern += "* ";
	}
	console.log(pattern);
}

// 57- Right Triangle - Number
// 	1
// 	1 2
// 	1 2 3 
// 	1 2 3 4
// 	1 2 3 4 5

for(j = 0; j<=5; j++){
	let pattern = "";
	for(i = 0; i<=j; i++){
		pattern += i + " ";
	}
	console.log(pattern);
}