function convertToMeters(distanceKm) {
    var distanceM = distanceKm * 1000;
    return distanceM;
  }

  function convertToFeet(distanceKm) {
    var distanceFt = distanceKm * 3280.84;
    return distanceFt;
  }

  function convertToInches(distanceKm) {
    var distanceIn = distanceKm * 39370.1;
    return distanceIn;
  }

  function convertToCentimeters(distanceKm) {
    var distanceCm = distanceKm * 100000;
    return distanceCm;
  }

  var distanceKm = parseFloat(prompt("Enter the distance between two cities in kilometers:"));

  var distanceM = convertToMeters(distanceKm);
  var distanceFt = convertToFeet(distanceKm);
  var distanceIn = convertToInches(distanceKm);
  var distanceCm = convertToCentimeters(distanceKm);

  document.write("Distance in meters:", distanceM);
  document.write("Distance in feet:", distanceFt);
  document.write("Distance in inches:", distanceIn);
  document.write("Distance in centimeters:", distanceCm);


function calculateOvertimePay(hoursWorked) {
    const regularHours = 40;
    const hourlyRate = 12.00;

    if (hoursWorked <= regularHours) {
        return 0;
    }

    const overtimeHours = hoursWorked - regularHours;
    const overtimePay = overtimeHours * hourlyRate;

    return overtimePay;
}


const hoursWorked = 45;
const overtimePay = calculateOvertimePay(hoursWorked);
document.write("Overtime Pay:", overtimePay);


var amount = parseInt(prompt("Enter the amount to be withdrawn (in hundreds):"));


var num_100s = 0;
var num_50s = 0;
var num_10s = 0;

num_100s = Math.floor(amount);

amount %= 100;

num_50s = Math.floor(amount / 50);

amount %= 50;

num_10s = Math.floor(amount / 10);

console.log("Number of 100s:", num_100s);
console.log("Number of 50s:", num_50s);
console.log("Number of 10s:", num_10s);


var amount = parseInt(prompt("Enter the amount to be withdrawn (in hundreds):"));
var num_100s=0
var num_50s=0
var num_10s=0
num_100s=Math.floor(amount)
amount %=100
num_100s=Math.floor(amount/50)
amount %=50
num_10s=Math.floor(amount/10)
amount %=50
console.log("number of 100_s",num_100s)
console.log("number of 10_s",num_50s)
console.log("number of 10_s",num_10s)

alert("Thank You!")