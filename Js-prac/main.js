
// function getGrade(score, isBonus){
//     if(isBonus==true){
//       score=score+5;
//     }
//     if(score>=90){
//       console.log("A");
//     }
//      else if(score>=80 && score<90){
//       console.log("B");
//     } else if(score>=70 && score<80){
//       console.log("C");
//     }else if(score>=60 && score<70){
//       console.log("D");
//     } else{
//       console.log("F");
//     }
// }
// getGrade(83,true);
// function sqaure(n){
//   console.log(n*n);
// }
// console.log(sqaure(5));
// function fibonacci(memo, n) {
//   if (n <= 1) return 1;
//   if (memo[n]) return memo[n];
//   return memo[n] = fibonacci(memo, n - 1) + fibonacci(memo, n - 2);
// }

// const memo = {};
// console.log(fibonacci(memo, 7));
// let l1=[1,2,4,8,10];
// let l3=l1.map(e=>e*e);
// console.log(l3);
// let l2=l1.filter(e=>e%2==0);
// console.log(l2);
// let scores =[[10, 30], [35, 0], [67, 76]];
// let s2= scores.sort((a,b)=>a[1]-b[1])
// console.log(scores)
// console.log(2+"2");
// console.log(2+"name");
// console.log(2*"name");

//chain of promises

// function createOrder() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Step 1: Order created");
//       resolve("Order ID: 123");
//     }, 1000);
//   });
// }

// function processPayment(orderId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Step 2: Payment processed for ${orderId}");
//       resolve("Payment ID: 456");
//     }, 1000);
//   });
// }

// function deliverOrder(paymentId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Step 3: Order delivered using ${paymentId}");
//       resolve("Delivery confirmed");
//     }, 1000);
//   });
// }

// // Chaining the promises
// createOrder()
//   .then(orderId => processPayment(orderId))
//   .then(result => console.log(result))

//   .then(paymentId => deliverOrder(paymentId))
//   .then(result => console.log(result))
//   .catch(error => console.error("Error:", error))

// You're developing a banking dashboard that shows a user's loan eligibility after validating their identity and credit score. Each step must complete before the next begins.

// Write chained Promises to do the following in order:

// Fetch user identity by ID (getUserById(id)) → resolves with user object { id, name, pan }

// Get credit score based on PAN (getCreditScore(pan)) → resolves with { score: 740 }

// Determine loan eligibility based on score (checkLoanEligibility(score)) → resolves with final message: "Eligible" or "Not Eligible"

// Each function returns a Promise.

// Implement the chaining using .then() and print the final loan eligibility message to the console.
function getUserById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 1: Fetching User details");
      resolve({ id: id, name: "Sattu", pan: "ABCDEF12345" });
    }, 1000);
  });
}

function getCreditScore(pan) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Step 2: Getting credit score for PAN: ${pan}`);
      resolve({ score: 740 });
    }, 1000);
  });
}

function checkLoanEligibility(score) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Step 3: Checking eligibility for score: ${score}`);
      if (score >= 700) {
        resolve("Eligible");
      } else {
        reject("Not Eligible");
      }
    }, 1000);
  });
}

getUserById(1)
  .then(user => getCreditScore(user.pan))
  .then(creditInfo => checkLoanEligibility(creditInfo.score))
  .then(eligibility => console.log(`Loan Eligibility: ${eligibility}`))
  .catch(error => console.error("Error:", error));
