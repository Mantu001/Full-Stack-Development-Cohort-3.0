const body = document.body
const main = document.querySelector('main')
const createBtn = document.querySelector('.create-btn')
const formClass = document.querySelector('.form')
const close = document.querySelector('.ri-close-circle-line')
const darkMode = document.querySelector('.dark-mode')
const taskContainer = document.querySelector('.task-container')
const nav = document.querySelector('nav')

createBtn.addEventListener('click',() => {
    formClass.style.display = 'flex'
})

close.addEventListener('click', ()=> {
    formClass.style.display = 'none'
})

darkMode.addEventListener('click',() => {
    if (main.classList.toggle('dark')){
        taskContainer.style.backgroundColor = 'grey'
        nav.style.backgroundColor = 'grey'
        nav.style.color = 'white'
    }else{
        taskContainer.style.backgroundColor = 'white'
        nav.style.backgroundColor = '#BFDDF0'
        nav.style.color = '#003edb'
    }
})