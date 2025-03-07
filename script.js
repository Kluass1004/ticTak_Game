// let box1
// let box2
// let box3
// let box4
// let box5
// let box6
// let box7
// let box8
// let box9
// let currentPlayer = 'Player1' 
// alert('Player 1 make your selection')
// function playerClickbox1(data){
//     box1=true;
    
//     let boxId=document.querySelector('#b1');
   
//     boxId.style.backgroundColor = 'aqua';
//     boxId.innerText ='O'
//     alert('Player 2 make your selection')
// }
let boxes=document.querySelectorAll('.box')
let resetBtn=document.querySelector('#reset');
let newBtn=document.querySelector('.newGame');
let winmsg=document.querySelector('#winmsg')
let msg=document.querySelector('h2')
let playerO=true
let Winner =''
 const winningPatern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
 ]

 boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("BOX is clicked");
        if(playerO){
        box.innerText= 'O'
            playerO=false
        }else{
            box.innerText= 'X'
            playerO=true
        }
        box.disabled = true;
        checkWinniingStreak();
    })
 })

 function checkWinniingStreak(){
    
   winningPatern.forEach((e)=>{
    // console.log(boxes[e[0]],boxes[e[1]],boxes[e[2]]);
    if((boxes[e[0]].innerText) === 'O' && (boxes[e[1]].innerText) === 'O' && (boxes[e[2]].innerText) === 'O'){
        msg.innerText = `Congratulations the winner is ${ boxes[e[0]].innerText}`
        winmsg.classList.remove('hide')
        disableBoxes();
    }
    if((boxes[e[0]].innerText) === 'X' && (boxes[e[1]].innerText) === 'X' && (boxes[e[2]].innerText) === 'X'){
        msg.innerText = `Congratulations!! the winner is ${ boxes[e[0]].innerText}`
        winmsg.classList.remove('hide')
        disableBoxes();
    }
   })
 }

 function disableBoxes(){
    for(let box of boxes){
        box.disabled =  true;
    }
 }
 function enableBoxes(){
    for(let box of boxes){
        box.disabled =  false;
        box.innerText= ''
    }
 }

 function resetGame(){
    playerO = true;
    enableBoxes();
    winmsg.classList.add('hide')
 }

 resetBtn.addEventListener('click',resetGame)
 newBtn.addEventListener('click',resetGame)