
//prompting user for response 
let name = prompt("What is the name of the restaurant?")
let taxRate = prompt("What is the tax rate (%)?")
let tableFeeInput = prompt("What is the standard table/service fee?")


//create object 
let storeInfo = {
    name: name,
    taxRate: parseFloat(taxRate),
    tableFee: parseFloat(tableFeeInput) 
}

console.log("Hello, Welcome to " + storeInfo.name + " the standard table fee is $" + storeInfo.tableFee + ".")

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

//print each item from array to test data 
/*receiptItems.forEach(item => {
    console.log(item.name + " | $" + item.price.toFixed(2));
});*/


//intialize subtotal counter 
let subtotal = 0; 

//iterate through reciptItems array
for(const item of receiptItems){
    console.log(item.name + " -- $" + item.price.toFixed(2)) //print each item to console

    subtotal += item.price; 
}

console.log("Food Subtotal: " + subtotal.toFixed(2))
console.log()

console.log("The customer has requested to cancel the last item ordered.")

//customer cancels order 
if(receiptItems.length > 0){
    let removedItem = receiptItems.pop();
    console.log("As requested, the " + removedItem.name + " has been removed from the order.")
}else{
    console.log("No item removed.")
}

//recalculate subtotal
let updatedSubtotal = 0;
for(const item of receiptItems){
    updatedSubtotal += item.price;
}

//calculate gross subtotal
let tableFee = storeInfo.tableFee; 
let grossTotal = updatedSubtotal + tableFee;

//calculate the tax amount
//calculate store tax = total price * tax rate divide by 100 to convert into decimal 
let taxAmount = grossTotal * (storeInfo.taxRate / 100);

//calculate the grand total 
let grandTotal = grossTotal + taxAmount;

//final itemized receipt 
console.log(storeInfo.name.toUpperCase() + " RESTURANT");
console.log("=====================")
//can loop through the items 
for(const item of receiptItems){
    console.log(item.name + " -- $" + item.price.toFixed(2));
}

console.log("Table Fee: " + storeInfo.tableFee.toFixed(2));
console.log("Subtotal: " + updatedSubtotal.toFixed(2));
console.log("Tax: " + taxAmount.toFixed(2));
console.log("-------------");
console.log("The Grand Total is: $" + grandTotal.toFixed(2));

