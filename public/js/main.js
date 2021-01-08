//scrollbar
let progress = document.getElementById('progressbar')
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight)*100
    progress.style.height = progressHeight + "%"
}

//button animé
let buttons = document.querySelectorAll('a');
buttons.forEach(btn => {
    btn.addEventListener('click',function(e) {

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
          ripples.remove()  
        },1000);
    })
})
//bg canevas
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#fff', '#FFF6E6', '#FFF6E5', ' #FFF6E1']

let mouseDown = true
// addEventListener('scroll', () => {
//   mouseDown = true
// })

addEventListener('scroll', () => {
  mouseDown = false
})
addEventListener('click', () => {
  mouseDown = true
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

// Objects
class Particle {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.shadowColor = this.color
    c.shadowBlur = 15
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  update() {
    this.draw()
  }
}

// Implementation
let particles
function init() {
  particles = []

  for (let i = 0; i < 1500; i++) {
    const canvasWidth = canvas.width + 1000
    const canvasHeight = canvas.height + 2000

    const x = Math.random() * canvasWidth - canvasWidth / 2
    const y = Math.random() * canvasHeight - canvasHeight / 2
    const radius = 2 * Math.random()

    const color = colors[Math.floor(Math.random() * colors.length)]
    particles.push(new Particle(x, y, radius, color))
  }
}

// Animation Loop
let radians = 0
let alpha = 1
function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = `rgba(10, 10, 10, ${alpha})`
  c.fillRect(0, 0, canvas.width, canvas.height)

  c.save()
  c.translate(canvas.width / 2, canvas.height / 2)
  c.rotate(radians)
  particles.forEach((particle) => {
    particle.update()
  })
  c.restore()

  radians += 0.005

  if (mouseDown && alpha >= 0.03) {
    alpha -= 0.01
  } else if (!mouseDown && alpha < 1) {
    alpha += 0.01
  }
}

init()
animate()

//fin bg canevas

//paralax

let moon = document.getElementById("moon")
let secondPlan = document.getElementById("secondPlan")
let firstPlan = document.getElementById("firstPlan")
let paralaxText = document.getElementById("paralaxtext")

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    // canvas.style.top = value * 0.5 + 'px'
    moon.style.left = -value * 0.5 + 'px'
    secondPlan.style.top = -value *0.05 + 'px'
    firstPlan.style.top = value*0.3 + 'px'
    paralaxtext.style.top = value * 1 + 'px'
})

const nom = " Bossaert"
// nom.style.fontFamily = "Gotham-XLight"
// nom.innerHTML = " BOSSAERT"
console.log(nom.innerHTML);
paralaxText.innerHTML += nom