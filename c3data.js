var _ = require('lodash');
var moment = require('moment');

var data = require('./data.json');

var currentDay = _.filter(data.schedule.conference.days, function(day){ return moment(day.day_start).isBefore() && moment(day.day_end).isAfter() })[0];

console.log(currentDay);