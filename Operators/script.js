let item1={
    name:`Redmi`,
    price:12000,
    quantity:2,
    brands:[`Redmi`,`vivo`,`apple`],
    array_types:{
        type1:`1D Array`,
        type2:`2D Array`,
        type3:`3D Array`,
        type4:`4D Array`,
    }
}
console.log(item1.brands[1])
console.log(item1.array_types.type2)
console.log(item1)
let item2=new Object();
item2.name='vivo',
item2.price=18000,
item2.quantity=4,
console.log(item2)
console.log(item2.price)
item2.price=25000
console.log(item2.price)
item2.returnable=true
console.log(item2)
console.log(item2[`price`])
item2[`returnable`]=false
console.log(item2)
let key=`price`
item2[key]=29000
item2[key]=30000
console.log(item2)

item1={
    name:`Redmi`,
    price:12000,
    quantity:3,
    buy:function(){
    console.log(`item added to cart`)
    },
    list(){
    console.log(`item added to list`)
    }
}
console.log(item1)
item1.buy()
item1.list()