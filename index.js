// my Dice Roller Programm

function rollDice(){

const numOfDice = document.getElementById("numOfDice").value;
const diceResult = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImages");
const values = [];
const images = [];

//create for loop
for(let i=0; i< numOfDice; i++){
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value); //using array method
    images.push(`<img src="dice_images/${value}.jpg" alt="${value}">`);

}
diceResult.textContent = `dice: ${values.join(`, `)}`; //buit-in join method
diceImages.innerHTML = images.join('');
}