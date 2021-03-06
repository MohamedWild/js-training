'use strict'

/*
 * Create a `total` function that takes an array of numbers
 * and return the total
 *
 */

 
function total(myArray) {
	// body...
	let number = myArray.length;
	let resultat = 0
	for (let i = 0 ; i < number; i++) {
		resultat =  resultat + myArray[i];
	}
	return resultat
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof total, 'function')
assert.strictEqual(total.length, 1)
assert.deepStrictEqual(total([ 1, 1, 1]), 3)
assert.deepStrictEqual(total([ 10, 10, 10]), 30)
assert.deepStrictEqual(total([ 24, -10, 10, 0, 0, 100 ]), 124)
// End of tests */
