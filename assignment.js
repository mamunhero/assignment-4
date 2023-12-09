function cubeNumber(number) {
  if (typeof number !== "number") {
    return "please provide me a valid number"
  } else if (number <= 0) {
    return "please provide  me a positive number"
  } else if (number % 1 !== 0) {
    return "please provide me  an integer number"
  } else {
    const result = number*number*number;
    return result;
  }
}
const input = 3;
function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "please provide me a string"
  }
  else{
  if (string1.includes(string2)=== true) {
    return true
  } else {
    return false
  }
  }
}
function sortMaker(arr) {
  if (!Array.isArray(arr)) {
    return "please provide me an array of numbers";
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "number") {
        return "please provide me an array of numbers";
      } else {
        if (arr[i] <= 0) {
          return "invalid input";
        }
      }
    }
  }
  if (firstElement>secondElement) {
    return[firstElement,secondElement]
  }else if (firstElement<secondElement){
    return[secondElement,firstElement]
  }else{
    return["equal"]
  }
}
const firstElement = 4;
const secondElement = 2;
function findAddress(obj) {
  if (typeof obj!=="object") {
    return "please provide me a valid object"
  }else{
    const street = obj.street;
    const house = obj.house;
    const society = obj.society;
    return street+","+house+","+society;
  }
}
const obj ={
  street:10,
  house:"15A",
  society:"Earth Perfect"
}
function findAddress(obj) {
  if (typeof obj!=="object") {
  return "please provide me a valid object"
  }else{
      const street = obj.street;
      const house = obj.house;
      const society = obj.society;
      return street + "," +"_" + society;
  }
}
const obj ={
    street:10,
    house:"15A",
    society:"Earth Perfect"
}   
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
const totalMoney  =[1, 2, 5];
const chipsPrice  =10;