var artistNames = ["beyonce", "ariana", "zayn", "sia", "bruno", "adele", "rihanna"];
var win = 0;
var guessLimit = 12;
var userInputs = new Array();

//Stat game (generate random name, display as '_', create an array  with the generated word )
function startgame(){
	var currentWord = randomWord();
	var currentWordSplit = currentWord.split("");
	var displayWord = new Array();

	for(var i = 0; i < currentWord.length; i++){
		displayWord[i]= '_ ';
	}
	replaceWord(displayWord.join(' '));

	return {
		currentWord: currentWord,
		currentWordSplit: currentWordSplit,
		displayWord: displayWord
	};
}

//Generate random artist name from the list
function randomWord(){
	return artistNames[Math.floor(Math.random() * artistNames.length)];	
}

//Replacing the current word with '_'
function replaceWord(word){
	document.getElementById("current-word").innerHTML = word;
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

//If the guessed name is correct play music, update image and title corresponding to the artist 
function imageMusic(word){

	var artistSong = document.getElementById("music"); 

	if(word==="beyonce"){
		document.getElementById("artist-name").innerHTML = "Beyonce - Halo";	
		document.getElementById("picture").src="assets/images/beyonce.jpg";
		artistSong.setAttribute('src', "assets/audio/halo.mp3");
	}
	if(word==="ariana"){
		document.getElementById("artist-name").innerHTML = "Ariana Grande- In to you";
		document.getElementById("picture").src="assets/images/ariana.jpeg";
		artistSong.setAttribute('src', "assets/audio/ariana.mp3");
	}
	if(word==="zayn"){
		document.getElementById("artist-name").innerHTML = "Zayn Malik - Like I would";
		document.getElementById("picture").src="assets/images/zayn.jpg";
		artistSong.setAttribute('src', "assets/audio/zayn.mp3");
	}
	if(word==="sia"){
		document.getElementById("artist-name").innerHTML = "Sia - Cheap thrills";
		document.getElementById("picture").src="assets/images/sia.jpg";
		artistSong.setAttribute('src', "assets/audio/sia.mp3");
	}
	if(word==="bruno"){
		document.getElementById("artist-name").innerHTML = "Bruno Mars - Uptown funk";
		document.getElementById("picture").src="assets/images/bruno.jpg";
		artistSong.setAttribute('src', "assets/audio/bruno.mp3");
	}
	if(word==="adele"){
		document.getElementById("artist-name").innerHTML = "Adele - Rolling in the Deep";
		document.getElementById("picture").src="assets/images/adele.jpg";
		artistSong.setAttribute('src', "assets/audio/adele.mp3");
	}
	if(word==="rihanna"){
		document.getElementById("artist-name").innerHTML = "Rihanna - Diamonds";
		document.getElementById("picture").src="assets/images/rihanna.jpg";
		artistSong.setAttribute('src', "assets/audio/rihanna.mp3");
	}
}

//Reset Score and clear user input
function resetScore(){
	userInputs.splice(0,userInputs.length);	
	guessLimit = 12;
	updateScoreboard(win, guessLimit, userInputs);
}

var game = startgame();
var curWord = game.currentWord;
var curWordSplit = game.currentWordSplit;
var disp = game.displayWord;

document.onkeydown = function(event) {
	var userGuess = event.key.toLowerCase();
		
	//If key pressed is an alphabet
	if (event.keyCode >= 65 && event.keyCode <= 90){

		//If the alphabet already entered
		if (isInArray(userGuess, userInputs)) {

	  		alert('Alphabet already entered');
		} else {

			guessLimit--;
			userInputs.push(userGuess);
			for(var i = 0; i < curWord.length; i++){
				
		    	// Check the input against the current letter we're looping over
		    	if(userGuess === curWord[i]){
		      		
		          	// We have a match, put the letter in the same position
		          	disp[i]= userGuess;
		    	}
	  		}	
	  		document.getElementById("current-word").innerHTML = disp.join(' ');			  		
	  		updateScoreboard(win, guessLimit, userInputs);
		}

		//If the user guessed the name correctly
		if (disp.join()===curWordSplit.join()){
			win++;	
			userInputs.push(userGuess);
			imageMusic(curWord);
			alert("WON: The word is " + curWord.toUpperCase());
			resetScore();

			game = startgame();
			curWord = game.currentWord;
			curWordSplit = game.currentWordSplit;
			disp = game.displayWord;			
		}

		//If the guess limit is over
		if (guessLimit<=0){
			alert("LOST: The word is " + curWord.toUpperCase());			
			resetScore();

			game = startgame();
			curWord = game.currentWord;
			curWordSplit = game.currentWordSplit;
			disp = game.displayWord;			
		}	

		//console.log(" VARIABLES win: " + win + " curWord: " + curWord + " guessLimit: " + guessLimit + " userInputs: " + userInputs + " curWordSplit: " + curWordSplit + " disp: " + disp);
	
	}
	else{

		alert("Enter an alphabet");
	}
};
	

