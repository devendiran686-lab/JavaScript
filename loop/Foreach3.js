

const powersoap = [{Item_Name : "Power Gold Detergent Cake (Blue ) 250 Gms * 60 pcs MRP 25.00VS", Box_Price : 1200 },

    {Item_Name : "Nature Power Beauty Soap [Papaya] 125 Gms *60 PCS (G) MRP 50.00", Box_Price : 2550  }, 
    
    {Item_Name : "Tyko Liquid Pouch 500ML x 12Pcs MRP 50.", Box_Price :480},

    {Item_Name : "Power Jumbo Detergent Cake Blue 110 Gms*78 Pcs (K) MRP 6.00", Box_Price : 398},

    {Item_Name : "SplenPower Jumbo Detergent Cake Pink 110 Gms*78 Pcs (K) MRP 6.00", Box_Price : 398},

    {Item_Name : "Power Jumbo Detergent Cake Yellow 110 Gms*78 Pcs (K) MRP 6.00", Box_Price : 398}
];


powersoap.forEach((i,index)=>{

console.log(index+ ": " +"ProductName" +": "+i.Item_Name);

console.log(index+": "  +"Box_Price"+":"+i.Box_Price);

console.log("----------------------------------------------------------------------------");

});




