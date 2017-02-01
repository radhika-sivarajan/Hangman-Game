var artistNames = ["beyonce", "ariana", "zayn", "sia", "bruno", "adele", "rihanna"];
var win = 0;
var guessLimit = 12;
var userInputs = new Array();


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

function resetScore(){
	userInputs.splice(0,userInputs.length);	
	guessLimit = 12;
}

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

function imageMusic(word){

	var urlMusic;

	if(word==="beyonce"){
		document.getElementById("artist-name").innerHTML = "Beyonce - Halo";	
		document.getElementById("picture").src="assets/images/beyonce.jpg";
		urlMusic = "assets/audio/halo.mp3";
		playSound(urlMusic);
	}
	if(word==="ariana"){
		document.getElementById("artist-name").innerHTML = "Ariana Grande- In to you";
		document.getElementById("picture").src="assets/images/ariana.jpg";
		urlMusic = "assets/audio/ariana.mp3";
		playSound(urlMusic);
	}
	if(word==="zayn"){
		document.getElementById("artist-name").innerHTML = "Zayn Malik - Like I would";
		document.getElementById("picture").src="assets/images/zayn.jpg";
		urlMusic = "assets/audio/zayn.mp3";
		playSound(urlMusic);
	}
	if(word==="sia"){
		document.getElementById("artist-name").innerHTML = "Sia - Cheap thrills";
		document.getElementById("picture").src="assets/images/sia.jpg";
		urlMusic = "assets/audio/sia.mp3";
		playSound(urlMusic);
	}
	if(word==="bruno"){
		document.getElementById("artist-name").innerHTML = "Bruno Mars - Uptown funk";
		document.getElementById("picture").src="assets/images/bruno.jpg";
		urlMusic = "assets/audio/bruno.mp3";	
		playSound(urlMusic);
	}
	if(word==="adele"){
		document.getElementById("artist-name").innerHTML = "Adele - Rolling in the Deep";
		document.getElementById("picture").src="assets/images/adele.jpg";
		urlMusic = "assets/audio/adele.mp3";
		playSound(urlMusic);
	}
	if(word==="rihanna"){
		document.getElementById("artist-name").innerHTML = "Rihanna - Diamonds";
		document.getElementById("picture").src="assets/images/rihanna.jpg";
		urlMusic = "assets/audio/rihanna.mp3";
		playSound(urlMusic);
	}

}

function playSound(url){
  var audio = document.createElement('audio');
  //audio.style.display = "none";
  audio.src = url;
  audio.autoplay = true;
  audio.onended = function(){
    audio.remove() //Remove when played.
  };
  document.body.appendChild(audio);
}


var game = startgame();
var curWord = game.currentWord;
var curWordSplit = game.currentWordSplit;
var disp = game.displayWord;

document.onkeydown = function(event) {
	var userGuess = event.key.toLowerCase();

			
	//If key pressed is an alphabet
	if (event.keyCode >= 65 && event.keyCode <= 90){
		if (disp.join()===curWordSplit.join()){	
			imageMusic(curWord);	
			alert("Correct: The word is " + curWord.toUpperCase());
			win++;

			userInputs.splice(0,userInputs.length);	
			guessLimit = 12;
			game = startgame();
			curWord = game.currentWord;
			curWordSplit = game.currentWordSplit;
			disp = game.displayWord;
		}

		if (guessLimit<=0){
			alert("LOST: The word is" + curWord.toUpperCase());
			
			userInputs.splice(0,userInputs.length);	
			guessLimit = 12;
			game = startgame();
			curWord = game.currentWord;
			curWordSplit = game.currentWordSplit;
			disp = game.displayWord;
		}	

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
		console.log(win, curWord, guessLimit, userInputs, curWordSplit, disp);
	
	}
	else{

		alert("Enter an alphabet");
	}
};
	

