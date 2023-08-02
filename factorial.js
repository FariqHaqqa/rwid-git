
/** 
 * @param {number} n 
 *  
 */
function countFactorial(n) {
    let result = 1;

    for (let index = n; index >= 1; index--) {
     result = result * index; 
}
return result;
}
const Factorial= countFactorial (4);
const Factorial1= countFactorial (8);
const Factorial2= countFactorial (12);
console.log(Factorial);
console.log(Factorial1);
console.log(Factorial2);

