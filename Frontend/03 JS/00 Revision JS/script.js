// ************************** Sheryians part 3 advance js from youtube


/*                  LEXICAL SCOPE
    1. lexical scope compile time me chalta hai 
    2. ye physically kaha avalabe hai ispe depend karta hai
*/

console.log('***************** Example of lexical scope');
let a = 10
function abcd(){
    console.log(a);
}
function efgh() {
    let a = 12
    abcd()
}
efgh() // if js is dyanmic scoped then it print 12 instead of 10


/*                  CLOSURE                      
    1. closure ek concept hai jisme ek function apne parent ke function ke variable ko return kare
    2. in normal case if fucntion destroy its variable also destroy but in closure when the js identify that it is 
       a closure then it backlink/store its variable in [[environment]] which is used later
    3. use in private variabe and stop global pollution 
    4. isme pahle baar chalane par funciton return hoga usko pahle sore karo then uss variable ko chlao
    5. function ke andar function, andar wla funciton bahar wla function ka use karega (in short)
*/

console.log('******************* Example 1 of closure');
function main() {
    let a = 11
    return function () {
        console.log(a);
    }
}
let fnc = main()
fnc()

console.log('******************* Example 2 (provate counter) of closure');
function count() {
    let c = 0
    return function (){
        c++
        console.log(c);
    }
}
let result1 = count()
result1()
result1()
result1()
let result2 = count()
result2()
result2()
result2()

console.log('******************* Example 3 (encapsulation) of closure');
function clickLimiter() {
    let click = 0
    return function () {
        if(click<5){
            click++;
            console.log(`clicked : ${click} times`);
        }
        else{
            console.error('Limit exceed, try after sometime');
        }
    }
}
let fn = clickLimiter()
fn() 
fn()
fn()
fn()
fn()
fn()


/* 
    OOPS IN JAVASCRIPT (constructor)
*/

console.log('***************** Classes');
class CreatePencil{
    constructor(name, price, color, company){
        this.name = name;
        this.price = price;
        this.color = color;
        this.company = company;
        this.write = function (text) {
            let h1 = document.createElement("h1")
            h1.textContent = text
            h1.style.color = color
            document.body.append(h1)
        }
    }
}
let p1 = new CreatePencil('H1', 5, 'red', 'Apsara')
let p2 = new CreatePencil('H2', 8, 'black', 'Natraj')
console.log(p1);
console.log(p2);


/*                  CALLBACK
    1. waisa function jisko ham kisi function ke argument me pass karte hai uss function ko callback function kehate hai
*/

console.log('**************** Callback');
function callback(str) {
    console.log('this is callback', str);
    setTimeout(() => {
        console.log('set timeout inside callback function');
    },2000)
}
function mukhya(user,cb){
    cb(user)
}
mukhya('mantu',callback)

/*                  PROMISE
    1. promise is either resolve or reject 
    2. if resolved then run
    3, if rejected catch run
*/

let prom = new Promise(function (resolve,reject) {
    setTimeout(() => {
        let rn = Math.floor(Math.random()*10)
        console.log(rn);
        if(rn > 5 ){
            resolve()
        }else{
            reject()
        }
    }, 1000);
}).then(function(){
    console.log('Success');
}).catch(function () {
    console.log('failed');
})

async function dataLao (){
    let response = await fetch('https://randomuser.me/api/')
    let finalData = await response.json()
    console.log(finalData);
}
dataLao()