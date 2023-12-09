function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return "please provide me a number"
  }
  let sum =0;
  for (let i = 0; i < changeArray.length; i++) {
   const index = i;
   const element = changeArray[index]
   sum=sum+element;
  }
  if (sum>=totalDue) {
    return true;
  } else {
    return false;
  }
}
const totalMoney  =[ 2, 2, 5];
const chipsPrice  =10;
const result = canPay(totalMoney, chipsPrice);
console.log(result);