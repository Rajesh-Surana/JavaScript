let json1 = "Surana"
let json2 = 5
let json3 = true
let json4 = [3,45,"hey"]
let json5 = {
    "stock":"BLK",
    "price":155
}
let json6 = `[
    {
    "stock":"BLK",
    "price":155
    },
    {
    "stock":"SST",
    "price":100,
    "Exchange":"Nosdec"
    },
    {
    "stock":"BRH",
    "price":130
    }
]`
let parsed = JSON.parse(json6)
console.log(json6)
console.log(typeof(parsed[1].stock)) 
console.log(JSON.stringify(parsed))
console.log("HEllo World")
console.log(json4)


