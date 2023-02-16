'use strict'
/*
This is a code to loop and print from 0 to 100

But the challenge specifies that this should be done without using character 1, 2,3,4,5,6,7,8,9 any where in the code
*/

/*
Method 1
LOGIC APPLIIED: From Zero , If the iteration count increases to a three digit number then it has gotten to one hundred .
so we compare it on each iteration count and stop the loop once the iteration count is a three digit number
*/

const lengthTestString='HTU' // a 3-length-long string
const resultArray=[] // array to store 0 to 100

for(let i=0; true; i++){
	resultArray.push(i)
	if(String(i).length==lengthTestString.length){
		console.log({resultArray})
		break;
	}
}



/*Method 2
LOGIC APPLIED: The UTF-16 value of the letter 'd' is 100, so we use this as a condition in our loop.
*/
const hundred ='d'.charCodeAt(0) // returns the utf-16 value of the letter 'd'
const resultArray2=[]

for(let i=0; i<=hundred; i++){
	resultArray2.push(i)
}
console.log({resultArray2})
