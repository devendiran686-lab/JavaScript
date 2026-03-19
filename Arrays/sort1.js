const number =[90,50,80,70,60];

const result = [...number].sort((a,b)=>a-b);

console.log(result);

number.forEach((val,index)=>{


    console.log(index+":"+val);
    
    
});

