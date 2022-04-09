// function but(){
//     let block = document.querySelector('.babu');
//     block.classList.add('animateClass');
// }
// function yop(){
//     let block = document.querySelector('.babu');
//     block.classList.add('abubu')
// }

let nav = document.querySelector('.nav')
let bars = document.querySelector('.fa-bars')
let times = document.querySelector('.fa-times')

bars.addEventListener('click', function(){
    nav.style.display = 'block'
    // times.style.display = 'block'
    // bars.style.display = 'none'
})
times.addEventListener('click', function(){
    nav.style.display = 'none'
    // times.style.display = 'none'
    // bars.style.display = 'block'
})