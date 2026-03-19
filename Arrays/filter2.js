let users= [

{Soap_Name:"Lux",MRP: 50},
{Soap_Name:"Dove",MRP: 40},
{Soap_Name:"Hamam",MRP: 60},
{Soap_Name:"Medimix",MRP: 70},
{Soap_Name:"Santhur",MRP: 80},
];

let result = users.filter((use)=>use.MRP>40&&use.Soap_Name!="Lux",
{

    //return use.MRP>=50 && use.Soap_Name!="Hamam"

});
users.forEach((i,index)=>{

    console.log(index+":"+i.Soap_Name+":"+i.MRP);
    
});

console.log(result);

