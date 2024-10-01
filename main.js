let btnRoll = document.querySelector('#roll');
let one = document.querySelector('#numOne');
let two = document.querySelector('#numTwo');
let three = document.querySelector('#numThree');
let random1;
let random2;
let random3;
let min = 50;
let max = 100;
// btn 
btnRoll.addEventListener('click', function(){
      random1 = Math.round(Math.random() * max ) + min;
      one.textContent = random1;
 
      random2 = Math.round(Math.random() * max ) + min;
      two.textContent = random2

      random3 = Math.round(Math.random() * max ) + min;
      three.textContent = random3;
})