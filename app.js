function displayCounting(start, end) {
    var rear = prompt("enter your 1st no")
    var rear = prompt("enter your 2nd no")
    if (start <= end) {
        for (let i = start; i <= end; i++) {
            document.write(i + "<br>");
        }
    } else {
        for (let i = start; i >= end; i--) {
            document.write(i + "<br>");
        }
    }
}
displayCounting(1, 30)

let a;
let b;
let c;

a = window.prompt("enter side A")
a = Number(a)

b = window.prompt("enter side B")
b = Number(b)

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
document.write("side c:", c)


function calculateArea(width, height) {
    var area = width * height;
    return area;
}
var result = calculateArea(2, 9);
console.log(result)

function ispalindrome(str) {
    var val = str.split("").reverse().join("")
    if (str.toLowerCase() === val.toLowerCase()) {
        document.write(str + "is palindrome")
    }
    else {
        document.write(str + "not palindrome")
    }
}
document.write(ispalindrome("fox"))

function ispalindrome(str) {
    var val = str.split("").reverse().join("")
    if (str.toLowerCase() === val.toLowerCase()) {
        document.write(str + "is palindrome")
    }
    else {
        document.write(str + "is not palindrome")
    }
}
document.write(ispalindrome("yoyo"))



function uppercase(str) {
    var array1 = str.split(' ');
    var newarray1 = [];

    for (var i = 0; i < array1.length; i++) {
        newarray1.push(array1[i].charAt(0).toUpperCase() + array1[i].slice(1));
    }
    return newarray1.join(' ');
}
document.write(uppercase("the quick brown fox"));


function long(str) {
    var newString = str.split(' ')
    newString.sort(function (a, b) { return b.length - a.length })
    return newString[0];
} document.write(long("keyword are"));




function countOccurrences(str, letter) {

    var count = 0;

    str = str.toLowerCase();
    letter = letter.toLowerCase();


    for (var i = 0; i < str.length; i++) {

        if (str[i] === letter) {

            count++;
        }
    }

    return count;
}

var inputString = 'google';
var letterToCount = 'o';
var occurrences = countOccurrences(inputString, letterToCount);
document.write(occurrences)

function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write("The circumference is " + circumference);
}

function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    document.write("The area is " + area);
}

var radius = 5;
calcCircumference(radius)
calcArea(radius)

function power(a, b) {
    return Math.pow(a, b)
}
var result = power(2, 4)
document.write(result);


var year = 2004;
if ((year % 4 == 0) && (year % 100 != 0))
    console.log(year + "is a leap year")
else if (year % 400 == 0)
    console.log(year + "is a leap year")
else
    console.log(year + "is not a leap year")

function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function calculateTriangleArea(a, b, c) {
    var s = calculateS(a, b, c);
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}
var sideA = 3;
var sideB = 4;
var sideC = 5;

var area = calculateTriangleArea(sideA, sideB, sideC);
console.log(area)


function calculateAverage(subject1, subject2, subject3) {
    var sum = subject1 + subject2 + subject3;
    var average = sum / 3;
    return average;
}

function calculatePercentage(subject1, subject2, subject3) {
    var totalMarks = 300
    var obtainedMarks = subject1 + subject2 + subject3;
    var percentage = (obtainedMarks / totalMarks) * 100;
    return percentage.toFixed(2)
}

function mainFunction(subject1, subject2, subject3) {
    var average = calculateAverage(subject1, subject2, subject3);
    var percentage = calculatePercentage(subject1, subject2, subject3);

    document.write("Average: " + average);
    document.write("Percentage: " + percentage + "%");
}
mainFunction(75, 80, 85);


function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}
var str = "Hello, World!";
var char = "e";

var index = customIndexOf(str, char);
document.write(index)


function deleteVowels(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let result = '';

    for (let i = 0; i < sentence.length; i++) {
        if (!vowels.includes(sentence[i])) {
            result += sentence[i];
        }
    }

    return result;
}

const sentence = "Hello World!";
const resultts = deleteVowels(sentence);
console.log(resultts)

function countSuccessiveVowels(text) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < text.length - 1; i++) {
      const currentChar = text[i].toLowerCase();
      const nextChar = text[i + 1].toLowerCase();

      if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
        switch (currentChar + nextChar) {
  case 'ea':
  case 'ei':
  case 'ia':
  case 'ie':
  case 'io':
  case 'iu':
  case 'oa':
  case 'oi':
  case 'ou':
  case 'ua':
  case 'ue':
  case 'ui':
    count++;
    break;
  default:
    break;
        }
      }
    }

    return count;
  }

  const text = "Pleases read this application and give me gratuity";
  const occurrenceCount = countSuccessiveVowels(text);
  console.log(occurrenceCount)