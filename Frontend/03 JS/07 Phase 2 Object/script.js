// console.log('Creating Object');
var obj = {
    model: 'Iphone 17 pro max',
    price: 100000,
    color: 'White',
    isGood: true
}
console.log(obj)

// console.log('CRUD OPERATIONS');
var user = {
    name: 'Mantu Tiwari',
    age: 22,
    city: 'Patna',
}
user.batch = 'Cohort 3.0'  // Create
console.log('Create',user);  // Read
user.city = 'Las Vegas'  // Update
console.log('Update',user);  // Read
delete user.age  // Delete
console.log('Delete',user);  // Read

// console.log("Accessing key and value in array");
console.log(Object.keys(obj));
console.log(Object.values(user));

// // taking input from prompt 
// var item = prompt('Enter your item')
// var mrp = Number(prompt('Enter the MRP'))
// var inStock = prompt('is this is stock')
// var shop = {item, mrp, inStock}
// console.log(shop);

// Nested object concept
var player = {
    name: 'Virat Kohli',
    age: 36,
    team: 'India',
    isMarried: true,
    skills: ['Bating', 'Dancing', 'Feilding'],
    win: ()=>{
        console.log('Today RCB going to win the IPL trophy');
    },
    spouse: {
        name: 'Anushka Sharma',
        profession: 'Acting',
        age: 30,
        movie: {
            name: 'PK',
            release: 2020,
            actor: 'Amir Khan'
        }
    }
}
console.log(player.age);
console.log(player.spouse.name);
console.log(player.spouse.movie);
console.log(player.spouse.movie.name);
player.win()

// object ke andar ternary function call ho sakta hai with example 
var greet = () =>{
    console.log('hello');
}
var bye = () =>{
    console.log('bye bye');
}
var swagat = {
    name: 'Virat',
    welcome: 10>5?greet:bye
}
console.log(swagat);
// example 2
var arr = [10,20,49,]
console.log(arr);
arr[2] = 30
console.log(arr);

var objarr = {
    a: 'Hello',
    b: 34,
    c: true,
    d: [10,20,30,40],
}
console.log(objarr);
objarr.a = 'bye bye'
console.log(objarr);
objarr['b'] = 88
console.log(objarr);
objarr['e'] = ()=>{
    console.log('I am inserting the function');
}
console.log(objarr);
objarr.e()

// Object.freeze() concnept
var frze = {
    name: 'Mantu',
    roll: 31
}
console.log('Freeze concept');
console.log(frze);
Object.freeze(frze)
frze.name = 'rohan' // no modify 
frze.city = 'Patna' // no add
console.log(frze);
// Object.seal() concept
console.log('Seal Concept');
var sel = {
    name: 'Mantu',
    roll: 31
}
console.log(sel);
Object.seal(sel)
sel.name = 'rohan' // yes modify 
sel.city = 'Patna' // no add
console.log(sel);

// Destructuring concept (rest operator) in array
var ary = [10,20,30,40,50]
var [a,b,...c] = ary //left side of ... is called rest operator while right side is spread operator
console.log(c);

// Destructuring concept (rest operator) in object
var o = {
    name: "testing",
    time: 1,
    cons: true
}
var {name,...b} = o // it take the acutal key value not random value name like in array
console.log(b);

// spread operator in array
var x = [10,20,30,40]
var newArr = [...x] // instead of [x[0], x[1], x[2], x[3]
newArr.push(33)
console.log(newArr);
console.log(x);

// spread operator in object (this is a shallow copy) because it didn't work with the nested obj and array
var objx = {
    name: 'Hello',
    age: 44,
    isTrue: true,
    num: 83837,
    arr: [10,20,30,40,50]
}
console.log(objx);
var newobj = {...objx}
newobj.name = 'Testing'
newobj.arr[1] = 99  // this can apply in both not only copy due to shallow copy
console.log(newobj);
console.log(objx);

// Deep copy of any object
console.log('DEEP COPY CREATING');
var profile = {
    name: 'Mantu Tiwari',
    id: 18,
    college: {
        name: 'GCET',
        roll: 220031,
        branch: 'AIML'
    }
}
console.log(profile);
var shallowUpdate = {...profile}
// shallowUpdate.college.roll = 1231232
console.log(shallowUpdate);
console.log(profile);   // it will also change after using spread because spread is making shallow copy not deep
var copyUpdate = JSON.stringify(profile)  // conbert whole obj to string
deepUpdate = JSON.parse(copyUpdate)       // reconver to original
console.log(copyUpdate);
console.log(deepUpdate);
console.log(profile);
deepUpdate.college.name = 'LNCT'
console.log(deepUpdate); // now only this copy can change 
console.log(profile);  // original will not change
