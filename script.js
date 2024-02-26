// 1. Create an array named numbers and store 5 number values in it

let numbers = [1,2,3,4,5,10,15,20,27,29];

// 2. Calculate the sum of array items and print it to the console using console.log()

let sum = 0;
// for ( let i = 0; i < numbers.length; i++){
//     sum += numbers[i]
// }
// console.log(sum);

// 3. Calculate the average of array items and print it to the console using console.log()


for ( let i = 0; i < numbers.length; i++){
    sum += numbers[i] 
}
let average =sum / numbers.length
console.log(average);

// 4. Find the highest number in the array and print it to the console using console.log()

let highestNumber = numbers[0]

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > highestNumber) {
        highestNumber = numbers[i];
    }
}
console.log( highestNumber);

// 5. Find the lowest number in the array and print it to the console using console.log()

let lowestNumber = numbers[0]

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < lowestNumber) {
        lowestNumber = numbers[i];
    }
}
console.log( lowestNumber);

// 6. Find the even numbers in the array and print them to the console using console.log()

let evenNumbers = []

for ( i = 0 ; i < numbers.length; i++){
    if(numbers[i] % 2 === 0 ){
        evenNumbers.push(numbers[i])
    }
}

console.log(evenNumbers)

// 7. Find the odd numbers in the array and print them to the console using console.log()

let oddnumbers = []

for ( i = 0 ; i < numbers.length; i++){
    if(numbers[i] % 2 !== 0 ){
        oddnumbers.push(numbers[i])
    }
}

console.log(oddnumbers);

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()

let divisibleBy5 = []

for ( let i = 0 ; i< numbers.length; i++){
    if ( numbers[i] % 5 === 0 ){
        divisibleBy5.push(numbers[i])
    }
}
console.log(`Numbers divisible by 5 are ${divisibleBy5} `)

// 9. Log all the element of the array one by one

for (let number of numbers){
    console.log(number)
}

for (let i  = 0 ; i < numbers.length; i++) {
    console.log(numbers[i])
}

// 10. Find all the number in the array that is divisible by 3

let divsibleByThree = [];

for ( let i = 0 ; i < numbers.length; i++) {
    if(numbers[i] % 3 === 0 ) {
        divsibleByThree.push(numbers[i])
    }
}
console.log(divsibleByThree)
