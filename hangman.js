// 

const hangman1 = new Hangman("Cat", 2 );

console.log(hangman1.getPuzzle())
const mainDiv = document.createElement("div");
    const letterPara = document.createElement("p");
    const numOfGuessLeft = document.createElement("p");
    document.body.append(mainDiv);
    mainDiv.append(letterPara);
    mainDiv.append(numOfGuessLeft); 


window.addEventListener("keypress", function(e){
    const guess = String.fromCharCode(e.charCode)
    hangman1.makeGuess(guess);
    letterPara.textContent=hangman1.getPuzzle();
    numOfGuessLeft.textContent = hangman1.missedGuessNum;

})