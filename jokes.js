const jokes=require("give-me-a-joke")
const coolors=require("colors")
jokes.getRandomDadJoke(function(joke){
    console.log(joke.rainbow);
})
// console.log(jokes.RandomDadJoke);