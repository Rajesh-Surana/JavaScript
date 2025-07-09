
; let array1=[1,2,3,4,2,4,6,8,9,6,5,4,2]
let myset=new Set(array1)
console.log(array1)
console.log(...myset)
let arr=Array.from(myset)
console.log(arr) 
let set2= new Set()
set2.add(1)
set2.add(1)
set2.add(2)
set2.add(1)
set2.add(4)
set2.add(5)
set2.add("a")
set2.add({"a":2})
console.log(set2)
let obj={"a":2}
set2.add(obj)
console.log(set2)
console.log(set2.delete(2))
console.log(set2)

let array2=Array.from(set2)
console.log(set2) 
set2.add("added")
//set2.clear()
console.log("keys")
//console.log(set2.delete(4)) 
set2.forEach((value)=>{
   // console.log(set2.keys())
})
console.log(set2.values())
console.log("after")
console.log(set2)
//Map

let map1=new Map()
map1.set("c",1)
console.log(map1.keys())
map1.set("b",10)
map1.set(3,9)
map1.set(2,85)
map1.set("c",0)
console.log(map1)
console.log("iterations")
for(let i of map1){
    console.log(i)
}

console.log("key and values")
for(let [keyes,value] of map1){
    console.log(keyes,value)
}
console.log("key")
for(let key of map1.keys()){
    console.log(key)
}
console.log("value")
for(let value of map1.values()){
    console.log(value)
}
console.log("key and values")

map1.forEach((value,key)=>{
    console.log("key ",key,"value ",value)
})

console.log("2d array")

let tdarray=[["a",2],["n",8]]
let map2=new Map(tdarray)
console.log(map2)
let againarr=Array.from(map2)
console.log(againarr)
console.log(...map2)