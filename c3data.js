var _ = require('lodash');
var moment = require('moment');

var data = require('./data.json');

var now = new Date("2014-12-27 20:30:00");

var currentDay = _.filter(data.schedule.conference.days, function(day){ return moment(now).isBetween(day.day_start, day.day_end); })[0];

var eventsOfTheDay = _.flatten(_.map(Object.keys(currentDay.rooms), function(key) { return currentDay.rooms[key] }), 1);

_.sortBy(eventsOfTheDay, function(a, b){  
  if(moment(a).isBefore(moment(b))) 
  	return -1;
  else
  	return 1;
});

var upcomingEventsOfTheDay = _.take(_.filter(eventsOfTheDay, function(e){
	return moment(e.date).isAfter(now);
}), 2);

console.log('NOW: ' + now);
console.log('');
console.log('EVENTS OF THE DAY:');
console.log(_.map(eventsOfTheDay, function(e){ return '- ' + e.title }).join("\n"));
console.log('');
console.log('TWO NEXT UPCOMING EVENTS OF THE DAY:');
console.log(_.map(upcomingEventsOfTheDay, function(e){ return '- ' + e.title }).join("\n"));
console.log('');
