const body = document.body
const main = document.querySelector('main')
const createBtn = document.querySelector('.create-btn')
const formClass = document.querySelector('.form')
const close = document.querySelector('.ri-close-circle-line')
const darkMode = document.querySelector('.dark-mode')
const taskContainer = document.querySelector('.task-container')
const nav = document.querySelector('nav')
const form = document.querySelector('form')

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

const taskArr = []
form.addEventListener('submit',(e) => {
    e.preventDefault()
    let task = e.target[0].value
    let description = e.target[1].value
    let value = e.target[2].value
    if (
        task.trim() === '' ||
        description.trim() === '' ||
        value === 'All Categories' 
    ){
        alert('Kindly Fill all details')
        return
    }
    let obj = {
        task,
        description,
        value
    }
    taskArr.push(obj)
    console.log(taskArr);
    // console.log(obj);
    form.reset()
})
