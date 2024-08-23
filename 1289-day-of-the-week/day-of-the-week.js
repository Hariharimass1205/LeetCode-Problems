/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
//** */
var dayOfTheWeek = function(day, month, year) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let curr = new Date(year,month-1,day) 
console.log(curr);
let ans = curr.getDay()
return days[ans]
};