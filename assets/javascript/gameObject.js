/*  global variables declaration */
var wins = 0;
var guessesRemaining = 10;
var lettersGuessed = [];
var d = document.getElementById("box");

/* an object gameObject is declared with property and methods */
var gameObject = {

     /* words property contains value of all the words */
    "words": ["Australia", "Brazil", "Canada", "Denmark", "Egypt", "France", "India", "Japan", "China", "Mexico"],

    /*displayword function randmly picks a word from the words property and displays it to the user in hyphens , 
    so the user can guess the letter behind each hyphen*/

    displayWord: function() {
        document.getElementById("errorMsg").style.display = "none";
        document.getElementById("word").innerHTML = "";
        document.getElementById("wordHidden").innerHTML = "";
        document.getElementById("letter").innerHTML = "";
        document.getElementById("lettersGuessed").innerHTML = "";
        document.getElementById("guessesRemaining").innerHTML = "10";
        var displayHyphen = "";
        guessesRemaining = 10;
        lettersGuessed = [];
        var wordToFind = this.words[Math.floor(Math.random() * this.words.length)];
        for (var i = 0; i < wordToFind.length; i++) {
            displayHyphen = displayHyphen + '-';
        }
        document.getElementById("word").innerHTML = displayHyphen;
        document.getElementById("wordHidden").innerHTML = wordToFind;
        return wordToFind;
    },

    /*matchingLettrs gets parameter of a letter entered by the user to check with the word in display
     if the letter is in the word , it checks for its position and calls stCharAt method to replace the hyphen in that position
     with te letter entered. it also checks with guesses remaining , if all the guesses are over,the container color changes
     for a second and the user gets a new word to find
     if the word is guessed correctly updateScore function of objectGame is called,

    */

    matchingLetters: function(letterEntered) {
        var wordToFind = (document.getElementById("wordHidden").innerHTML).toLowerCase();
        var displayHyphen = document.getElementById("word").innerHTML;
        if (d.classList.contains("colorChange")) {
            d.classList.remove("colorChange");
        }
        if (wordToFind.indexOf(letterEntered) > -1 && guessesRemaining != 0) {
            for (var i = 0; i < wordToFind.length; i++) {
                if (wordToFind.charAt(i) == letterEntered) {
                    displayHyphen = this.setCharAt(displayHyphen, i, letterEntered);
                }
            }
        } else if (lettersGuessed.indexOf(letterEntered) === -1 && guessesRemaining != 0) {
            lettersGuessed.push(letterEntered);
            document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
            guessesRemaining--;
            document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
        }
        document.getElementById("word").innerHTML = displayHyphen;
        if (displayHyphen === wordToFind) {
            this.updateScore();
        } else if (displayHyphen != wordToFind && guessesRemaining === 0) {
            d.classList.add("colorChange");
            this.displayWord();
        }
    },

    /*setCharAt function is called to set the entered character in all positions matching the position of the letter in the actual word in display
    only if the letter is in the word
    */

    setCharAt: function(str, index, chr) {
        if (index > str.length - 1) return str;
        return str.substr(0, index) + chr + str.substr(index + 1);
    },

    /* updateScore function is called to update the wins if the user guesses the word correctly before the guessesRemaining becomes zero*/

    updateScore: function() {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        this.displayWord();
    }

};

/*
when the user clicks the start button it calls displayWord method inside the gameObject to display number of hyphens matching the word to the user
and it waits for the key press event , once the user press letters , each letter is passed to the function matchngLetters inside the gameObject
 and the function call happens.

 */

document.getElementById("btnGamestart").onclick = function() {

    var wordToFind = gameObject.displayWord();
    document.onkeyup = function(event) {

        var x = event.keyCode || event.which;
        var y = String.fromCharCode(x);

        if (x >= 65 && x <= 90 || x >= 97 && x <= 122) {
            document.getElementById("errorMsg").style.display = "none";
            document.getElementById("letter").innerHTML = y.toLowerCase();
            gameObject.matchingLetters(y.toLowerCase());
        } else {
            document.getElementById("errorMsg").style.display = "block";
            document.getElementById("errorMsg").innerHTML = "Please enter letters from a-z";
        }
    }
}