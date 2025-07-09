

let method1=function(){
    console.log(`step 
        first
        ${ 1 }`);
    console.log("step 2")
    console.log("step 3");
    } 
    console.log("Hello 2")
method1();

console.log("Hello 1")
console.log("Hello 3")
 let a=5;
 var b=3;
 let c=a+b;

setTimeout(()=>console.log("step 3"),3000);
setTimeout(()=>console.log("step 2"),2000);
setTimeout(()=>console.log("step 1"),1000);
let array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
let total=0;
let count=0;
array.forEach(element => {
    // console.log(
total=element+total;
    count++; 
 });
console.log(total); 
 console.log("Sum : "+total/count)
 console.log(array.length)
 console.log(count)
