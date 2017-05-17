// Unix Epic Jan 1st 1970 00:00:00 am


//get timestamp
//new Date().getTime()
// moment time library
var moment = require('moment');

// var date = new Date();
// var months = ['Jan','Feb']
// console.log(date.getMonth());
// var date = moment();


// //manipulate time
// date.add(1, 'years').subtract(9, 'months');
// //returns name of month (uses moment library)
// //momentjs.com
// console.log(date.format('MMM Do YYYY'));

//Challenge

// 10:35 am

//new Date().getTime()
var someTimestamp = moment().valueOf();
console.log(someTimestamp);


var createdAt = 1234;
var date = moment(createdAt);

console.log(date.format('LT'));