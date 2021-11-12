// 

const Hangman = function(word, missedGuessNum){
    this.word = word;
    this.missedGuessNum = missedGuessNum;
}



const hangman1 = new Hangman("Cat", 2);
const hangman2 = new Hangman("New Jersey", 4);

console.log(hangman1);
console.log(hangman2);