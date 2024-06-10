document.addEventListener("DOMContentLoaded", function() {
    const compchoice = document.getElementById("cc");
    const yourchoice = document.getElementById("yc");
    const results =document.getElementById("rc");
    const choice = document.querySelectorAll('button');
    let computerchoice;
    let userchoice;
    let result;
    choice.forEach((choices)=> {
        choices.addEventListener('click', () => {
           userchoice = choices.id; // Update yourchoice with the button's ID
           yourchoice.innerHTML=userchoice;
           generaterandom();
           compare();
         });   
      }
    );
    function generaterandom(){
        const randomNo= Math.floor(Math.random()*3)+1;
        console.log(randomNo);
        if(randomNo===1){
          computerchoice="rock"
        }
        if(randomNo===2){
          computerchoice="scissors"
        }
        if(randomNo===3){
          computerchoice="paper"
        }
        compchoice.innerHTML=computerchoice;
    }
    function compare(){
        if(computerchoice==='rock'&&userchoice==='rock'){
            result="It's a Draw!"
        }
        if(computerchoice==='paper'&&userchoice==='paper'){
            result="It's a Draw!"
        }
        if(computerchoice==='scissor'&&userchoice==='scissor'){
            result="It's a Draw!"
        }
        if(computerchoice==='rock'&&userchoice==='scissor'){
            result="You lost!"
        }
        if(computerchoice==='rock'&&userchoice==='paper'){
            result="You win!"
        }
        if(computerchoice==='scissor'&&userchoice==='rock'){
            result="You win!"
        }
        if(computerchoice==='scissor'&&userchoice==='paper'){
            result="You lost!"
        }
        if(computerchoice==='paper'&&userchoice==='rock'){
            result="You lost!"
        }
        if(computerchoice==='paper'&&userchoice==='scissor'){
            result="You win!"
        }
        results.innerHTML=result;
    }
})