
// function addition(ad,ad1)
// {
//     return ad+ad1;
// }

// function substraction(ad,ad1)
// {
//     return ad-ad1;


// }
// console.log("Addition", addition(10,20));
// console.log("substraction", substraction(100,50));



function add(a,b,c){
    return a+b+c;

}
function sub(a,b,c){
    return (a-b)+c;

}
console.log("Addition", add(100,200,100));
console.log("Substraction", sub(100,200,500));


export{add,sub};  


  await expect(page.locator("#btn")).tobevisible();
  await expect(page.tobevisible)();
  await expect(page.toHaveText("Welcome"));
  await expect(page.locator("btn")).toHaveText("");
  await expect(page.locator()).tobevisible("");
  await expect(page.locator())
  await expect(page.locator("")).toHaveText("");
  await page.waitforselector("");
  await page.click();
  await page.waitforselector("Login");
  await page.waitfornotselector("Login");
  await expect(page.locator("")).tobevisible("");
  await page.selectoption("#country","In");

  await page.selectoption("#country",{label : "india"});
  await page.selectoption("#country", {index: 0});

  await page.click("#click");
  await page.click("select=india");
  






