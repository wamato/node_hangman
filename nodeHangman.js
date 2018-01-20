//provides a playable word through an input made in node
var input = process.argv[2];

function Word(words, dashes) {
    this.words = [];
    this.dashes = [];
    this.letters = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
   
    this.play = function () {
        if (!input) {
            console.log(`Enter a single word to play!`);
        }
        else{
            this.words.push(input);
            console.log(this.words[0]);
        }
    }
    this.showDashes = function(){
        if (!input){
            console.log("node nodehangman.js (your words goes here)");
        }
        else{
            var dashLength = this.dashes.length;
            this.dashes.push(input);
            for (x = 0; x < dashLength; x++){
               
            }
            console.log(this.dashes);

        }
    }
}   

var player = new Word();
player.play();
player.showDashes();
//right now this code lets a user input a word and then it displays the word in 2 arrays. I ultimately wanted one
//to be used as a comparison and have the other be converted into dashes. then when a user inputed guesses, if they matched,
//the dashes would be replaced. The would be the basis of the game. I wanted to try and make this "2 player" version of the game
//where a user inputs the word to be guessed. If statments added to the game would allow for scoring and guesses left functionality.