# Hangman-Game


This game will run in the browser, and feature dynamically updated HTML and CSS powered by Vanilla JavaScript.

Using Vanilla Javascript, once user clicks on start button, a country name is randomly picked from an array and shown with the letters replaced by hyphens for the user to guess the word.

Using Javascript onKeyup event handler we display letters entered by the users.

If any letter matches with the letters in the word, we replace the hyphen with the letter in the repective positions of the word. 

## Chellenges

If the user entered letter appears in many places in the given word, then to replace hyphen with letter in all those indexes was a challenge I tried to figure out and finally got it.

### How it Works

- This game contains words of Country names and uses key events to listen for the letters that players will type.

- Users should Press Start button to get started.

- For each word players are given 10 guesses to find the word.

- If the player guesses the word correctly within 10 guesses, he wins.

- If the player fails to guess the word within 10 guesses, he loses.

- For each word user guessed letters are displayed allowing him to try new letters.

- After the user wins/loses the game automatically choose another word and make the user play it .

#### Author

 Priya Ammaiyappan
