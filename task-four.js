task-4
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
const obj = {
  street:10,
  house:"15A",
  society:"Earth Perfect"
}
const Address=findAddress(obj);
console.log(Address)

// function findAddress(obj) {
//   if (typeof obj!=="object") {
//   return "please provide me a valid object"
//   }else{
//       const street = obj.street;
//       const house = obj.house;
//       const society = obj.society;
//       return street + "," +"_" + society;
//   }
// }
// const obj ={
//     street:10,
//     house:"15A",
//     society:"Earth Perfect"
// }  
// const Address=findAddress(obj);
// console.log(Address)