let users = [ {Name : "Senthil", Age :45 },

    {Name : "Kanna", Age : 50},

  {Name : "Suresh", Age:20}

];

   let result = users.find(user=>user.Age>20);
   let result1 = users.find(user=>user.Name ="Kanna" )

   console.log(result);
   console.log(result1);

   

   //find() is used to find matching element from an arry
