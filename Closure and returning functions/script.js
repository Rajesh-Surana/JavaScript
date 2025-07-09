function outer(name){
    let outervar='out'
    function inner(){
        let innervar='in'
        console.log('outer variable : ',outervar)
        console.log('inner variable : ',innervar)
        console.log('Hello',name)
    }
// inner()
return inner
}
let callone=outer('Surana')
callone()
let calltwo=outer('Andrew')
calltwo()

callone()

function subtracting(a){
    return function(b){
        return a-b
    }
}
let sub1=subtracting(10)
console.log(sub1(15))

let sub100=subtracting(100)
console.log(sub100(300))
console.log(sub100(200))
console.log(sub1(30))


