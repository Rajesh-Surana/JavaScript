 let user={
    username:`mr user`,
    password:`passWOrd@123`,
    mail_id:`user.gmail.com`,
    array:[1,2,3,4],
    another:{
        one:`one`,
        two:`two`,
        three:`three`,
    },
    login:function(){
        console.log(`Login sucessful`)
    },
    Signup(){
        console.log(`Signup sucessful`)
    },
}
console.log(user.password)
console.log(`hello`)
console.log(user.username)
console.log(user.array)
console.log(user)
user.username=`userbuddy`
console.log(user.username)
user.password=`HTML&CSS`
console.log(user.password)
console.log(user)
console.log(user[`password`])
user[`phone`]=1234
let ph=`phone`
user[ph]=9978
console.log(user)
user.login()
user.Signup()
