
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
