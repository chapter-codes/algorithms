'use strict'

// A function which checks and returns a list of words which can be formed using the letters of a keyboard row.
function validateWordRow(wordsArr){
	const keybrdRows=['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
	const matchedWords=[]

//Here we loop through each keyboard row to check which words from the given words list can be formed ussing letters from that keyboard row.
	keybrdRows.forEach(rowLetters=>{
		const rowMatchedWords=wordsArr.filter(word=>{
			//seperate each word into letters
			const wordLetters=word.split('')

			//check that every letter exists in the rowAlphabets.
			const validate=wordLetters.every(letter=> rowLetters.includes(letter))

			return validate
		})

		//add the rowMatchedWords to the general list of matched words
		rowMatchedWords? matchedWords.push(...rowMatchedWords):null

	})

	return matchedWords
}

const words=['candy', 'fart', 'pop', 'zelda', 'flag', 'typewriter',  'gags']
console.log(validateWordRow(words))


