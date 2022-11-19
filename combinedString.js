'use strict'

function combineStrings(arr, len){
	let str=arr[0]
	const  combinedStrArr=[];

	arr.forEach((el,index)=>{ 
		const nextStr=arr[index+1] || ''
		let newStr=str+' '+nextStr
		
		if(str.length<=len && newStr.length<=len ){
			if(index==arr.length-1){
				combinedStrArr.push(str)
				return
			}
			str=newStr
		}
		else if(str.length<=len && newStr.length>len){
			 combinedStrArr.push(str)
			 str=arr[index+1]
		}else{
			str=arr[index+1]
			// throw new Error(`max string length is : ${len}. " ${el} "  has ${el.length}`)


			//this block is run when or if an individual string length is greater than the specified Combined String Length.
		}
	})

return combinedStrArr;
}

const alphabtArr=['a', 'b', 'c', 'd', 'e', 'f', 'g']
console.log(combineStrings(alphabtArr, 5))
console.log(combineStrings(alphabtArr, 12))

const radioactive=['alpha', 'beta', 'gamma', 'delta', 'epsilon' ]
console.log(combineStrings(radioactive, 15))