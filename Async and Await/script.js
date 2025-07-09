// async function fun(params) {
//  return "Returning"   
// }
// console.log(fun())
// fun().then((send)=> console.log(send));


// let Reachs = new Promise((resolve,reject)=>{

//   let state=false
// if(state){ 
//     setTimeout(resolve,3000,"Arjun Reached")
// }
// else {
//     reject("Arjun not reached")
// }
// }) 
let Reach =new Promise((resolve,reject)=>{
    let status=false  
    if(status)
        setTimeout(resolve,2000,"dhanush reached")
    else
    reject("dhanush didn't reached") 
}) 
 async function statuses() {
    try{
    console.log("hiiii......")
    result=await Reach
    console.log(result)
    console.log("Bye...")
    }
    catch(errors){
        console.log(errors)
    }
    
 }
 statuses()
//takal example
 let takal=new Promise((resolve,reject)=>{
    let status=false;
    if(status)
        setTimeout(resolve,1000,"Ticked booked")
    else
    reject("Ticket didn't booked")
 
})
 async function as1() {
    try{
        result1=await takal;
        console.log(result1)
    }
    catch(error1){
        console.log(error1)
    }
 }

as1()

//coin toss example

let coin=new Promise((resolve,reject)=>{
    let status=true;
    if(status)
        setTimeout(resolve,2000,"it's head")
    else
    reject("it's toss")
})
async function coins(params) {
    try{
        result=await coin;
        console.log(result)
    }
    catch(error){
        console.log(error)
    }
}

coins() 

