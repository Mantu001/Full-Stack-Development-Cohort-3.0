const btn = document.querySelector('button')
const body = document.body
btn.addEventListener('dblclick', (e)=> {
    console.log('event performed');
    console.log('deatil of events', e);
})

// // store keyboard keydown value in an array
// const arr = []
// body.addEventListener('keydown', (e) => {
//     console.log('key press', e.key);
//     arr.push(e.key)
//     console.log(arr);
// })

// // Event Propogation == Event Traversal
// const div = document.querySelector('div')
// const main = document.querySelector('main')
// btn.addEventListener('click', () => {
//     console.log('button clicked');
// },{capture:true}) // isko enable karne se event capturing enable ho jata hai
// body.addEventListener('click', () => {
//     console.log('body clicked');
// },{capture:true})
// div.addEventListener('click', () => {
//     console.log('div clicked');
// },{capture:true})
// main.addEventListener('click', () => {
//     console.log('main clicked');
// },{capture:true})

// // Form concept (imlportant comments)
// const form = document.querySelector('form')
// const formBtn = document.querySelector('.btn')
// const user = document.querySelector('#name')
// const email = document.querySelector('#email')
// const container = document.querySelector('.container')
// form.addEventListener('submit', (e) => {
//     e.preventDefault()  // prior step stop your form to reload
//     let naam = user.value
//     let gmail = email.value
//     console.log(naam, gmail);
//     // console.log(e.target[0].value); // another process to get the value but it is not recommended
//     // console.log(e.target[1].value);   
//     form.reset()
//     // user.value = '' // another form but not recommended
//     // email.value = ''
// })

// //  Fresh Form concept 
// const form = document.querySelector('form')
// const formBtn = document.querySelector('.btn')
// const user = document.querySelector('#name')
// const email = document.querySelector('#email')
// const container = document.querySelector('.container')
// const url = document.querySelector('#url')
// let userData = [
//   {
//     "id": 1,
//     "name": "John Doe",
//     "email": "john.doe@example.com",
//     "profilePic": "https://randomuser.me/api/portraits/men/1.jpg"
//   },
//   {
//     "id": 2,
//     "name": "Emma Wilson",
//     "email": "emma.wilson@example.com",
//     "profilePic": "https://randomuser.me/api/portraits/women/2.jpg"
//   },
//   {
//     "id": 3,
//     "name": "Michael Brown",
//     "email": "michael.brown@example.com",
//     "profilePic": "https://randomuser.me/api/portraits/men/3.jpg"
//   },
//   {
//     "id": 4,
//     "name": "Sophia Davis",
//     "email": "sophia.davis@example.com",
//     "profilePic": "https://randomuser.me/api/portraits/women/4.jpg"
//   },
//   {
//     "id": 5,
//     "name": "James Miller",
//     "email": "james.miller@example.com",
//     "profilePic": "https://randomuser.me/api/portraits/men/5.jpg"
//   },
//   {
//     "id": 6,
//     "name": "Olivia Taylor",
//     "email": "olivia.taylor@example.com",
//     "profilePic": "https://randomuser.me/api/portraits/women/6.jpg"
//   }

// ]
// userData.forEach((e)=> {
//     container.innerHTML += `<div class="card">
//                                 <div class="pic">
//                                     <img src=${e.profilePic} alt="">
//                                 </div>
//                                 <div class="text">
//                                     <h3>Name- ${e.name}</h3>
//                                     <p>Email ${e.email}</p>
//                                 </div>
//                             </div>`
// })
// form.addEventListener('submit', (e) => {
//     e.preventDefault() 
//     let naam = user.value
//     let gmail = email.value
//     let urlImg = url.value
//     container.innerHTML += `<div class="card">
//                                 <div class="pic">
//                                     <img src=${urlImg} alt="blank">
//                                 </div>
//                                 <div class="text">
//                                     <h3>Name - ${naam}</h3>
//                                     <p>Email - ${gmail}</p>
//                                 </div>
//                             </div>`
//     form.reset()
// })

// the previous question is not optimised because here we use innerHTML twice so it is not the DRY approach
// optimise method of previous quesion
const form = document.querySelector('form')
const formBtn = document.querySelector('.btn')
const user = document.querySelector('#name')
const email = document.querySelector('#email')
const container = document.querySelector('.container')
const url = document.querySelector('#url')
let userData = [
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "profilePic": "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    "id": 2,
    "name": "Emma Wilson",
    "email": "emma.wilson@example.com",
    "profilePic": "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    "id": 3,
    "name": "Michael Brown",
    "email": "michael.brown@example.com",
    "profilePic": "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    "id": 4,
    "name": "Sophia Davis",
    "email": "sophia.davis@example.com",
    "profilePic": "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    "id": 5,
    "name": "James Miller",
    "email": "james.miller@example.com",
    "profilePic": "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    "id": 6,
    "name": "Olivia Taylor",
    "email": "olivia.taylor@example.com",
    "profilePic": "https://randomuser.me/api/portraits/women/6.jpg"
  }

]
const ul = () => {
    container.innerHTML = ''
    userData.forEach((e,index)=> {
    container.innerHTML += `<div class="card">
                                <div class="pic">
                                    <img src=${e.profilePic} alt="">
                                </div>
                                <div class="text">
                                    <h3>Name- ${e.name}</h3>
                                    <p>Email ${e.email}</p>
                                </div>
                                <div class="action">
                                    <button class="edit">Edit</button>
                                    <button onClick="deleteCard(${index})" class="delete">Delete</button>
                                </div>
                            </div>`
                            })
                        }
ul()
form.addEventListener('submit', (e,index) => {
    e.preventDefault() 
    let naam = user.value
    let gmail = email.value
    let urlImg = url.value
    userData.push({
        name: naam,
        email: gmail,
        profilePic: urlImg
    });
    ul()
    console.log(userData);
    form.reset()
})
let deleteCard = (index) => {
    userData.splice(index,1)
    console.log(userData);
    ul()
}

