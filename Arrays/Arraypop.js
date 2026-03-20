

let electronics = ["Hi-Power Detergent Powder 3Kgs * 6 pcs MRP 390.00 with Bucket",
     "Triple Power Universal Detergent Powder 4Kg (save 50 Rs) x 6 Pcs MRP 358.00", 
     "Triple Power Universal Detergent Powder 500Gms - 30 Pcs + 2 Pc Free", 
     "Triple power detergent powder 1kg bag * 15 Pcs + 1 Pc Free MRP 102.00", 
     "Triple power detergent powder 100gm MRP.10/- 60 Pcs x 3 Bags - 180 Pcs + 15 Pcs Triple power detergent powder (100g) FREE!",
     "Triple power detergent powder 40gm Mrp.5/- 60 Pcs x 6 Bags - 360 Pcs + 30 Pcs Triple power detergent powder (40g) FREE!"];

let electr = ["LCD Monitor","LED Monitor","Table Fan"];


for(j=0;j<electr.length;j++){
electronics.push(electr[j]);
}
console.log(electronics);

for(j=0;j<electr.length;j++){
electronics.pop(electr[j]);
}
console.log(electronics);



electronics = electronics.map(item => 
item === "Hi-Power Detergent Powder 3Kgs * 6 pcs MRP 390.00 with Bucket" ? "TRIPLE POWER DETERGENT POWDER-1":item
);
electronics= electronics.map(item=>
item === "Triple Power Universal Detergent Powder 4Kg (save 50 Rs) x 6 Pcs MRP 358.00" ? "TRIPLE POWER DETERGENT POWDER-2":item);

electronics=electronics.map(item=>
item ==="Triple Power Universal Detergent Powder 500Gms - 30 Pcs + 2 Pc Free" ? "TRIPLE POWER DETERGENT POWDER-3":item);

electronics=electronics.map(item=>
item==="Triple power detergent powder 1kg bag * 15 Pcs + 1 Pc Free MRP 102.00"? "TRIPLE POWER DETERGENT POWDER-4":item)

electronics=electronics.map(item=>
item==="Triple power detergent powder 100gm MRP.10/- 60 Pcs x 3 Bags - 180 Pcs + 15 Pcs Triple power detergent powder (100g) FREE!"?"TRIPLE POWER DETERGENT POWDER-5":item)

electronics=electronics.map(item=>
item==="Triple power detergent powder 40gm Mrp.5/- 60 Pcs x 6 Bags - 360 Pcs + 30 Pcs Triple power detergent powder (40g) FREE!"?" TRIPLE POWER DETERGENT POWDER-6":item)

console.log(electronics);































