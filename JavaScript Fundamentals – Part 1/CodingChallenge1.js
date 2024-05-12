/** 
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

*/

const weightMark1 = 78;
const weightMark2 = 95;

const weightJohn1 = 92;
const weightJohn2 = 85;

const heightMark1 = 1.69;
const heightMark2 = 1.88;

const heightJohn1 = 1.96;
const heightJohn2 = 1.76;


function calculatedBMI(weight, height){
    return weight/(height**2);
}

const markBMI1 = calculatedBMI(weightMark1, heightMark1);
const johnBMI1 = calculatedBMI(weightJohn1, heightJohn1);


const markBMI2 = calculatedBMI(weightMark2, heightMark2);
const johnBMI2 = calculatedBMI(weightJohn2, heightJohn2);

const markHigherBMI1 = markBMI1 > johnBMI1;
const markHigherBMI2 = markBMI2 > johnBMI2;




console.log("Data 1:");
console.log("Mark's BMI:", markBMI1);
console.log("John's BMI:", johnBMI1);
console.log("Is Mark's BMI higher than John's in Data 1?", markHigherBMI1);

console.log("\nData 2:");
console.log("Mark's BMI:", markBMI2);
console.log("John's BMI:", johnBMI2);
console.log("Is Mark's BMI higher than John's in Data 2?", markHigherBMI2);
