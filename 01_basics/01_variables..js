const accountId = 12345
let accountEmail="Johndoe@gov.in"
var accountPassword="admin"
accountCity='jaipur'

// accountId = 22  //not allowed
accountEmail="admin@google.com"

console.log(accountId);
// console.log(accountEmail);
console.table([accountEmail,accountId,accountPassword,accountCity])
