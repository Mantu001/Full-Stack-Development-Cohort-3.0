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