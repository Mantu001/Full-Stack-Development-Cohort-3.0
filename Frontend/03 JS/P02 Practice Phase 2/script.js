




// Concept Revision Practice
function test1(user){
    console.log('Function Decleration', user);
}
test1("Aman")
var test2 = function (user){
    console.log('Function Expression', user);
}
test2('Rekha')
var test3 = (user) => {
    console.log('Arrow Function', user);
}
test3('Cathy')
var multiply = (a,b) =>{
    return a*b
}
console.log(multiply(3,6));
// callback function
function main(cb) {
    console.log('this is the main function');
    cb()
}
function side() {
    console.log('This is the side function');
}
main(side)
// using same as arrow funtion 
var main = (callback)=>{
    console.log('this is arrow main function');
    callback()
}
var side = ()=>{
    console.log('This is arrow side function');
}
main(side)
// another example by using arrow funciton 
var processUser = (name = 'Mantu', callback)=>{
    console.log('Processing user', name);
    callback(name)
}
var greetUser = (name)=>{
    console.log('Good Morning',name);
}
processUser('Anjali', greetUser)
processUser( undefined, greetUser)
// setTimeout
setTimeout(()=>{
    console.log('This is set timeout funciton');
},2000)
