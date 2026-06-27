import React from "react";

console.log(React);
const body = document.body
const main = document.querySelector('main')
const root = document.querySelector('.root')

// Real Dom
const div = document.createElement('div')
div.classList.add('box')
div.textContent = 'this is real dom created dynamically'
main.append(div)

// Virtual DOM
const reactDiv = React.createElement('div', {class: 'box'}, 'This is React Dom created dynamically')
const doomRoot = ReactDOM.createRoot(root)
doomRoot.render(reactDiv)



