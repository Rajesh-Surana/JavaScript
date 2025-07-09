ampm=document.getElementById("ampm")
function displayTime(){
let dateTime=new Date()
let hours=dateTime.getHours();
let min=padzero(dateTime.getMinutes());
let scs=padzero(dateTime.getSeconds());
let milsec=padzero(dateTime.getMilliseconds());
let date=dateTime.getDay();
let month=dateTime.getMonth();
let year=dateTime.getFullYear();
// let weekday;
// switch(weekday){
//     case 1:
//     weekday="sunday";
//     case 2:
//     weekday="monday";
//     case 3:
//     weekday="tuesday";
//     case 4:
//     weekday="wednesday";
//     case 5:
//     weekday="thursday";
//     case 6:
//     weekday="friday";
//     case 7:
//     weekday="saturday ";
// }
if(hours>12){
    ampm.innerHTML='PM';
    hours= hours-12;
}
else {
    ampm.innerHTML='AM'
}
hours=padzero(hours)
document.getElementById('hrs').innerHTML=hours;
document.getElementById("mins").innerHTML=min;
document.getElementById("second").innerHTML=scs;
document.getElementById("milsecond").innerHTML=milsec;
document.getElementById("day").innerHTML=date;
document.getElementById("month").innerHTML=month;
document.getElementById("year").innerHTML=year;
// document.getElementById("weekday").innerHTML=weekday;
}
function padzero(num){
    return num<10?"0"+num:num;
}
setInterval(displayTime,1000);