/*
PRACTICE PRACTICE PRACTICE
 */


const dayStart = "07:30";
const dayEnd = "17:45";

function getNumberOfMinutes(time) {
    var arr = time.split(":")
    var hours = arr[0];
    var minutes = arr[1];
    return hours * 60 + minutes;
}

function scheduleMeeting(startTime,durationMinutes) {
    var startTimeMinutes = getNumberOfMinutes(startTime);
    var dayStartMinutes = getNumberOfMinutes(dayStart);
    var dayEndMinutes = getNumberOfMinutes(dayEnd);

    return startTimeMinutes > dayStartMinutes
        && startTimeMinutes < dayEndMinutes
        && (startTimeMinutes + durationMinutes) <= dayEndMinutes;
}

console.log(scheduleMeeting("7:00", 15));; // false
console.log(scheduleMeeting("07:15", 30));; // false
console.log(scheduleMeeting("7:30", 30)); // true
console.log(scheduleMeeting("11:30", 60));; // true
console.log(scheduleMeeting("17:00", 45));; // true
console.log(scheduleMeeting("17:30", 30));; // false
console.log(scheduleMeeting("18:00", 15));; // false