var moment = require('moment');
// var date = new Date();
//
// console.log(date.getMonth())

// var date = moment();
// console.log(date.format('MMM Do YYYY'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);
var createAt = 1234;

// Get current time
var date = moment(createAt);
// console.log(date.format('h:mm a'));
