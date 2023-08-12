//console.log('append.js')
const placeList = document.getElementById('place-list')
//console.log(placeList);
const li = document.createElement('li')
li.innerText ='bandarban';
placeList.appendChild(li)

const mainContainer = document.getElementById('main-container')
//console.log(mainContainer);


const section = document.createElement('section')
const h1 = document.createElement('h1');
h1.innerText = 'my fruits list';
section.appendChild(h1);
const ul = document.createElement('ul')

const li1 = document.createElement('li')
li1.innerText= 'apple'
ul.appendChild(li1)

const li2 = document.createElement('li')
li2.innerText = 'mango'
ul.appendChild(li2)

const li3 = document.createElement('li')
li3.innerText= 'orange'
ul.appendChild(li3)

section.appendChild(ul)





mainContainer.appendChild(section)