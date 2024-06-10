document.addEventListener("DOMContentLoaded", function () {

    const square = document.querySelectorAll('.square');
    const btn = document.getElementById('btn');
    // console.log(btn);
    // const mole = document.querySelector('.mole').;
    const score = document.getElementById('score');
    const timer = document.getElementById('time-left');
    let timeleft= 10;
    let hitposition;
    let result=0;
    let loop1;
    let loop2;
    function loop() {
        square.forEach(squares => {
            squares.classList.remove("mole");
        })
        let randomesquare = square[Math.floor(Math.random() * 9)]
        randomesquare.classList.add("mole");
         
        hitposition=randomesquare.id;
        console.log(hitposition);
 
    }
    square.forEach(squares=>{
        squares.addEventListener("click",checkforhit);
    });
    function checkforhit(){
       const clickedid= this.id;
       console.log(clickedid);
       if(hitposition==clickedid){
        result++;
        score.innerHTML=result;
        // alert("You have hit a mole!")
       }
    }
    function time(){
        timeleft--
        timer.innerHTML= timeleft;
        if(timeleft==0){
            alert("Game over! Your final score is "+ result);
            clearInterval(loop1);
            clearInterval(loop2);
            timeleft=10;
            result=0;
            square.forEach(squares => {
                squares.classList.remove("mole");
            })
        }

        // console.log(timeleft--);
    }
    
    btn.addEventListener("click", function start() {
        loop1 = setInterval(loop,500);
         loop2 = setInterval(time,1000);
    });

});