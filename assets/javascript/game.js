//Replacing the current word with '_'
function replaceWord(artistName){
	var artistHidden = artistName.replace(/\S/gi, '_ ');
	document.getElementById("current-word").innerHTML = artistHidden;
}

//Reset values of user guesslimit
function resetScore(inputArray){
	inputArray.splice(0,inputArray.length);	
}

//Updating scoreboard with  new win count, guesses remaining, and user input alphabets
function updateScoreboard(win, guessLeft, userLetters){
    document.getElementById("win-count").innerHTML = win;
    document.getElementById("no-guess").innerHTML = guessLeft;			
    document.getElementById("guessed-letters").innerHTML = userLetters;
}

//Checking whether the value in an array
function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

var artistNames = ["beyonce", "ariane", "zayn", "sia", "bruno"];
var artistRandom = artistNames[Math.floor(Math.random() * artistNames.length)];
var game = {
	wins: 0,
	guessLimit: 12,
	currentWord: null,
	startGame: function(word) {
		this.currentWord = word;
		var userInputs = new Array();
		var win = this.wins;
		var gLeft = this.guessLimit;
		var curWord = this.currentWord; 
		var curWordSplit = curWord.split("");

		replaceWord(this.currentWord);
		resetScore(userInputs);
		updateScoreboard(this.wins, gLeft, userInputs);
		
		console.log(this.wins, this.currentWord, this.guessLimit, userInputs);

		document.onkeydown = function(event) {
			var userGuess = event.key.toLowerCase();
					
			//If key pressed is an alphabet
			if (event.keyCode >= 65 && event.keyCode <= 90){

				//If the alphabet already entered
				if (isInArray(userGuess, userInputs)) {
				  alert('Alphabet already entered');
				} else {

					//Check the letter entered in the current word
					if (isInArray(userGuess, curWordSplit)){
						console.log(curWordSplit.indexOf(userGuess));

						//while(curWordSplit.indexOf(userGuess) >= 0) {
							//.splice(location,1)
						//}

					}

					gLeft--;					
					userInputs.push(userGuess);					
					console.log(curWordSplit);

					if (gLeft<1){
						resetScore(userInputs);
						gLeft =12;
					}

					updateScoreboard(win, gLeft, userInputs);
					console.log(gLeft, userInputs);
				}	
			}
			else{
				alert("Enter an alphabet");
			}
		};
	}
};


game.startGame(artistRandom);
