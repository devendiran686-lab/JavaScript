let number = [10,50,30,90,70];

number.sort((a, b) => a - b)
console.log(number.length);
console.log(number);


number.forEach((Item, index) =>{
    console.log(index + ":" + Item);

    //console.log(number[1]);
});

console.log(number[1]);


