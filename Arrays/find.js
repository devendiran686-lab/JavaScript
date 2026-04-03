let products = [ {Division_Name : "PAPAYA", MRP :2550},
                 {Division_Name : "ULTIMATE DETERGENT CAKE", MRP : 1200},
                 {Division_Name : "TRIPLE POWER DETERGENT POWDER", MRP:1440}];

   let result = products.find(pro=>pro.MRP>1200);
   let result1 = products.find(pro=>pro.Division_Name ="TRIPLE POWER DETERGENT POWDER")

   console.log(result);
   console.log(result1);

   //find() is used to find matching element from an arry
