// Sir Method
const inp = document.querySelector('input')
const btn = document.querySelector('#add')
const todo = document.querySelector('.bottom')
// Adding task to .bottom class
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


// // By using class list
// const bottom = document.querySelector('.bottom')
// const liDiv = document.createElement('div')
// const btnsDiv = document.createElement('div')
// const h3 = document.createElement('h3')
// const edit = document.createElement('button')
// const del = document.createElement('button')
// edit.classList.add('btn', 'edit-btn')
// del.classList.add('btn', 'delete-btn')
// // edit.setAttribute('id','edit')
// // del.setAttribute('id','delete')
// btnsDiv.classList.add('btns')
// liDiv.classList.add('li')
// bottom.append(liDiv)
// liDiv.append(h3,btnsDiv)
// btnsDiv.append(edit,del)
// edit.textContent = 'edit'
// del.textContent = 'delete'

// // applying dom 
// const add = document.querySelector('#add')
// const inp = document.querySelector('input')
// const li = document.querySelector('.li')
// console.log(li);
// add.addEventListener('click', () => {
//      const value = inp.value.trim(); // Get the input value
//     if (value === '') return;       // Don't add empty tasks
//     // 1. Create ALL elements FRESH for this specific task
//     const liDiv = document.createElement('div');
//     const btnsDiv = document.createElement('div');
//     const h3 = document.createElement('h3');
//     const edit = document.createElement('button');
//     const del = document.createElement('button');
//     // 2. Set up the styles and attributes
//     edit.classList.add('btn');
//     del.classList.add('btn');
//     // Changing these to classes is safer since IDs must be unique per page
//     edit.classList.add('edit-btn'); 
//     del.classList.add('delete-btn');
//     btnsDiv.classList.add('btns');
//     liDiv.classList.add('li');
//     // 3. Assign the text contents safely
//     h3.textContent = value; // Puts what the user typed into the h3
//     edit.textContent = 'edit';
//     del.textContent = 'delete';
//     // 4. Assemble the pieces together
//     btnsDiv.append(edit, del);
//     liDiv.append(h3, btnsDiv);
//     // 5. Append the completed row into the bottom container
//     bottom.append(liDiv);
//     // 6. Clear out the input field
//     inp.value = '';
// })