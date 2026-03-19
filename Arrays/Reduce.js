
let num = [10,20,30,40,50];

let res = num.reduce((acc,val)=> {

    return acc+val;

},0);

console.log(res);










  
// array.reduce((accumulator, currentValue) => {
//     return updatedValue;
// }, initialValue);


// accumulator (acc) → stores result

// currentValue (val) → current element

// initialValue → starting value of accumulator


// reduce() is used to convert an array into a single value

// That value can be:

// number (sum, total)

// object

// array

// string


Array.reduce((acc, val)=>{

return acc+val;

},0);


