const buttons = document.querySelectorAll('button');
const h1 = document.querySelectorAll('h1');
// btn.style.backgroundColor = 'blue';

function makeRandColor(){
    const r = Math.floor(Math.random()*255)+1;
    const g = Math.floor(Math.random()*255)+1;
    const b = Math.floor(Math.random()*255)+1;
    
    return `rgb(${r}, ${g}, ${b})`;
}


for(let button of buttons){
    button.addEventListener('click', colorize);

}

for(let head of h1){
    head.addEventListener('click', colorize);
}

function colorize(){
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}

