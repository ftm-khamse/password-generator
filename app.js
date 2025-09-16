const btn = document.querySelector('.btn');
const answer = document.querySelector('.box');
let text = document.createElement('p');
answer.appendChild(text);
let lengthEl = document.querySelector('.length');
let upperBtn = document.getElementById('upper');
let lowBtn = document.getElementById('lower');
let numBtn = document.getElementById('number');
let symbolBtn = document.getElementById('symbol')
let lowerActive = false;
let upperActive = false;
let numberActive = false;
let symbolActive = false ;




function passGenerator(num){

    const lowLetters=['a','b','c','d','e','f','g','h',
        'i','j','k','l','m','n','o','p','q',
        'r','s','t','u','v','w','x','y','z'];

    const uppLetters = ['A','B','C','D','E','F','G','H',
        'I','J','K','L','M','N','O','P','Q',
        'R','S','T','U','V','W','X','Y','Z'];

    const symbols = ['[',']','{','}','<','>','?','!','$','#','&','.'];

    let answer =[];
   
    let length = num-1;

    while(length>=0){

    if(length>=0 && upperActive){
        let j = Math.floor(Math.random()*26);
        answer.push(uppLetters[j]);
        length--;
    }
    
    if(length>=0 && lowerActive){
        let i = Math.floor(Math.random()*26);
        answer.push(lowLetters[i]);
        length--;
    }

    if(length>=0 && symbolActive){
        let z = Math.floor(Math.random()*12);
        answer.push(symbols[z]);
        length--;
    }
    if(length>=0 && numberActive){
        let n = Math.floor(Math.random()*10)
        answer.push(n);
        length--;
    }
    }
    
return answer.join("");


}

upperBtn.addEventListener('input',(e)=>{
    if(e.target.checked){
        upperActive = true ;
    }else{
        upperActive = false ;
    }
    
});

lowBtn.addEventListener('input',(e) =>{
    if(e.target.checked){
        lowerActive = true ;
    }else{
        lowerActive = false ;
    }
});

numBtn.addEventListener('input',(e) =>{
    if(e.target.checked){
        numberActive = true ;
    }else{
        numberActive = false ;
    }
});

symbolBtn.addEventListener('input',(e) =>{
    if(e.target.checked){
        symbolActive = true ;
    }else{
        symbolActive = false ;
    }
});

btn.addEventListener('click', () => {
    text.textContent = '';
    let num = Number(lengthEl.value); // گرفتن مقدار از input
    if (isNaN(num) || num <= 0 || num > 30) {
        text.textContent = 'please enter a number between 1 to 30'
        return;
    }

    if(upperActive || lowerActive || numberActive || symbolActive){
        let ramz = passGenerator(num);
        text.textContent = `${ramz}`;
    }
    else{
        text.textContent = 'add some choices'
    }
    
});

