
    // const operator=input.options[input.selectedIndex].value
    // let population=0, literacyRate=0, language = ' '
    function calculate(operator){
const numb1=Number(document.getElementById('num1').value)
const numb2=Number(document.getElementById('num2').value)

let answer;

//         let resultdiv=document.createElement('div')
// resultdiv.id='result'
// document.getElementById('outer').appendChild(resultdiv)
// button.addEventListener('click',displaystats)
// function displaystats(){
// const input=document.getElementById('input')
    
    switch(operator){
     case '+':
     answer=numb1+numb2
     break;

     case '-':
     answer=numb1-numb2
     break;

     case '*':
     answer=numb1*numb2
     break;
    
     case '/':
        if(numb2===0){ answer=`Can't divide by zero`}
    else{answer=numb1/numb2}
     break; 
     default:
        answer=`Invalid Operation`           
         }
        //  if(numb1!=Number||numb2!=Number){
        //     answer="Invalid operation"
        //  }
        
// answer=`The Indian City of ${city} has a population of ${population}. Language Spoken is ${language} and litracy rate is ${literacyRate}%`
        
console.log(answer)
document.getElementById('result').innerHTML=`Answer = ${answer.toFixed(2)}`
    }
document.getElementById('b1').addEventListener('click',function()
{
    calculate('+');
});
document.getElementById('b2').addEventListener('click',function()
{
    calculate('-');
});
document.getElementById('b3').addEventListener('click',function()
{
    calculate('*');
});
document.getElementById('b4').addEventListener('click',function()
{
    calculate('/');
});


       