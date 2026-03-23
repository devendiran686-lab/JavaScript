async function orderFood() {

    console.log("Cooking started");
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("Cooking done");
    return "Food Ready";

}
orderFood();



