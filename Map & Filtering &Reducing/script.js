//Map
let priceUSD = [10,34,57,23]
let priceINR = priceUSD.map(x => x*83)
console.log(priceINR)
//ForEach
priceUSD.forEach(y =>{
    let INR=y*83
    console.log(INR)
}  
)

//Map Using CallBack

priceINR=priceUSD.map(converting)
function converting(values){
    return values*83
}
console.log(priceINR)

const input = [//array of objects
            {name:`john`,age:23},
            {name:`Adam`,age:34},
            {name:`Surana`,age:52},
            {name:`Tom`,age:13},
            {name:`Selber`,age:31},
]

const ages=input.map(a=> a.age)
console.log(`Age : `+ ages)

//Filter

let cost=[12,343,123,68,345,179,34,673]
less=cost.filter(f => f<100)
console.log(`less than 100 : `+less)
console.log(typeof(less))

//Reduce

totalvalue=cost.reduce((total,r)=> total+r)
console.log(totalvalue)




//Reduce

let arr = [
    ["A","B","C"],
    ["D","E","j"],
    ["A","D","I"],
    ["J","K","H"],
];
const counts=arr.flat().reduce(
    (accumulator,currentvalue) => {
    if(accumulator[currentvalue]){
    accumulator[currentvalue]++
//console.log('current vlue : '+accumulator[currentvalue])
}
   
else
    accumulator[currentvalue]=1
    return accumulator
    }
,{})
console.log(counts)

//Excercise-1 Reduce Method

let names="Robert Andrew George"
let arr2=names.split(" ")
console.log(arr2)
let letter=arr2.map(word => word[0])
console.log(letter.join(""));
let arr0=[4,6,2,3,1,1,3,5,7,8,4,3]

let unique=[...new Set(arr0)]


const dup=arr0 .flat().reduce(
    (accumulators,currentvalues) =>{
        if(!(accumulators[currentvalues])){
        accumulators.push(currentvalues)
    }
        return accumulators
    }

,[])
console.log(dup)


//object

let results = {"a":1,'b':2,'c':3}
results['c'] = 4;
console.log('B value : ')
console.log(results["b"])

//filtering Excercise:
let arraysum=[6,-5,7,-2,4,6,-1]
let positive=arraysum.filter(f=> f>0)

let sum=positive.flat().reduce((sum,ce) => sum+ce);
console.log("Sum of positive Array : "+sum);
console.log(unique)
