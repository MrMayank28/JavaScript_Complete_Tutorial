const accountId = 2819
let accountEmail = "mayank@gmail.com"   // Declare Variable
var accountPassword = "12345"   // Old Trend To Declare variable
let accountState    // It should be treated as "Undefined" 

/*
Prefer not to use "var"
because of issue in block scope and functional scope
*/
accountCity = "Indore"  // Old Trend To Declare variable Not To Use Bad Practices

// accountId = 2    // Contstant Variable Change Not Allowed

accountEmail = "ma@ma.com"
accountPassword = "54321"
accountCity = "Ratlam"

// console.log(accountId)
// console.log(accountEmail, accountPassword, accountCity);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
