const body = document.body
const main = document.querySelector('main')
const createBtn = document.querySelector('.create-btn')
const formClass = document.querySelector('.form')
const close = document.querySelector('.ri-close-circle-line')
const darkMode = document.querySelector('.dark-mode')
const taskContainer = document.querySelector('.task-container')
const nav = document.querySelector('nav')
const form = document.querySelector('form')
const container = document.querySelector('.bottom')
const taskArr = []

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

let ui = () => {
    container.innerHTML = ''
    taskArr.forEach((e,i) => {
        container.innerHTML += `<div class="task">
            <div class="task-text">
              <h3>Task: ${e.task}</h3>
              <p>Category: ${e.category}</p>
            </div>
            <div class="task-btn">
              <button class="edit">Edit</button>
              <button class="complete">Complete</button>
              <button class="delete">Delete</button>
            </div>
          </div>`
    })
}


form.addEventListener('submit',(e) => {
    e.preventDefault()
    let task = e.target[0].value
    let description = e.target[1].value
    let category = e.target[2].value
    if (
        task.trim() === '' ||
        description.trim() === '' ||
        category === 'All Categories' 
    ){
        alert('Kindly Fill all details')
        return
    }
    let obj = {
        task,
        description,
        category
    }
    taskArr.push(obj)
    ui()
    console.log(taskArr);
    form.reset()
    formClass.style.display = 'none'
})
