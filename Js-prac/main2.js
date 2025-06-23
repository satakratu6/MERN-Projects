function getUserById(id){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log("Step 1: fetching user details")
      resolve({id:1,name:"Satakratu",pan:"ABCDEF899"})
    })
  })
}
function getCreditScore(pan){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log(`Step 2: Cheking credit score for ${pan}`)
      resolve({score:70})
    })
  })
}
function checkLoanEligibility(score){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log(`Step 3: Checking loan eligibility`)
      if(score>=700){
        resolve("Eligible");
      } else{
        reject("Not Eligible");
      }
    })
  })
}
getUserById(1)
  .then(user=>getCreditScore(user.pan))
  .then(user=>checkLoanEligibility(user.score))
  .then(result=>console.log(`Loan eligiblity: "${result}`))
  .catch(error => console.error("Error:", error));
