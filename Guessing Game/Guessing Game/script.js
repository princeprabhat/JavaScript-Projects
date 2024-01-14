'use strict';



let specialValue = Number(Math.trunc(Math.random(1)*20+1));


let score = 20;

document.querySelector('.check').addEventListener('click',()=>{
    let num = Number(document.querySelector('.guess').value);
        

        if(!num){
            document.querySelector('.message').textContent="Not a Number";
        }

        else if(num===specialValue){
            document.querySelector('.message').textContent="Correct Number!!";
            document.querySelector('.number').textContent=specialValue;
            document.querySelector('body').style.backgroundColor='#60b347';
            document.querySelector('.number').style.width='30rem';
            document.querySelector('.highscore').textContent=score;
        }
        if(score>1){
             if(num>specialValue){
                document.querySelector('.message').textContent="Too big"; 
                score--;
                document.querySelector('.score').textContent=score;
            }
            
            else if(num<specialValue){
                document.querySelector('.message').textContent="Too small"; 
                score--;
                document.querySelector('.score').textContent=score;
            }
        }
        

        else{
            document.querySelector('.message').textContent="You Lost :("; 
            score=0;
            document.querySelector('.score').textContent=score;
        }
    
    
});

document.querySelector('.again').addEventListener('click',()=>{
    
    document.querySelector('.number').innerHTML='?';
    document.querySelector('body').style.backgroundColor='';
            document.querySelector('.number').style.width='15rem';
            document.querySelector('.guess').value='';
            document.querySelector('.message').textContent="Start guessing...";
            document.querySelector('.highscore').textContent=score;
            document.querySelector('.score').textContent='20';
});