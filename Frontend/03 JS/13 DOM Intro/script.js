// Selection of Element
const h2 = document.querySelector('h2')
h2.textContent = 'used query selector'
console.log(h2); // this will print sometime an object and sometime an element
console.dir(h2) // this will always print the element not objenct
const all = document.querySelectorAll('h2')
const tag = document.getElementsByTagName('h2')
console.log(all); // node list (ye reload pe chalta hai)
console.log(tag); // html collection (ye live chalta hai)

// changing of element
/* 
    .innerHTML (pura content hata kar change kar dega)
    .innerText (ye bhi sab change kar dega)
    .textContent
*/
