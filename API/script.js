// // console.log(fetch('https://offical-joke-api.appspot.com/jokes/programing/random'))
//  console.log(fetch('https://official-joke-api.appspot.com/jokes/programming/random'))
// console.log(fetch('https://developers.giphy.com/docs/'))

fetch('https://official-joke-api.appspot.com/jokes/programming/random')
.then((res)=>{
    if(res.ok)
    console.log("Work Hard")
   else
        console.log("Keep Trying")
   return res.json()
})
.then((msg)=>console.log(msg[0].setup,msg[0].punchline))
.catch((err)=>console.log(err))

// fetch('https://api-thirukkural.vercel.app/api?num=56')
// .then(res1 => conaole.log(res1.json()))
// // .catch((err)=> console.log(err))
fetch('https://jsonplaceholder.typicode.com/todos',{
    method:'POST',
    headers:{'content-type' : 'application/json'},
    body:JSON.stringify({
        userid:53,
        id:978,
        title:'Text',
        status:true
    })
})
      .then(response => response.json())
      .then(json => console.log(json))
