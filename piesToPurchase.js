'use strict'

function piesToPurchase(peopleArr, piecesPerPie){

	//get sum total of pie pieces 
	const initialValue=0
	const totalPieces= peopleArr.reduce((accumulator, person)=>accumulator+person.num, initialValue )

	//divide sum-total by piecesPerPie and approximate to determine the number of pie needed
	const piesToPurchase= Math.ceil(totalPieces/piecesPerPie)

	return piesToPurchase
}


const arr=[
{name:'Joe', num:9},
 {name:'Cami', num:3},
 {name:'Cassidy', num:4}
 ]
console.log(piesToPurchase(arr, 8))
// Result: 2
