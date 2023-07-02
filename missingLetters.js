'use strict'

function missingLetters(letters){
	const alpha=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
	
	let startCheck=false
	const result= alpha.filter(item=> {
		item==letters[0]? 	startCheck= true :null

		if(item==letters.at(-1)){
			startCheck=false
		}
		if(startCheck){
			return !letters.includes(item)
		}
				
		 return false
	})
	return result
}


console.log(missingLetters(['a', 'b', 'c', 'd',  'f'])) 
//result : ['e']

console.log(missingLetters(['a', 'b', 'c', 'd', 'e',  'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z'])) 
// result: [ 'f', 'g', 'v' ]


//added feature: 
console.log(missingLetters(['g', 'i', 'm'])) // starts from/with a random alpahabet
//result: [ 'h', 'j', 'k', 'l' ]







