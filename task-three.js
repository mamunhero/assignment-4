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
// const firstElement = 2;
// const secondElement = 3;
const result = sortMaker([5,6]);
console.log(result)