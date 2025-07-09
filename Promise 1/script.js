// function takalbooking(){
// return new Promise((resolve,reject)=>{
//     let ratio=false;
//     if(ratio)
//         resolve(400);
//     else
//     reject(300); 
// });
// }
// takalbooking().then((amount)=>console.log(`it's worked i have transfered Rs.${amount}`))
// .catch((amt)=>console.log(`it doesn't work but i have Rs.${amt}`)
// )
let friendA =new Promise((resolve,reject)=>{       
    let status=true
       if(status)
           setTimeout(resolve,3000,"Arjun reached")
       else
       reject("Arjun didn't reached")
   })
   
let friendB =new Promise((resolve,reject)=>{        
   let status=false 
       if(status)
           setTimeout(resolve,4000,"Shalini reached")
       else
       reject("Shalini didn't reached")
   })
   
   let friendC =new Promise((resolve,reject)=>{        
       let status=false
       if(status)
           setTimeout(resolve,1000,"monisha reached")
       else
       reject("monisha didn't reached")
   })

   let friendD =new Promise((resolve,reject)=>{
       let status=true  
       if(status)
           setTimeout(resolve,2000,"dhanush reached")
       else
       reject("dhanush didn't reached") 
   }) 
Promise.race([friendD,friendB,friendC,friendA])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))