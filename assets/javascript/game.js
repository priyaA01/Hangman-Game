/*  global variables declaration */
var wins = 0;


/* function  to start game ,displays the hidden word to find , and allows user to strt entering letters*/
function wordList() {
    document.getElementById("errorMsg").style.display = "none";
    document.getElementById("word").innerHTML = "";
    document.getElementById("wordHidden").innerHTML = "";
    document.getElementById("letter").innerHTML = "";
    document.getElementById("lettersGuessed").innerHTML = "";
    document.getElementById("guessesRemaining").innerHTML = "10";
    var guessesRemaining = 10;
    var lettersGuessed = [];
    var words = ["Australia", "Brazil", "Canada", "Denmark", "Egypt", "France", "India", "Japan", "China", "Mexico"];
    var wordToFind = words[Math.floor(Math.random() * words.length)];
    var displayHyphen = "";

    for (var i = 0; i < wordToFind.length; i++) {

        displayHyphen = displayHyphen + '-';
    }


    document.getElementById("word").innerHTML = displayHyphen;
    document.getElementById("wordHidden").innerHTML = wordToFind;
    //console.log("Word to find   " + wordToFind);


    document.onkeyup = function(event) {

        var x = event.keyCode || event.which;
        var y = String.fromCharCode(x);
        if (x >= 65 && x <= 90 || x >= 97 && x <= 122) {
            document.getElementById("errorMsg").style.display = "none";
            document.getElementById("letter").innerHTML = y.toLowerCase();
            matchingLetters(y.toLowerCase());
        } else {
            document.getElementById("errorMsg").style.display = "block";
            document.getElementById("errorMsg").innerHTML = "Please enter letters from a-z";
        }
    }

}

/* function to find user entered letters match with the word ,if it matches letters show up in the word*/
function matchingLetters(letterEntered) {
    var wordToFind = (document.getElementById("wordHidden").innerHTML).toLowerCase();
    var displayHyphen = document.getElementById("word").innerHTML;

    //console.log(wordToFind + "and" + displayHyphen.length);

    if (wordToFind.indexOf(letterEntered) > -1) {
        for (var i = 0; i < wordToFind.length; i++) {
            if (wordToFind.charAt(i) == letterEntered) {
                displayHyphen = setCharAt(displayHyphen, i, letterEntered);
            }
        }
    }
     else if (lettersGuessed.indexOf(letterEntered) === -1 && guessesRemaining!=0)
            {
                document.getElementById("wrongSound").play();
                lettersGuessed.push(letterEntered);
                document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
                guessesRemaining--;
                document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
           } 
    document.getElementById("word").innerHTML = displayHyphen;

    if (displayHyphen === wordToFind) {
        //mySound.play();
        document.getElementById("correctSound").play();
        wins++;
        document.getElementById("wins").innerHTML = wins;
        //console.log("score increased " + wins);
        wordList();
    } else if (displayHyphen != wordToFind && guessesRemaining === 0) {
        wordList();
    }

}

/*function to replace the letter matched in the word in that position*/
function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}