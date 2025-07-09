const button=document.querySelector('button')
let resultdiv=document.createElement('div')
resultdiv.id='result'
document.getElementById('outer').appendChild(resultdiv)
button.addEventListener('click',displaystats)
function displaystats(){
    const input=document.getElementById('input')
    const city=input.options[input.selectedIndex].value
    let population=0, literacyRate=0, language = ' '
    switch(city){
        case 'Bengaluru':
            population=324232
            literacyRate=23.23
            language='kannada'
            break;
            case 'Chennai':
                population=958499
                literacyRate=73.83
                language='Tamil'
                 break;
                   case 'Mumbai':
                    population=984597
                    literacyRate=65.09
                    language='Marathi'
                    break;
    
           case 'Delhi':
            population=7238476
            literacyRate=93.84
            language='Hindi'
            break;            
         }
let text=`The Indian City of ${city} has a population of ${population}. Language Spoken is ${language} and litracy rate is ${literacyRate}%`
        
console.log(text)
document.getElementById('result').innerHTML=text
}

