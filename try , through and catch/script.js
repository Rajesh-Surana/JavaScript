// let p1=prompt("Enter Your Name")//p1-promt1
// console.log()
// document.getElementById("h").append(`Hello ${p1} welcome to our website`)

    try{
        num=prompt("Enter a number1")
        num2=prompt("Enter a number2")
        
        if(num=="")
            throw  "Can't be empty" 
        if(num==" ")
            throw  "whitespace not allowed" 
        if(isNaN(num))
            throw "Enter a valid numbmer"
        console.log(num*2)   
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log("Program is finished")
    }
    try{
        let a=4;
        let b=7;
        let c=a-b;
        if(isNaN(c))
           throw "Enter a valid number"
        console.log(c);
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log("Bye")
    }
    