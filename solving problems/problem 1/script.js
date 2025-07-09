var arr=[7,2,4,5,6,3,8]
let target=15
//brute force
// var sums=function(arr,target){
//     for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//     if(arr[i]+arr[j]==target){
//         return [i,j]
//     }
//     }
//     }
// };
// console.log("sum : ",sums(arr,target))

let sums2=function(array,target){
    let map=new Map();
        for(let i=0;i<arr.length;i++){
        let complement=target-array[i]
    if(map.has(complement))
    return [map.get(complement),i]
map.set(array[i],i)  
    }
}
console.log("sums : ",sums2(arr,target));
//Number of bits(question no 2):

let count=0;
let num=0b1010100100101010;
let numbers=function(){for(let i=0;i<32;i++){
    count+=num&1
    num=num>>1
}
console.log(count)
return count;
}
console.log(numbers())
// let str1=num.toString().split();
// str1.forEach(digit=>{
//     if(digit=="1") count++
// })
// console.log(count)

//question no 3: anagram

let anagrams=function(st1,st2){
    let map=new Map()
    if(st1.length!=st2.length)
    return false

    for(let i=0;i<st1.length;i++){
if(map[st1[i]]) { map[st1[i]]++; }
else { map[st1[i]]=1; }
    }

    for(let i=0;i<st2.length;i++){
        if(map[st2[i]]) map[st2[i]]--
        else return false
    }
    return true
}
console.log(anagrams("abcd","adjc"));
 
//question no 3: Longest substring without repeating characters
console.log("a.no:3")
let variable="abbsabbadbejbsn"
var lengthoflongestsubstring=function(s){
    let maxlength=0;KO
    let currentstring=[];
  let  currentindex=0;
    for(let i=0;i<s.length;i++){
        currentindex=currentstring.indexOf(s[i])
        if(currentindex!=-1){
            currentstring.splice(0,currentindex+1)
        }
        currentstring.push(s[i])
        maxlength=Math.max(maxlength,currentstring.length)
        console.log(currentstring)
    }
    return maxlength;
    
}
console.log(lengthoflongestsubstring(variable));
            


