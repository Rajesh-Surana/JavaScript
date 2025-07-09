//Funcion Declaration
function positive(numb){//(numb)=parameter
    return numb>0
}
console.log(positive(9))//(9)=Arguments

function say(){
    console.log(`don't give up buddy`)
}
say()
console.log(product(5,3))//Hoisting
function product(a,b){
    return a*b
}

console.log(product)
console.log(typeof product)

//Default Parameter
function greets(name=`there`){
    console.log(`hi`,name)
}
greets(`Arun`)
greets()

//Recursion
function factorial(n){
    if(n==1)
        return 1
   return  n*factorial(n-1)

}
console.log(factorial(5))
//function expression
let even=function(num){
    return num%2==0
}
console.log(even(4))
console.log(even)

let array=[1,2,3,4,5,6]
let sum=0
let findsum=function(arr){
    for(let val of arr){
        sum+=val
    }
   return sum
}
console.log(findsum(array)) 

let volume = function(l,b,h) 
{ return l*b*h}
let val=(le,br,hi)=>le*br*hi
console.log(volume(3,4,2) +'\n'+ val(9,5,2))

let total=0
let sums=ar=>{
    for(let values of ar){total+=values}
     return total}
console.log(sums(array))

let says=()=>{
    console.log(`hello buddy hoe are you`)}
       console.log(says())

let r=5
let areaofcircle=r=>Math.PI*r*r
console.log(areaofcircle(r))
console.clear()
console.log(`hello`)

//variable arguments - reat parameters

let prod1=(...arg)=>{
    let result=1
    for(let val of arg)
        result*=val
        return result
    }

    let prod2 = function(){
        let result =1
        console.log(arguments)
        for(i=0;i<arguments.length;i++)
            result*=arguments[i]
        return result
    }

console.log(prod2(1,9,4,2,4,5))

console.log(prod1(1,9,4,2,4,1))

//Generators

function*indexgenerators(){
    let index=1
    while(true){
        yield index++
    }
}
const gene=indexgenerators();
console.log(gene.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)