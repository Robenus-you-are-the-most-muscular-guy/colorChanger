const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red', 'green', 'orange', 'blue', 'purple']

document.body.style.backgroundColor = 'gray'
button.addEventListener('click', changerBG)

function changerBG() {
  const colorIndex = parseInt(Math.random() * colors.length)
  document.body.style.backgroundColor = colors[colorIndex]
}