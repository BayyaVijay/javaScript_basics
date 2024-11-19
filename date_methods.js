var date = new Date();
var Hours = date.getHours();
var Mintues = date.getMinutes();
var Seconds = date.getSeconds();
var formattedTime=`${Hours}hrs::${Mintues}mins::${Seconds}sec`
console.log(formattedTime)



const now = new Date();
console.log(now.getFullYear);
console.log(now.getTime(1731737609928));