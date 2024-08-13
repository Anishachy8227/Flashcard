
// bank of questions
const bank = [
    {
        "questions": "Who is known as the Father of the Nation in India?",
        "answers": "Mahatma Gandhi"
    },
    {
        "questions": "Which ocean lies to the south of India?",
        "answers": "The Indian Ocean"
    },
    {
        "questions": "Which is the smallest state in India by area?",
        "answers": "Goa"
    },
    {
        "questions": "What is the national flower of India?",
        "answers": "Lotus"
    },
    {
        "questions": "What is the main ingredient in a traditional Indian chai?",
        "answers": "Tea"
    },
    {
        "questions": "What is the traditional attire worn by women in India called?",
        "answers": "Saree"
    },
    {
        "questions": "Which Indian cricketer is known as the God of Cricket?",
        "answers": "Sachin Tendulkar"
    },
    {
        "questions": "What is the national game of India?",
        "answers": "Hockey"
    },
    {
        "questions": "Which festival is celebrated as the victory of light over darkness?",
        "answers": "Diwali"
    },
    {
        "questions": "Which city is known as the Silicon Valley of India?",
        "answers": " Bengaluru (Bangalore)"
    },
   
]


// setting increment to zero for counting.

let increment = 0;
let counter = 1;
let total = bank.length;


// intializing the first question and first answer;
let firstQuestion = document.getElementById("questions").innerHTML = bank[0].questions;
let firstAnswer = document.getElementById("answers").innerHTML = bank[0].answers;

document.getElementById("total").innerHTML = total;
document.getElementById("current").innerHTML = counter;



// this is back button to go back through the array
let back = document.getElementById("back").addEventListener("click", function(){

    const classCheck = document.getElementById("thecard");

    if (classCheck.matches(".flipCard")){
        cardFlip.classList.remove("flipCard");
        
      } 

  if (increment == 0){
    !increment;
    !counter;
  }else {
    increment--;
    counter--;
    console.log(increment)
    document.getElementById("current").innerHTML = counter;
    document.getElementById("questions").innerHTML = bank[increment].questions;
    setTimeout(() => {
        document.getElementById("answers").innerHTML = bank[increment].answers;
    }, 1000);
  }
})

// This flips the card
let cardFlip = document.getElementById("thecard");
cardFlip.addEventListener("click", function(){
  cardFlip.classList.toggle("flipCard");
});




// function to increment through bank object. if increment is
let next = document.getElementById("next").addEventListener("click", function() {
 
   const classCheck = document.getElementById("thecard");

   if (classCheck.matches(".flipCard")){
        cardFlip.classList.remove("flipCard");
        
      } 


  if (increment < bank.length - 1){
    
    increment++;
    counter++;
    console.log(increment);
    document.getElementById("current").innerHTML = counter;
    document.getElementById("questions").innerHTML = bank[increment].questions;

    setTimeout(() => {
        document.getElementById("answers").innerHTML = bank[increment].answers;
    }, 1000);
    
  } else if (increment == bank.length){
    !increment;
    !counter;
    return;
  }


})


// function flipBack() {
//   let i = document.getElementById("thecard").style.transform;
//
//   if (i == "rotateX(-180deg)") {
//     document.getElementById("thecard").style.transform = "rotateX(180deg)";
//   } else if (i == "rotateX(180deg)") {
//     document.getElementById("thecard").style.transform = "rotateX(0deg)";
//   } else {
//     cardFlip.classList.toggle("flipCard");
//   }
// }