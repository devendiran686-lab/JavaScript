
function division(){
    console.log("Lavendor soaps");
    
}
function Bathsoap(name,callback){
    console.log("Papaya soap",name);
    callback();
}

function papaya(name,callback){
    console.log("Triple power altimate",name);
    callback();
}

function deterjent(){
    console.log("Deterjent soaps");
    
}

Bathsoap("product",division);
papaya("detergent",deterjent);




//display1("Function-2", replay1);



// function division(name,callback){
//     console.log("Bathsoap-1",name); 
//     callback();
// }

// function products(){
//     console.log("Bathsoap-2");
//     products();
// }
// function products2(){
//     console.log("Bathsoap-3");
//     products2();
    
// }

// division("Papaya soap",[products,products2]);


