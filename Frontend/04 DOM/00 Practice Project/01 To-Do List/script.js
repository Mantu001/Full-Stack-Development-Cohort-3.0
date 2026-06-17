const inp = document.querySelector('input')
const btn = document.querySelector('#add')
const todo = document.querySelector('.bottom')
btn.addEventListener('click', () => {
    const value = inp.value
    if(value.trim() === '') return ;
    todo.innerHTML += `<div class="li">
                <h3>${value}</h3>
                <div class="btns">
                    <button class="btn" id="edit">Edit</button>
                    <button class="btn" id="delete">Delete</button>
                </div>
            </div>`
            inp.value = ''
})