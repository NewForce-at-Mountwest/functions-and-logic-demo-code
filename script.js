// Scope

// function sayHello(){
//     var greeting = "Hello"
// }
// console.log(greeting);

// if (2 + 2 === 3) {
//   let isTrustWorthy = true;
//   let secret;

//   if (isTrustWorthy === true) {
//     secret = "I've had way too much coffee this morning";
//     isTrustWorthy = false;
//   }
//   console.log("is it trustworthy?", isTrustWorthy);
//   console.log(secret);
// }

// console.log(secret)

// LIGHTNING EXERCISE 1
// Copy and paste the following code block into your file
let sentenceBeginning = "The symtoms of Covid-19 are"
const symtoms = ["cough", "fever", "exhaustion", "loss of sense of smell", "difficulty breathing"]
const mySymtoms = [];

// This loop will go through each symtom, concatenate it to our sentence, and push it into a new array of our own personal symtoms
for(let i = 0; i < symtoms.length; i++){
    sentenceBeginning += ` ${symtoms[i]}`
    mySymtoms.push(symtoms[i])
}
// console.log("this is sentence beginning", sentenceBeginning)
// console.log("my symtoms", mySymtoms)
// Using the new variable keywords we just learned, troubleshoot this code so that it runs without errors









//LIGHTNING EXERCISE 2
// Copy and paste the following code block into your file
// let taco;
function tacoTruck(shellType, toppings){
    taco = `A ${shellType} taco with ${toppings}`
}
// tacoTruck("crunchy", "chicken")
// console.log(taco)
// Using the new variable keywords we just learned, refactor this code so that we can log what type of taco we ordered outside of the function without error messages


// let shellType = "soft"
// let toppings = "beans and cheese"

// console.log(`A ${shellType} taco with ${toppings}`)


// shellType = "crunchy"
// toppings = "fish"


// Build a sentence about tacos
// Maker function
function buildTacoSentence(shellType, toppings){
    const tacoSentence = `A ${shellType} taco with ${toppings}`
    return tacoSentence;
}

const fishTacoSentence = buildTacoSentence("crunchy", "fish")
// console.log("this is from the first function", fishTacoSentence)


// Convert sentence to uppercase
// Maker function
function convertToScreaming(phrase){
    return `${phrase.toUpperCase()}!!!!!!!!!!!!!!!!!!!!`
}

const screamFishTaco = convertToScreaming(fishTacoSentence)
const screamingPatGreeting = convertToScreaming("hey pat")
// Print sentence to console
// Doer function
function printPhraseToConsole(phraseToPrint){
    console.log("this is from the third function", phraseToPrint)
}

// printPhraseToConsole(screamFishTaco);
printPhraseToConsole(screamingPatGreeting)

// function printTaco(shellType, toppings){
//     console.log(`A ${shellType} taco with ${toppings}`.toUpperCase())
// }

// printTaco("soft", "beans and cheese")
// printTaco("crunchy", "fish")
// printTaco("crunchy", "beef")

function greetAFriend(firstName, lastName){
    if(firstName === "Dwayne" && lastName === "The Rock Johnson"){
        return `HELLO THE ROCK`
    } else {
        return `Hello, ${firstName} ${lastName}`
    }

}

const greeting = greetAFriend("Barry", "Griffith")
const theRockGreeting = greetAFriend("Dwayne", "The Rock Johnson")
console.log(greeting)
console.log(theRockGreeting)
