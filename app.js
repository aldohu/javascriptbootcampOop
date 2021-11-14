//Primitive values : strings numbers null undefined boolean

//Object product --> Object.prototype --> null

//Array: myArray --> Array.prototype --> Object.prototype --> null

//Function: myFunc --> Function.prototype --> Object.prototype --> null


//String: myString --> String.prototype --> Object.prototype --> null

//Number: myNumber --> Number.prototype --> Object.prototype --> null

//Boolean: myBoolean --> Boolean.protoype --> Object.prototype --> null
// constructor function for hangman obj

let statusOfGame = "playing";
const Hangman = function(word, missedGuessNum){
    this.word = word.toLowerCase().split("");
    this.missedGuessNum = missedGuessNum;
    this.guessedLetters = [];
    console.log(statusOfGame)

}
//create getPuzlle method

Hangman.prototype.getPuzzle = function(){
    let puzzle = ""
  this.word.forEach(letter => {
      if(this.guessedLetters.includes(letter) || letter === " "){
          puzzle+= letter;
      }else {
          puzzle+= "*"
          
      }
  });
  return puzzle
}


//create makeGuss method 

Hangman.prototype.makeGuess = function(guess) {
    guess= guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess)
    if(isUnique){
        this.guessedLetters.push(guess);
    }
    if(isUnique && isBadGuess){
        this.missedGuessNum--
    }

    if(this.missedGuessNum === 0) {
        statusOfGame = "failed";
        console.log(statusOfGame);
    }
    world
}

const createDomElements=(element)=> {
    
    
}