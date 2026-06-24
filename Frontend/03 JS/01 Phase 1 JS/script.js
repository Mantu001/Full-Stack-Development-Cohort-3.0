console.log('this is normal text')
console.error("this is error");
console.warn("this is warning")
console.table(['Mantu', 'rahul', 'sarthak'])

var a = 20
var b = 5
console.log(a)
console.log(b)
var c = a+b;
console.log(a,b);

// here semicolon ; is not mandatory like in c++
console.log('the sum is ', (a+b));
console.log('the differ is ', (a-b));
console.log('the product is ', (a*b));
console.log('the divide is ', (a/b));
console.log('the remainder is ', (a%b));

// data types
var x = 23;
var y = 43.544;
var z = 'Mantu'
console.log(x,y,z)
console.log(typeof(x), typeof(y), typeof(z));


var r
console.log(r); // it show undefined
console.log(typeof(r));

var p = null
console.log(p);

var q = 34n // here n indicate the big int
console.log(typeof(q));

// var d = alert("hello")
// console.log(d); //undefined

// var e = confirm('are you ok?')
// console.log(e);

// var f = prompt('enter your name')
// console.log(f);
var g = 43
console.log(typeof(f)); // prompt always return string data types
console.log(g);
console.log(typeof(g));

// concatination
var h = 'Mantu'
var i = "Tiwari"
console.log(h+i);

// type conversion
let str = '45'
let num = Number(str)
console.log(typeof(str));
console.log(typeof(num));

// var let const concept
var aa = 12
let bb = 34
const cc = 45
console.log(aa);
console.log(bb);
console.log(cc);
aa = 10
bb = 30
console.log(aa); // var reassign ho gaya
console.log(bb); // let bhi reassign ho gaya
// cc = 40       // const error fek diya

// Symbol data types
const id = Symbol('this is symbol data types')
console.log(id);
console.log(typeof(id));

let s = 'Hello '
const update = s.toUpperCase()
console.log(update);
console.log(s);















