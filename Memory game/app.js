
const cardArray=[
    {
        name:'fries',
        image: '../images/fries.png',
    },
    {
        name: 'hotdog',
        image:'../images/hotdog.png'
    },
    {
        name: 'ice-cream',
        image:'../images/ice-cream.png'
    },
    {
        name: 'milkshake',
        image:'../images/milkshake.png'
    },
    {
        name: 'pizza',
        image:'../images/pizza.png'
    },
    {
        name: 'cheese-burger',
        image:'../images/cheeseburger.png'
    },
    {
        name:'fries',
        image: '../images/fries.png',
    },
    {
        name: 'hotdog',
        image:'../images/hotdog.png'
    },
    {
        name: 'ice-cream',
        image:'../images/ice-cream.png'
    },
    {
        name: 'milkshake',
        image:'../images/milkshake.png'
    },
    {
        name: 'pizza',
        image:'../images/pizza.png'
    },
    {
        name: 'cheese-burger',
        image:'../images/cheeseburger.png'
    }
]
cardArray.sort(()=> 0.5- Math.random());
console.log(cardArray);
let cardChosen=[];
let cardChosenId=[];
const cardswon=[];
const gridselect= document.getElementById('grid');
function creategrid(){
    for(let i=0; i<cardArray.length; i++){
        const card= document.createElement('img');
        card.removeAttribute('src');
        card.setAttribute('src','../images/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click', flipcard);
        gridselect.appendChild(card);
    } 
}
creategrid()
function checkformatch() {
    const card= document.querySelectorAll('img');
    const wc= document.getElementById('result');
    console.log("math");
    const firstcardid= cardChosenId[0];
    const secondcardid= cardChosenId[1];
    if(firstcardid==secondcardid){
        alert("You have clicked same image!")
        card[firstcardid].setAttribute('src','../images/blank.png')
    }
    else if(cardChosen[0]===cardChosen[1]){
        alert("you got a match!")
        card[firstcardid].setAttribute('src','../images/white.png');
        card[secondcardid].setAttribute('src','../images/white.png');
        card[firstcardid].removeEventListener('click',flipcard);
        card[secondcardid].removeEventListener('click',flipcard);

        cardswon.push(cardChosen);
        console.log(cardswon);
        wc.innerHTML=cardswon.length;
    }
    else{
        card[firstcardid].setAttribute('src','../images/blank.png')
        card[secondcardid].setAttribute('src','../images/blank.png')
    }

    cardChosen=[];
    cardChosenId=[];

}
function flipcard(){
    let cardid= this.getAttribute('data-id');
    cardChosen.push(cardArray[cardid].name)
    cardChosenId.push(cardid);
    console.log(cardChosen);
    console.log(cardChosenId);
    this.setAttribute('src',cardArray[cardid].image)
    if(cardChosen.length==2){
        setTimeout(checkformatch,500)
        
    }
    
}