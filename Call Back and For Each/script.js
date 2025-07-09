
function greetConsole(name){
    console.log('hello',name)
}
function greetHeading(name){
    const heading=document.querySelector('h2')
    heading.innerHTML='Hello ' + name
}
function greet(callback){
callback(`raj`)
console.log(callback)
}
greet(greetConsole)
//  greet(greetHeading)
greet(name => {
    const heading=document.querySelector('h2')
    heading.innerHTML='Hello ' + name
}
)

//ForEach:

array=['arjun',`arun`,`vijay`]
array.forEach(print)


function print(val){
    console.log(val.toUpperCase())
}

array.forEach(val=>
    console.log(val.toLowerCase())
)

array.forEach((values,inde,array)=>{
    array[inde]=values.toUpperCase()

})
console.log(array)

array2=[`EEE`,`ECE`,`ROYAL MECH`,`CSE`]
array2.forEach(val=>{
const opts=document.createElement('option')
opts.textContent=val
opts.value=val
document.getElementById('branch').appendChild(opts)    

});

array2.forEach(val=>{
    const lists=document.createElement(`li`)
    lists.textContent=val
    // lists.value=val
    document.getElementById('sub').appendChild(lists)
    // console.log(lists)
});

input=[6,-5,7,-2,4,6,-1]
let total=0
input.forEach(values=>{ if(values>0)  total+=values });
const sum=document.createElement('div');
sum.textContent=total
document.getElementById('sums').appendChild(sum)
