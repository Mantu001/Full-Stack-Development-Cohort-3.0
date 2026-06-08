// Create constructor (constructor concept) (old method)
function CreateBooks(kitabName,lekhakName){
    this.bookName = kitabName  // here this is the identification for the consturctor
    this.authorName = lekhakName
    this.pages = 200
    this.getFrontPage = function () {
        console.log('Book Name :', this.bookName);
        console.log('Author Name :', this.authorName);
        console.log('Pages :', this.pages);
    }
}
let book1 = new CreateBooks('Do Epic Shit', 'Ankur Warikoo')  // here this is called instance
let book2 = new CreateBooks('Atomic Habbits', 'James Clear')
let book3 = new CreateBooks("Build Don't Talk", 'Raj Shami')
console.log(book1);
console.log(book2);
console.log(book3);
book1.getFrontPage()
book2.getFrontPage()
book3.getFrontPage()

// Example 2 for constructor (prototypical inheritance) (old method)
function MakeStudents(fname,lname,contact,isVerified){
    this.fname = fname
    this.lname = lname
    this.contact = contact
    this.isVerified = isVerified
    this.showProfile = function(){
        if (this.isVerified){
            console.log(`Name: ${this.fname} ${this.lname}, Contact: ${this.contact}`);
        }else{
            console.log('user not verified');
        }
    }
}
const s1 = new MakeStudents('Rahul', 'Rathore', 423432, true)
const s2 = new MakeStudents('Kamal', 'kapoor', 353445, false)
const s3 = new MakeStudents('Nitikesh', 'Srivastava', 565465, true)
const s4 = new MakeStudents('Pranjana', 'Divedi', 5737456, false)
s3.showProfile()

// Example 2 by using class and constructor same as previous but modern es6 version is recommending this process
// this is nothing but the modern way to represent the previous example (constructor) (classical inheritance)
class MakeStudent{
    constructor(fname, lname, contact, isVerified){
        this.fname = fname
        this.lname = lname
        this.contact = contact
        this.isVerified = isVerified
        this.showProfile = function(){
        if (this.isVerified){
            console.log(`Name: ${this.fname} ${this.lname}, Contact: ${this.contact}`);
        }else{
            console.log('user not verified');
            }
        }
    }
}
s1.showProfile()

// prototype
const s = 'Mantu'
console.log(s.__proto__);
console.log(s.__proto__.__proto__ == Object.prototype) ;
console.log(s.__proto__.__proto__.__proto__) ;

// show profile ko constructor ka prototype me shamil karna
class MakeStudent2{
    constructor(fname, lname, contact, isVerified){
        this.fname = fname
        this.lname = lname
        this.contact = contact
        this.isVerified = isVerified
    }
}
showProfile2 = function(){
    if (this.isVerified){
        console.log(`Name: ${this.fname} ${this.lname}, Contact: ${this.contact}`);
    }else{
        console.log('user not verified');
        }
    }
const s11 = new MakeStudent2('Rahul', 'Rathore', 423432, true)
const s22 = new MakeStudent2('Kamal', 'kapoor', 353445, false)
const s33 = new MakeStudent2('Nitikesh', 'Srivastava', 565465, true)
const s44 = new MakeStudent2('Pranjana', 'Divedi', 5737456, false) 
MakeStudent2.prototype.sp2 = showProfile2  // constructorName.prototype.assignVariaable = jisko call karna hai
// MakeStudent2.__proto__ = showProfile2
// console.log(showProfile2.__proto__);
s11.sp2()
s22.sp2()
s33.sp2()
// console.log(MakeStudent2);

// prototype sharing to other object/constructor
const papa = {
    fname: 'Kuldeep',
    lname: 'Gupta',
    shop: 'Saree collection'
}
const beta = {
    fname: 'Asmita',
    lname: 'Gupta',
}
// Object.setPrototypeOf(beta,papa) // anothor new method to inherit property 
// beta.prototype = papa.shop
beta.__proto__ = papa  // this is also working
// console.log(beta.shop);
console.log(beta.shop);

// constructor property inherit from parent
class user {
    constructor(fname, lname, contact) {
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
    }
    greet(){
        console.log(`Hello ${this.fname} ${this.lname}, Welcome to the world of JavaScript`);
    }
}
class admin extends user{
    constructor(fname, lname, contact){
        super(fname, lname, contact) // ye user ke 3 line wle kaam ko ek line me kar diya hai 
        this.adminAccess = true
        this.editAccess = true
    }
    addCourse(){
        console.log('Course Added');
    }
    removeCourse(){
        console.log('All course Removed');
    }
}
const u1 = new user('Mantu', 'Kumar', 984223)
const a1 = new admin('Sarthak', 'Sharma', 989898)
u1.greet()
a1.greet()
a1.addCourse()
console.log(a1.adminAccess);
console.log(a1.__proto__);


// // Revise previous class
// const hero = {
//     fname: 'Mantu',
//     lname: 'Tiwari',
//     user: function () {
//         console.log('this is hero.user (Method)');
//         const sayMyName = () => {
//             console.log(this.fname, this.lname);
//         }
//         sayMyName()
//     }
// }
// hero.user()
// // Another example
// let place = {
//     placeName: 'Office',
//     behaviour: 'Professional',
//     sayHello: function (){ // function 1
//         const insidePlace = {
//             placeName: 'Meeting Room',
//             behaviour: 'Roasting',
//             frontOfFriends: function(){ // function 2 (normal)
//                 console.log(this.placeName,this.behaviour);
//             },
//             frontOfClient: () => { // function 2.1 (arrow)
//                 console.log(this.placeName, this.behaviour);
//             },
//         }
//         // insidePlace.frontOfFriends()
//         insidePlace.frontOfClient()
//     }
// }
// place.sayHello()
