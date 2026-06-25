const body = document.body
const main = document.querySelector('main')
const createBtn = document.querySelector('.create-btn')
const formClass = document.querySelector('.form')
const close = document.querySelector('.ri-close-circle-line')
const darkMode = document.querySelector('.ri-moon-fill')

createBtn.addEventListener('click',() => {
    formClass.style.display = 'flex'
})

close.addEventListener('click', ()=> {
    formClass.style.display = 'none'
})
darkMode.addEventListener('click',() => {
    console.log('click');
})