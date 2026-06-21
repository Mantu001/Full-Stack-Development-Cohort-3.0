// Selecting create Button in the homepage
const body = document.body
const createBtn = document.querySelector('.create')
const main = document.querySelector('main')
const formClass = document.querySelector('.form')
const closeBtn = document.querySelector('.ri-close-circle-fill')
createBtn.addEventListener('click', () => {
    formClass.style.display = 'flex'
})
closeBtn.addEventListener('click',() => {
    formClass.style.display = 'none'
})
