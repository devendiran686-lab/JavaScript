function PAPAYA(){
console.log("PAPAYA /: Nature Power Beauty Soap [Papaya] 125 Gms *60 PCS (G) MRP 50.00");  
console.log("-------------------------------------------------");
 
}
function ULTIMATE (){
console.log(" ULTIMATE/: Power Gold Detergent Cake (Blue ) 250 Gms * 60 pcs MRP 25.00");
console.log("-------------------------------------");

}
function TRIPLEPOWER(){
console.log(" TRIPLEPOWER/: Triple power detergent powder 100gm MRP.10/- 60 Pcs x 3 Bags - 180 Pcs");
console.log("--------------------------------");

}
function ULTIMATELIQUID(){
console.log(" ULTIMATELIQUID/: Ultimate Power Liquid Detergent 2 Liter * 6 PCS Pouch MRP 249");
console.log("---------------------------------");
}

function division(name,callback){
    console.log("Division products",name);
    callback.forEach(ele=>ele())
}
division("Division_name",[PAPAYA,ULTIMATE,TRIPLEPOWER,ULTIMATELIQUID]);

export{division}