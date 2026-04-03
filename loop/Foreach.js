

let fruits = [
    
    {Product_Name: "Nature Power Beauty Soap [Papaya] 125 Gms *60 PCS (G)" , MRP : 50.00},

    {Product_Name : "Tyko Liquid Pouch 500ML x 12Pcs" , MRP : 50},

    {Product_Name :  "Power Jumbo Detergent Cake Blue 110 Gms*78 Pcs (K)" ,MRP : 6.00},

    {Product_Name :  "PinePower Gold Detergent Cake (Blue ) 125 Gms * 60 ", MRP : 10.00},

    {Product_Name :  "Ultimate Power Liquid Detergent 50 ML * 96 pcs", MRP : 10.00},

    {Product_Name :  "Detergent 50 ML * 96 pcs", MRP : 30.00},
    
];

fruits.forEach((item,index)=>{
    
    console.log(index+":"+"MRP"+":"+item.MRP);
    console.log(index + ": " + "Product Name"+ ": "+item.Product_Name);
    console.log("-------------------------------------------------------------------");
    

    
});







