

let total=0;

const num1 = [50,40,30,20,10];

num1.forEach((num,index)=>{

    console.log("num", num);

    total +=num*2;
    
    console.log("daywise total",index+":" +total);

});

    console.log("Total Money at last", total.toString());





