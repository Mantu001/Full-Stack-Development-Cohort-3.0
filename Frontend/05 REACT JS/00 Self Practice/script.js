console.log(window);
console.log(React);

const body = document.body
const main = document.querySelector('main')
const div = document.querySelector('#root')
const h1 = document.createElement('h1')
h1.classList.add('real')
main.append(h1)
h1.textContent = 'hello i am dynamic but real dom'

const virtualH1 = React.createElement('h1',{class:'virtual'}, 'I am also dynamic but virtual DOM')
const root = ReactDOM.createRoot(div)
root.render(virtualH1)