
let Electronics = [
    {Electronics_Name: "Computer",Operating_system: "Windows 10", MRP: 50000}, 
    {Electronics_Name: "Laptop",Operating_system:"Windows pro 11 ", MRP: 25000}, 
    {Electronics_Name: "Tab",Operating_system:"Windows 7 ", MRP: 45000},  
    {Electronics_Name: "Super Computer",Operating_system: " Windows 8", MRP: 50000}
];



Electronics.map((us, index)=>{
console.log(index + ":  " +"Electronics_Name"+ ": "  +us.Electronics_Name );
console.log(index + ":  "+"MRP"+ ": " +us.MRP);
console.log(index + ":  " +"Operating_system" + ": " +us.Operating_system);
console.log("---------------------------------------------------");
});


//console.log(index, +users);


