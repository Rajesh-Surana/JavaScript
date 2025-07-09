import e, { charging as charge, charging, repair as re } from "./car.js";
let car01 = new e()
car01.drive()
charge()
re()
charging()
let user1={
    name:'arjun',
    age:23,
    mail_id:'mail@gamil.com',
    phone_number:122346567,
    login(){
    console.log('Hi',this.name)
    console.log("you are logged in")
    },
    logout(){
    console.log('You are logged out')
    }

}
user1.login()
user1.logout()

class First{
    static totalusers=0;
    constructor(name,age,mail,phno){
    this.name = name;
    this.age  = age;
    this.mail = mail;
    this.phno = phno;
    First.totalusers++;
    }
    login(){
        console.log('Hi',this.name)
        console.log("you are logged in")
        }
        logout(){
        console.log('You are logged out')
        }
    static NoOfUsers(){
    console.log("No Of Users : "+First.totalusers)
    } 
}
let user01=new First('Surana',21,'mail@gamil.com',1234567890)
let user02=new First('Raj',23,'mails@gamil.com',34567890)
let user03=new First('Rajesh',33,'gmails@gamil.com',4567890)
user01.login()
user02.login()
//console.log('Total Users : ',First.totalusers)
First.NoOfUsers()
let Company_name1='Black Rock'
let Company_name2=new String("Vanguard")

class Paid extends First{
    constructor(name,age,storages){
        // this.name=name;
        super(name,age)
        this.storages=5;
        }
    storage(){
    console.log('Hi',this.name,'You have 100GB Extra Storage')
    return this 
    }
    // Overriding
    login(){
    console.log("Thank you visit again! "+this.name)
    return this
    }
}
let Paid01=new Paid("Mr Person",43)
Paid01.login()
Paid01.storage()
// Method chaining
console.log("Method Chaining")
Paid01.login().storage().logout()
function User(name,age){
    this.name=name;
    this.age=age;
    // this.login=function(){
    // console.log("You Are Logged in");
    // }
}
User.prototype.login=function(){
    console.log(this.name+" " +this.age)
    console.log("You have logged in")
}
let user11=new User("andrew",34)
user11.login()
// Get and Set
class Temps{ 
    constructor(temp){
        this._temp=temp;
    }
    get temp(){
    return `${this._temp} deg celcius`
    }
    set temp(temp){
        if(temp>130)
        temp=80
    this._temp=temp
    }
}
let temp1=new Temps(53)
// temp1._temp=150
temp1.temp=140
console.log(temp1.temp)
