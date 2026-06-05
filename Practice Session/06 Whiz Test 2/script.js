// ********************** HIgest Scoring Student 
/* You are given an array of student objects. Each student has a name and marks.
Return the name of the student who has the highest marks.
 If multiple students have the same highest marks, return the first one. */
const student = [
    {name: 'aman', marks: 85},
    {name: 'priya', marks: 92},
    {name: 'raj', marks: 78},
]
const highest = (stu) => {
    let maxi = stu[0]
    for (let i=1; i<stu.length; i++){
        if(stu[i].marks > maxi.marks){
            maxi = stu[i]
        }
    }
    return maxi.name
}
console.log('The name of student which has higest marks is ', highest(student));


// ************************* Count word frequency
/* Given a string text, return an object containing the frequency of each word.
Words are case-insensitive.*/
const str = 'JavaScript language is fun scripting Language'
const freq = {}
const word = str.toLowerCase().split(" ")
for (let w of word){
    if(freq[w] === undefined){  //  freq[word] = (freq[word] || 0)+1
        freq[w] = 1
    }else{
        freq[w] = freq[w] +1
    }
}
console.log(freq);


// ************************************* Find Missing Product
/* You are given two arrays.
products contains all product IDs.
sold contains IDs of sold products.
Return an array of product IDs that were never sold. */
const products = [101, 102, 103, 104];
const sold = [102, 104];
const notSold = []
for (let p of products){
    if(!sold.includes(p)){
        notSold.push(p)
    }
}
console.log('Item that are never sold',notSold);


// ******************************* Department Salary Report
/* Given an array of employees, calculate the total salary for each department.
Return an object where:
key = department name
value = total salary */
// pasted from gpt doubt in this
const employees = [
    { name: "A", department: "IT", salary: 1000 },
    { name: "B", department: "IT", salary: 2000 },
    { name: "C", department: "HR", salary: 3000 },
    { name: "D", department: "HR", salary: 4000 }
];
    const report = {};
    for (const employee of employees) {
        const { department, salary } = employee;
        report[department] = (report[department] || 0) + salary;
    }
    console.log(report);


// **************** Most frequent element
/* Given an integer array nums, return the element that appears most frequently.
If multiple elements have the same frequency, return the smallest element among them.*/
// Doubt (chat gpt sol)
const num = [5,1,2,2,3,3];
const fq = {};
for (let n of num) {
    fq[n] = (fq[n] || 0) + 1;
}
let maxFreq = 0;
let ans = null;
for (let key in fq) {
    if (fq[key] > maxFreq) {
        maxFreq = fq[key];
        ans = Number(key);
    }
}
console.log(ans);