const btn=document.getElementById('btn')
const colortext=document.getElementById('color')
const wrap=document.getElementById('wrapper')
const hex=[`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`A`,`B`,`C`,`D`,`E`,`F`]
btn.addEventListener('click',function()
{
    let hexcolor='#'
    for(let i=0;i<6;i++){
        hexcolor+=randhex()
    }
    wrap.style.backgroundColor=hexcolor
    heading.style.color=hexcolor
    color.innerHTML=hexcolor
})

function randhex(){
    let randoindex=Math.floor(Math.random()*16)
    return hex[randoindex]
}









