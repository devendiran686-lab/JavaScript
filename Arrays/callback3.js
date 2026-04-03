

// function sayBye(callbacks){

//     console.log("Function one Call");

//     callbacks.forEach(cb => cb());
// }

// sayBye( [

//     function display1()
//     { 
//         console.log("function two call");},

//     function display2 ()
//     {
//          console.log("Function three call");},

//     function display3 ()
//     {
//          console.log("Function four call");}

// ]);


// function display(name,callback)
// {
//     console.log("Function one-1",name);
//     callback.forEach(fd =>fd());

// }
// display("function-1",[

//     function display1(){
//         console.log("Function-2");
//     },
//     function display2(){
//         console.log( "function-3");
//     },
//     function display3(){
//         console.log("Function-4");
//     },
//     function display4(){
//         console.log("Function-5"); 
//     }

// ]);


function division(name,callback){
    console.log("NATURE POWER PAPAYA",name);
    callback.forEach(div =>div()) 
    
}

division("Nature Power Beauty Soap [Papaya] 125 Gms *60 PCS (G) MRP 50.00",[

function division1(){
    console.log("TYKO LIQUID DETERGENT(KA&KL)");
    
},function division2(){

    console.log("ULTIMATE DETERGENT CAKE");
},
function division3(){
    console.log("TRIPLE POWER DETERGENT POWDER");
    
},
function division4(){
    console.log("ULTIMATE LIQUID DETERGENT ( KA & KL)");
    
}
]);

