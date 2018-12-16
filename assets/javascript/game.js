
//array of words to choose from 
var wordsArray = [
    "endgame",
    "ring",
    "medicine",
    "delicate"];

var numberOfGuesses = 8
var userGuess = []
var randomWord = ''
var randomWordArr = []
var charIndices = {}

function init() {
    
    //choose a word from the array
    randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    randomWordArr = randomWord.split('')
    console.log(randomWord);
    console.log(randomWordArr)
    charIndices = {}
    
    randomWordArr.forEach(function(character, index) {
        if (charIndices[character]) {
            charIndices[character].push(index)
        } else {
            charIndices[character] = [index]
        }
    })
    console.log(charIndices)
    userGuess = randomWordArr.map(function() {
        return '_'
    })
    document.getElementById('answer').innerText = userGuess.join('')
    console.log(userGuess)
}

document.addEventListener('keyup', function(evt) {
    var key = evt.key
    if (charIndices.hasOwnProperty(key)) {
        var positionArray = charIndices[key]
        positionArray.forEach(function(position) {
            userGuess[position] = key    
        })
        console.log(userGuess)
        document.getElementById('answer').innerText = userGuess.join('')
        document.getElementById('numberOfGuesses').innerText = "UserGuess:" + numberOfGuesses
        if (randomWord === userGuess.join('')) {
            alert('you win!')
             //reset game
            window.onload = init();
        }
    }
    else {
        numberOfGuesses = numberOfGuesses - 1;
        if (numberOfGuesses === 0) {
            alert('You Lost!')
            //reset game
            window.onload = init();
            //doesn't work :c
            document.getElementById("numberOfGuesses").reset();
        }
        
    }

     
})
