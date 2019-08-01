let btnPress = document.getElementById('startbutton')
let dicevalue =  document.getElementById('dicenum')
let currentscore =  document.getElementById('userscore')
let usermessage =  document.getElementById('message1')
let diceImage = document.getElementById('diceimage')

let diceNumber; 
let score = 0;


// let roll = document.addEventListener("click", () =>{
//     console.log("you rolled the dice")
// })

//looks for button press 
btnPress.addEventListener("click", ()=>{
    btnPress.innerHTML = "ROLL"
    rollDice()
})

// rolls dice 
const rollDice = () => {
    diceNumber = Math.floor(Math.random()* 6)+1
    console.log(diceNumber)
    score += diceNumber
    dicenum.innerHTML = diceNumber;
    diceImage.src = `img/dice${diceNumber}.png`
    console.log(score)
    scoreCalc()
}


// if player rolls 1 then game over, if reaches 20 they win
const scoreCalc = () => {
    if(score == 1 || diceNumber == 1){
        message1.innerHTML = "Sorry you rolled 1 \n you're a loser"
        userscore.innerHTML = score;
       end();
    }
    else if (score >= 20){
        userscore.innerHTML = score;
        message1.innerHTML = "You're a winner!!!!!!!"
        end()
    
    }
    else{
        userscore.innerHTML = score;
        message1.innerHTML = "Roll again"

        // alert("roll again")
    }
}


const end = () => {
    btnPress.innerHTML = "Play Again?"
    diceNumber = 0; 
    score = 0;
    userscore.innerHTML = score;
    dicenum.innerHTML = diceNumber;
}