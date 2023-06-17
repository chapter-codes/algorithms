'use strict'

//A funtion which trims an array by removing  "start" items from the front and "stop" items from the back of the array list 

function trimArray(arr, start, stop){
	stop=arr.length-stop

	const trimmedArray=arr.slice(start, stop)
	return trimmedArray
}

// let list=[1,2,3,4,5,6]
// let result= trimArray(list, 2,1) //[3,4,5]

// let list=[6,2,4,3,7,1,3]
// let result= trimArray(list, 5,0) // [1,3]

let list=[1,7]
let result= trimArray(list, 0,0) // [1,7]

console.log(result)
