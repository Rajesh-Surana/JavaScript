//Bigints
let bigint=2342548273094652039458623098465
let bigint2=29840298429038298475290835n
const bigint3=BigInt(4523452345345434653465)
console.log(bigint)
console.log(bigint2)
console.log(bigint3)

let obj1={currency:"$",place:"usa"}
let obj2=obj1
console.log(obj1)
obj1.place="uk"
console.log(obj2)
obj2.currency="pounds"
console.log('obj1:',obj1)
console.log('obj2:',obj2)

array1=[1,2,3,4,5]
array2=array1
array2[1]=7
console.log(array1)
console.log(array2)

function add(){
    console.log('adding')
    return function(){
        console.log('subtraction')
    }
    return add()
}
let ret=add()
console.log(ret())
// let sub=add();
// console.log(sub);