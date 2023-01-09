/* split method :- str.split(separator, limit)
1. used in jwt token split in session storage in react js application.
2. The split() method divides a string into a list of substrings and returns them as an array.
3. The split( ) method is used for strings. It divides a string into substrings and returns them as an array.
*/


const jwtToken = "Bareer ASdfJHGeYHNBVdERTYUIKnbVDFYUhgfJNBVwedfgy6t5res"
const splitToken = jwtToken.split(" ");
console.log(splitToken[0]); //Bareer
console.log(splitToken[1]); //ASdfJHGeYHNBVdERTYUIKnbVDFYUhgfJNBVwedfgy6t5res


/*
Note:------
1. Slice( ) and splice( ) methods are for arrays. 
 */