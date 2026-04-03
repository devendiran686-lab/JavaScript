


let users = [

   { Soap_Name: "BATH SOAP - 3", MRP: 25 },
   { Soap_Name: "AruFABRIC CONDITIONERn", MRP: 40 },
   { Soap_Name: "TYKO LIQUID DETERGENT", MRP: 45 },
   { Soap_Name: "AACTIVE POWER DETERGENT POWDERrun", MRP: 80 },
   { Soap_Name: "ULTIMATE LIQUID DETERGENT", MRP: 50 },
   { Soap_Name: "BATH SOAP - 1", MRP: 60 },
   { Soap_Name: "ArDETERGENT CAKE", MRP: 60 },
   { Soap_Name: "AruGIO DISH WASH", MRP: 55 },

   ];

     let users1= [

   { Division_name: "Nature power papaya", MRPR: 100  },
   {Division_name: "Neem Oil", MRPR: 100 },
   {Division_name: "Jio Soap", MRPR: 100 },
   {Division_name: "Nature power Sandale", MRPR: 100 },
   { Division_name: "Detergent Cake liguid", MRPR: 100},
   { Division_name: "Lavendor soaps", MRPR: 100},

];
 users.forEach((i,index) => {
   console.log(index +":", "Soap_Name"+ ": " +i.Soap_Name +     ":" , "MRP" + ": "   + i.MRP);
   console.log("----------------------------------------------------");

});
 users1.forEach((j,index) =>{
  //console.log("-----------------------------------------------------");
  
   console.log(index + " : ", "Division Name", ": " + j.Division_name +  ":",  "MRP",  ":" + j.MRPR);
})





