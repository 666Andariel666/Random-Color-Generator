'use strict';
// let boxEvents = document.querySelector('.box').addEventListener('pointerup', function () {
//     box.classList.toggle('active')
// })

// const arr = [1, 2, 3]
// const nums = [4, 5, 6, ...arr]
// console.log(nums);

// const car = {
//     model: 'Ford',
//     year: 2021,
//     color: 'black'
// }
// console.log(Object.entries(car));
// console.log(Object.values(car));
// console.log(Object.keys(car));
alert("Just Click On the Screen")
let box = document.querySelector('body')
let colorName = document.querySelector('.color-name');
function getRandomColor(){
    let letters = "0123456789ABCDEF".split('');
    let color = "#";
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)]; 
    }
    return color; 
    
}
window.addEventListener('pointerdown', function () {
    box.style.background = getRandomColor();
    colorName.innerHTML = getRandomColor();
    console.log(getRandomColor());
})
