
var OddSum = 0;
for (i=1; i<100; i=i+2) {
    OddSum = OddSum + i;
}

var EvenSum = 0;
for (i=2; i<=100; i=i+2) {
    EvenSum = EvenSum + i;
}

var Sum = 0;
for (i=1; i<=100; i++) {
    Sum = Sum + i;
}

var Sums = [OddSum, EvenSum, Sum];
console.log ("1 -sum of odd numbers from 0 to 100: " + Sums[0]);
console.log ("2 -sum of even numbers from 0 to 100: " + Sums[1]);
console.log ("3 -sum of all numbers from 0 to 100: " + Sums[2]);

