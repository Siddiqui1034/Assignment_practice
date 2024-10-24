let object1 = {a:1, b:2, c:3, f:4}
let object2 = {a:1, b:3, f:4, c:3}

function commonObject(object1, object2){
// make an empty object
let commonValue = {}
for(let key in object1){
    if(object2.hasOwnProperty(key) && object1[key]===object2[key]){
        commonValue[key] = object2[key]
    }
}
return commonValue
}
console.log(commonObject(object1, object2))



















































// let obj1 = {a:1, b:4, c: 8, e: 10}
// let obj2 = {a:3, b:4, c: 2, e: 10, f:11}

// function commonObj(obj1, obj2){
// // empty object to store common value
// const commonObj = {}
// // iterate to the all key of object 1
// for(let key in obj1){
// // checking the keys of object 1 and object 2
// if(obj2.hasOwnProperty(key) && obj1[key] === obj2[key])
//     // commonObj[key] = obj1[key]
//     commonObj.key = obj1.key
// }
// return commonObj;
// }
// console.log(commonObj(obj1,obj2))