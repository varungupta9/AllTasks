var arrays= [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,14];
var newarray = [];
(function(number){
var flag = true
for(let i = 0 ; i < number.length;i++){
if(number[i]<3)
{
 newarray.push(number[i])
}
else{
for(let j = 2; j<Math.sqrt(number[i]);j++){
if(number[i]%j===0)
{
flag = false
}
}

if(flag===true)
{
newarray.push(number[i])
}
}}
console.log(newarray);
})(arrays);

