const forbidenWord = "spam";
const blockedWord = "sale";

function checkForSpam(message) {
  const modefizedMessage = message.toLowerCase();
return modefizedMessage.includes(forbidenWord) || modefizedMessage.includes(blockedWord) ? Boolean(true) : Boolean (false);
//   if (
//     modefizedMessage.includes(forbidenWord) ||
//     modefizedMessage.includes(blockedWord)
//   ) {
//     return Boolean(true);
//   } else {
//     return Boolean(false);
//   }
}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
