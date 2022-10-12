const myEl = document.createElement('h1');
myEl.innerHTML = '<b>HEllO WOrlD!</b>';
myEl.style = 'text-transform: uppercase; color: teal;'
document.body.appendChild(myEl)

const style = document.createElement('style');
style.innerHTML = `div{
    padding: 10px;
    color:white;
    background: #333;
    border-radius:6px;}`
    document.head.appendChild(style)
 

    const textel = document.createElement('div');
    document.body.appendChild(textel)
const words = document.createElement('p');
const loremi = document.createElement('p');
loremi.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsa deserunt eveniet ab facilis tempora suscipit iste harum, itaque enim ad atque fugiat architecto earum eaque dolorum, culpa, consequuntur aliquam?`
words.innerHTML = `Things I like:`
words.style = `margin: auto; padding:10px; border-radius:8px; font-size:30px; text-decoration: underline; background: #444; width:200px;`
loremi.style = ` padding:10px; border: gray solid 1px; background: #f4f4f4; box-shadow: 5px 5px 20px ;`

    const myarr = ['ice-cream', 'pasta', 'the ocean','snowboard']

const list = document.createElement('ol');
    for(let j of myarr){
        list.innerHTML += `<li>${j}</li>`
    }
    // document.body.appendChild(list)
    textel.appendChild(words)
    textel.appendChild(list)
    document.body.appendChild(loremi)

    document.getElementsByClassName('li').item(1).setAttribute(style, 'color=red')
