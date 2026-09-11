
//prompting user for response 
let name = prompt("What is the name of the restaurant?")
let taxRate = prompt("What is the tax rate (%)?")
let tableFee = prompt("What is the standard table/service fee?")


//create object 
let storeInfo = {
    name: name,
    taxRate: parseFloat(taxRate),
    tableFee: parseFloat(tableFee).toFixed(2) //formated decimal string
}

console.log("Hello Welcome to " + storeInfo.name + " the standard table fee is $" + storeInfo.tableFee + ".")

//create array
let receiptItems = [];

while(prompt("Would you like to order? Type 'Y' for yes. Type 'N' for no.")?.toUpperCase() === "Y"){
    let itemName = prompt("Enter name of item: ");
    let itemPrice = prompt("Price?:");
    let price = Number(itemPrice); //converts into number

    let order = {
        name: itemName,
        price: price, 
    }

    receiptItems.push(order); //item object
}

console.log("Total Items Added: " + receiptItems.length)
//print each item from array
receiptItems.forEach(item => {
    console.log(item.name + " | $" + item.price.toFixed(2));
});

